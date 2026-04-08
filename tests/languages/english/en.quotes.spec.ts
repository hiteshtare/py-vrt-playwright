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

test.describe("Quotes - Tabs check", () => {
  test("#1 Quote on Homepage", async ({ page }) => {
    const url = `/#quote`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await scrollTopForStickyHeader(page);

    const selector = await page.$(`.elementor-section.elementor-top-section.elementor-element.elementor-element-31fbe82e > .elementor-background-overlay`);
    await vrt.trackElementHandle(
      selector,
      "#1.1 Homepage default Quote - en",
      trackOptions,
      APP_CONFIG.retryCount,
    );

    //Click on Hindi language tab
    await page.getByRole("tab", { name: "Hindi" }).click();

    await vrt.trackElementHandle(
      selector,
      "#1.2 Homepage Quote - hi",
      trackOptions,
      APP_CONFIG.retryCount,
    );

    //Click on Tamil language tab
    await page.getByRole("tab", { name: "Tamil" }).click();

    await vrt.trackElementHandle(
      selector,
      "#1.3 Homepage Quote - ta",
      trackOptions,
      APP_CONFIG.retryCount,
    );

    //Click on Telugu language tab
    await page.getByRole("tab", { name: "Telugu" }).click();

    await vrt.trackElementHandle(
      selector,
      "#1.4 Homepage Quote - te",
      trackOptions,
      APP_CONFIG.retryCount,
    );
  });

  test("#2 Quote Archive", async ({ page }) => {
    const url = `quote`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#2.1 Quote Archive default - en", trackOptions);

    //Click on Marathi language tab
    await page.getByRole("tab", { name: "Marathi" }).click();

    await vrt.trackPage(page, "#2.2 Homepage Quote - mr", trackOptions);

    //Click on Gujarati language tab
    await page.getByRole("tab", { name: "Gujarati" }).click();

    await vrt.trackPage(page, "#2.3 Homepage Quote - gu", trackOptions);
  });
});
