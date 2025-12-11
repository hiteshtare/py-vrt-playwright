// Import node modules
import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPage } from "../util/common.util";
import { setupVRT } from "../util/vrt.util";
import { APP_CONFIG } from "../config";

//Import test data for priority-pages
const testDataForItems = require("../../tests/testData/priority-pages/ta-priority-pages.json");

const { vrt, trackOptions } = setupVRT(
  "priority-pages",
  APP_CONFIG.vrtProjects.Tamil
);

// Iterate over the imported JSON array
test.describe.skip("Tamil - Priority Pages", () => {
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
