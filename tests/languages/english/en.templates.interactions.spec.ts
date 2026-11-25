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
  "templates-interactions",
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe("Templates - Interactions", () => {
  test("#1 Bookstore Menu - Hover", async ({ page }) => {
    const url = `prayer`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    //Hover on Bookstore to load its Menu sections
    await page.locator('a').filter({ hasText: 'Bookstore' }).first().hover();

    // const selector = await page.$(`.elementor-section.elementor-top-section.elementor-element.elementor-element-31fbe82e > .elementor-background-overlay`);
    // await vrt.trackElementHandle(
    //   selector,
    //   "#1.1 Bookstore Menu - Hovered",
    //   trackOptions,
    //   APP_CONFIG.retryCount,
    // );
    
    await vrt.trackPage(page, "#1.1 Bookstore Menu - Hovered", trackOptions);
  });
});
