import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPage } from "./util/common.util";

import {
  PlaywrightVisualRegressionTracker,
  Config,
  PageTrackOptions,
} from "@visual-regression-tracker/agent-playwright";
import { chromium } from "@playwright/test";

const config: Config = {
  apiUrl: "" + process.env.VRT_APIURL, // URL where backend is running
  project: "" + process.env.VRT_PROJECT, // Project name or ID
  apiKey: "" + process.env.VRT_APIKEY, // User apiKey
  branchName: "" + process.env.VRT_BRANCHNAME, // Current git branch
  ciBuildId: "CURRENT_blogs",
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

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

//Import test data for blogs
const testDataForItems = require("../tests/testData/blogs.json");

// Iterate over the imported JSON array
test.describe("English - Blogs", () => {
  testDataForItems.forEach((item: any, index: number) => {
    test(`${item.label}`, async ({ page }) => {
      await navigateToPage(page, item.referenceUrl);

      await vrt.trackPage(page, item.label, trackOptions);

      // await expect(page).toHaveScreenshot(`${ item.label }.png`, {
      //   fullPage: true,
      // });
    });
  });
});
