// Import node modules
import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPage } from "../util/common.util";
import { setupVRT } from "../util/vrt.util";
import { APP_CONFIG } from "../config";

//Import test data for blogs
const testDataForItems = require("../../tests/testData/tamil/blogs.json");

const { vrt, trackOptions } = setupVRT(
  "blogs",
  APP_CONFIG.vrtProjects.Tamil
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

// Iterate over the imported JSON array
test.describe("Tamil - Blogs", () => {
  testDataForItems.forEach((item: any, index: number) => {
    test(`${item.label}`, async ({ page }) => {
      await navigateToPage(page, item.url);

      await vrt.trackPage(page, item.label, trackOptions);

      // await expect(page).toHaveScreenshot(`${ item.label }.png`, {
      //   fullPage: true,
      // });
    });
  });
});
