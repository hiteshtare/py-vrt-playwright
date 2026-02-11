// Import node modules
import { expect, Page } from "@playwright/test";
import { getLogger, Logger } from "log4js";
import * as log4js from "log4js";
import dateFormat from "dateformat";
import { config } from "dotenv";

// Import custom config
import { APP_CONFIG } from "../config";

// Import configuration/variables from .env file in root folder
config();

// Logger initialise
const _logger = getLoggerLevel();

export function loadConfigFromENV(): void {
  _logger.warn("loadConfigFromENV");

 APP_CONFIG.loggerLevel = "" + process.env.LOGGER_LEVEL;
  _logger.info(`loggerLevel : ${APP_CONFIG.loggerLevel}`);

   APP_CONFIG.layout = "" + process.env.LAYOUT;
  _logger.info(`layout : ${APP_CONFIG.layout}`);

   APP_CONFIG.isGenerateCache = process.env.GEN_CACHE === 'true';
  _logger.info(`isGenerateCache : ${APP_CONFIG.isGenerateCache}`);

  APP_CONFIG.baseURL = "" + process.env.BASE_URL;
  APP_CONFIG.authPopUpUser = "" + process.env.AUTH_POPUP_USER;
  APP_CONFIG.authPopUpPassword = "" + process.env.AUTH_POPUP_PASSWORD;
  APP_CONFIG.loginEmail = "" + process.env.LOGIN_EMAIL;
  APP_CONFIG.loginPassword = "" + process.env.LOGIN_PASSWORD;
  _logger.info(`baseURL : ${APP_CONFIG.baseURL}`);
  //Logging env variables for debugging
  // console.debug(`authPopUpPassword : ${process.env.AUTH_POPUP_PASSWORD}`);
}

export function getLoggerLevel(): Logger {
  log4js.configure({
    appenders: {
      out: {
        type: "stdout",
        layout: {
          type: "pattern",
          pattern: "%[%x{customDate} [%p] - %m%]",
          tokens: {
            customDate: function (logEvent: any) {
              const eventStartTime = new Date(logEvent.startTime);
              const customDateTimeFormat = dateFormat(
                eventStartTime,
                "dddd, mmm d yyyy, hh:MM:ss TT"
              );
              // modify as you want the timestamp for example getting it in the local time zone
              return customDateTimeFormat;
            },
          },
        },
      },
    },
    categories: { default: { appenders: ["out"], level: "debug" } },
  });

  const logger = getLogger();
  logger.level = APP_CONFIG.loggerLevel;
  return logger;
}


export async function navigateToPageWithInterations(page: Page, urlLegacy: string) {
  // _logger.warn("navigateToPageWithInterations");

  let finalURL = "";
  const url = removeDomainRegex(urlLegacy);

  _logger.debug(`url: ${url}`);

  if (APP_CONFIG.baseURL === "yssofindia.org") {
    finalURL = `https://${APP_CONFIG.baseURL}/${url}`;
  } else {
    finalURL = `https://${APP_CONFIG.authPopUpUser}:${APP_CONFIG.authPopUpPassword}@${APP_CONFIG.baseURL}/${url}`;
  }
  expect
    .soft(
      true,
      `Test: https://${APP_CONFIG.authPopUpUser}:${APP_CONFIG.authPopUpPassword}@${APP_CONFIG.baseURL}/${url}`
    )
    .toBeTruthy();
  expect.soft(true, `Reference: https://yssofindia.org/${url}`).toBeTruthy();
  _logger.info(`link: ${finalURL}`);
  return await page.goto(finalURL, {
    waitUntil: "load",
  });
}

export async function navigateToPage(page: Page, url: string) {
  // _logger.info("navigateToPage");

  expect.soft(true, `url: ${url}`).toBeTruthy();
  _logger.debug(`link: ${url}`);
  return await page.goto(url, {
    waitUntil: "load",
  });
}

export function removeDomainRegex(urlString: string) {
  // This regex matches the protocol and the host (up to the first path segment)
  // and replaces it with an empty string.
  return urlString.replace(/^.*:\/\/[^/]+/, "");
}
