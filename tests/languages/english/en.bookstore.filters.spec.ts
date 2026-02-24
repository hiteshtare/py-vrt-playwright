// Import node modules
import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPageWithInterations } from "../../util/common.util";
import { setupVRT, trackPagesInVRT } from "../../util/vrt.util";
import { APP_CONFIG } from "../../config";

const { vrt, trackOptions } = setupVRT(
  APP_CONFIG.projects.English.Id,
  "bookstore-filters",
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe("Bookstore - Filters check", () => {
  test("#1 Books by Sri Sri Daya Mata", async ({ page }) => {
    const url = `product-category/books`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#1.1 Dashboard - Books Category", trackOptions);

    //Set Book Author to Sri Sri Daya Mata (value: 6930)
    await page.selectOption('select[name="person"]', { value: "6930" });

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(page, "#1.2 Books by: Sri Sri Daya Mata", trackOptions);

    //Set Book Language to Hindi (value: 6898)
    await page.selectOption('select[name="pa_product-language"]', { value: "6898" });

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(page, "#1.3 Books by: Sri Sri Daya Mata - Hindi", trackOptions);
  });

  test("#2 Audio by Sri Sri Mrinalini Mata", async ({ page }) => {
    const url = `product-category/audio`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#2.1 Dashboard - Audio Category", trackOptions);

    //Set Book Author to Sri Sri Mrinalini Mata (value: 6931)
    await page.selectOption('select[name="person"]', { value: "6931" });

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(page, "#2.2 Audio by: Sri Sri Mrinalini Mata", trackOptions);
  });

  test("#3 Photos of Babaji", async ({ page }) => {
    const url = `product-category/photos`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#3.1 Dashboard - Photos Category", trackOptions);

    //Set Search Value to string 'Babaji'
    await page.locator("//input[@id='dgwt-wcas-search-input-1']").fill('Babaji');

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(page, "#3.2 Photos of Babaji", trackOptions);
  });
});
