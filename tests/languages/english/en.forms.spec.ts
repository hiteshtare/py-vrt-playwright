import { Page } from "@playwright/test";
// Import node modules
import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPageWithInterations } from "../../util/common.util";
import {
  scrollTopForStickyHeader,
  setupVRT,
  trackPagesInVRT,
} from "../../util/vrt.util";
import { APP_CONFIG } from "../../config";

const { vrt, trackOptions } = setupVRT(
  APP_CONFIG.projects.English.Id,
  "quotes",
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe.skip("Gravity Forms - Submissions", () => {
  test("#1 Prayer Form", async ({ page }) => {
    const url = `prayer`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#1.1 Prayer Form - Loaded", trackOptions);

    //Click on Submit to fire validations
    await page.getByRole('button', { name: 'Submit' }).click();

    await vrt.trackPage(page, "#1.2 Prayer Form - Validations", trackOptions);
  });
});
