import {
  PlaywrightVisualRegressionTracker,
  Config,
  PageTrackOptions,
} from "@visual-regression-tracker/agent-playwright";
import test, { chromium } from "@playwright/test";
import { navigateToPage } from "./common.util";

export function setupVRT(projectId: string, buildName: string) {
  const buildId = `${
    process.env.VRT_BUILDPREFIX
  }_${buildName}_${new Date().toLocaleDateString("en-IN")}`;

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
    // agent: {
    //   device: "Desktop",
    //   os:"Linux",
    //   viewport: "1366x768"
    // }
  };

  return { vrt, trackOptions };
}

export function trackPagesInVRT(vrt: any, trackOptions: any, filePath: string) {
  const testDataForItems = require(filePath);

  testDataForItems.forEach((item: any, index: number) => {
    test(`${item.label}`, async ({ page }) => {
      await navigateToPage(page, item.url);

      await vrt.trackPage(page, item.label, trackOptions);

      // await expect(page).toHaveScreenshot(`${ item.label }.png`, {
      //   fullPage: true,
      // });
    });
  });
}
