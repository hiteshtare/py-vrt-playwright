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
  "teachings-library-filters",
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe("TeachingsLibrary - Filters check", () => {
  test("#1 Content by Filters: Video, OIS, Sw. Chidananda, EN, 30-60 mins", async ({
    page,
  }) => {
    const url = `teachings-library`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(
      page,
      "#1.1 Dashboard - MediaType Category",
      trackOptions,
    );

    //Expand Filter section
    await page.getByText("Filter by speaker, category,").click();

    //Filter #1 - Set MediaType to Video (value: 7949)
    await page.selectOption('select[name="media-type"]', {
      value: "7949",
    });

    //Filter #2 - Set Category to Inspirational Satsangas
    await page.getByText("Category", { exact: true }).click();

    await page
      .getByLabel("Filter by speaker, category,")
      .getByText("Inspirational Satsangas")
      .check();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    //Filter #3 - Set Speaker to Sri Sri Swami Chidananda Giri
    await page
      .locator("div")
      .filter({ hasText: /^Speaker$/ })
      .click();

    await page
      .getByLabel("Filter by speaker, category,")
      .getByText("Sri Sri Swami Chidananda Giri")
      .check();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    //Filter #4 - Set Language to English
    await page
      .locator("div")
      .filter({ hasText: /^Language$/ })
      .click();

    await page
      .getByLabel("Filter by speaker, category,")
      .getByText("English")
      .check();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    //Filter #5 - Set Duration to 30-60 mins
    await page
      .locator("div")
      .filter({ hasText: /^Duration$/ })
      .click();

    await page
      .getByLabel("Filter by speaker, category,")
      .getByText("30 min — 60 min")
      .check();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await vrt.trackPage(
      page,
      "#1.2 Content by Filters: Video, OIS, Sw. Chidananda, EN, 30-60 mins (p. 1)",
      trackOptions,
    );

    // Navigate to p. 2 by Clicking on Next button
    await page.getByText("Next").click();

    //wait for 3 secs
    await page.waitForTimeout(3000);

    await scrollTopForStickyHeader(page);

    await vrt.trackPage(
      page,
      "#1.3 Content by Filters: Video, OIS, Sw. Chidananda, EN, 30-60 mins (p. 2)",
      trackOptions,
    );
  });

  test("#2 TL Search Results for Daya", async ({ page }) => {
    const url = `teachings-library`;

    await navigateToPageWithInterations(page, url);

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#2.1 Dashboard - TeachingsLibrary", trackOptions);

    //Set Search Value to string 'Babaji'
    await page
      .locator("//input[@class='orig']")
      .fill("Daya");

    await page
      .getByRole('button', { name: 'Search magnifier button' }).click();

    //wait for 10 secs
    await page.waitForTimeout(10000);

    await vrt.trackPage(page, "#2.2 Search Results for Daya", trackOptions);
  });
});
