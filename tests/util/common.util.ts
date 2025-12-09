import { expect, Page } from "@playwright/test";

// Import custom config
import { APP_CONFIG } from "../config";

export function loadConfigFromENV(): void {
  console.warn("loadConfigFromENV");

  APP_CONFIG.baseURL = "" + process.env.BASE_URL;
  APP_CONFIG.authPopUpUser = "" + process.env.AUTH_POPUP_USER;
  APP_CONFIG.authPopUpPassword = "" + process.env.AUTH_POPUP_PASSWORD;
  APP_CONFIG.loginEmail = "" + process.env.LOGIN_EMAIL;
  APP_CONFIG.loginPassword = "" + process.env.LOGIN_PASSWORD;
  console.warn(`baseURL : ${APP_CONFIG.baseURL}`);
  //Logging env variables for debugging
  // console.debug(`authPopUpPassword : ${process.env.AUTH_POPUP_PASSWORD}`);
}

export async function navigateToPage(page: Page, urlLegacy: string) {
  let finalURL = "";
  const url = removeDomainRegex(urlLegacy);
  console.warn(`url: ${url}`);

  if (APP_CONFIG.baseURL === "yssofindia.org") {
    finalURL = `https://${APP_CONFIG.baseURL}${url}`;
  } else {
    finalURL = `https://${APP_CONFIG.authPopUpUser}:${APP_CONFIG.authPopUpPassword}@${APP_CONFIG.baseURL}${url}`;
  }
  expect
    .soft(
      true,
      `Test: https://${APP_CONFIG.authPopUpUser}:${APP_CONFIG.authPopUpPassword}@${APP_CONFIG.baseURL}${url}`
    )
    .toBeTruthy();
  expect.soft(true, `Reference: https://yssofindia.org/${url}`).toBeTruthy();
  console.warn(`link: ${finalURL}`);
  return await page.goto(finalURL, {
    waitUntil: "load",
  });
}

export function generateShortRandomChars() {
  // toString(36) converts to base 36 (0-9, a-z)
  // slice(2, 8) extracts characters from index 2 up to (but not including) 8, resulting in a 6-character string.
  return Math.random().toString(36).slice(2, 8);
}

export function removeDomainRegex(urlString: string) {
  // This regex matches the protocol and the host (up to the first path segment)
  // and replaces it with an empty string.
  return urlString.replace(/^.*:\/\/[^/]+/, "");
}
