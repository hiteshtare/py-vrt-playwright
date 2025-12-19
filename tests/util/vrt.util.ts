import {
  PlaywrightVisualRegressionTracker,
  Config,
  PageTrackOptions,
} from "@visual-regression-tracker/agent-playwright";
import test, { chromium } from "@playwright/test";
import { config } from "dotenv";

//Importing Custom modules
import { APP_CONFIG } from "../config";
import { getLoggerLevel, navigateToPage } from "./common.util";

// Import configuration/variables from .env file in root folder
config();

// Logger initialise
const _logger = getLoggerLevel();

export function setupVRT(projectId: string, buildName: string) {
  let layoutAgent = {
    device: "Desktop",
    viewport: "1280x720",
  };

  // _logger.debug(APP_CONFIG.layout);
  
  if (APP_CONFIG.layout === "Mobile") {
    layoutAgent = {
      device: "Mobile",
      viewport: "375x667",
    };
  }

  const buildId = `${process.env.VRT_BUILDPREFIX}_${buildName}_[${
    APP_CONFIG.layout
  }]_${new Date().toLocaleDateString("en-IN")}`;

  const config: Config = {
    apiUrl: "" + process.env.VRT_APIURL, // URL where backend is running
    project: projectId,
    apiKey: "" + process.env.VRT_APIKEY, // User apiKey
    branchName: "" + process.env.VRT_BRANCHNAME, // Current git branch
    ciBuildId: buildId,
    enableSoftAssert: true, // Log errors instead of throwing exceptions
  };
  const browserName = chromium.name();

  const vrt = new PlaywrightVisualRegressionTracker(browserName, config);

  const trackOptions: PageTrackOptions = {
    diffTollerancePercent: 5,
    screenshotOptions: {
      fullPage: true,
    },
    agent: layoutAgent,
  };

  return { vrt, trackOptions };
}

export function trackPagesInVRT(vrt: any, trackOptions: any, filePath: string) {
  const testDataForItems = require(filePath);

  testDataForItems.forEach((item: any, index: number) => {
    test(`${item.label}`, async ({ page }) => {
      if (APP_CONFIG.baseURL === "yssofindia.org") {
        await navigateToPage(page, item.referenceUrl);
      } else {
        await navigateToPage(page, item.url);
      }

      if (item.elementSelector) {
        _logger.info("elementSelector");
        _logger.debug(item.elementSelector);

        const selector = await page.$(`${item.elementSelector}`);
        await vrt.trackElementHandle(
          selector,
          item.label,
          trackOptions,
          APP_CONFIG.retryCount
        );
      } else {
        if (item.clickSelector) {
          _logger.info("clickSelector");
          _logger.debug(item.clickSelector);

          await page.locator(item.clickSelector).click();
        }
        await vrt.trackPage(
          page,
          item.label,
          trackOptions,
          APP_CONFIG.retryCount
        );
      }

      // await expect(page).toHaveScreenshot(`${ item.label }.png`, {
      //   fullPage: true,
      // });
    });
  });
}
