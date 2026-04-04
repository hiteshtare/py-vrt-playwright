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
    await page.selectOption('select[name="pa_product-language"]', {
      value: "6898",
    });

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(
      page,
      "#1.3 Books by: Sri Sri Daya Mata - Hindi",
      trackOptions,
    );
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

    await vrt.trackPage(
      page,
      "#2.2 Audio by: Sri Sri Mrinalini Mata",
      trackOptions,
    );
  });

  test("#3 Photos of Babaji", async ({ page }) => {
    const url = `product-category/photos`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#3.1 Dashboard - Photos Category", trackOptions);

    //Set Search Value to string 'Babaji'
    await page
      .locator("//input[@id='dgwt-wcas-search-input-1']")
      .fill("Babaji");

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(page, "#3.2 Photos of Babaji", trackOptions);
  });

  test("#4 Books by category How to Live series", async ({ page }) => {
    const url = `product-category/books`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#4.1 Dashboard - Books Category", trackOptions);

    //Set Categories to How to Live series (value: 6947)
    await page.selectOption('select[name="product-collections"]', {
      value: "6947",
    });

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(
      page,
      "#4.2 Books by category: How to Live series (p. 1)",
      trackOptions,
    );

    //Navigate to p. 2 by Clicking on Next button
    await page.getByText("Next").click();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await scrollTopForStickyHeader(page);

    await vrt.trackPage(
      page,
      "#4.3 Books by category: How to Live series (p. 2)",
      trackOptions,
    );
  });

  test("#5 Audio by category Inspirational Audio", async ({ page }) => {
    const url = `product-category/audio`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#5.1 Dashboard - Audio Category", trackOptions);

    //Set Categories to Inspirational Audio (value: 6950)
    await page.selectOption('select[name="product-collections"]', {
      value: "6950",
    });

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(
      page,
      "#5.2 Audio by category: Inspirational Audio (p. 1)",
      trackOptions,
    );

    //Navigate to p. 2 by Clicking on Next button
    await page.getByText("Next").click();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await scrollTopForStickyHeader(page);

    await vrt.trackPage(
      page,
      "#5.3 Audio by category: Inspirational Audio (p. 2)",
      trackOptions,
    );
  });
});
