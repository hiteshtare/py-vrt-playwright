// Import node modules
import { expect, test } from "@playwright/test";

//Importing Custom modules
import { navigateToPage } from "../util/common.util";
import { setupVRT } from "../util/vrt.util";
import { APP_CONFIG } from "../config";

const { vrt, trackOptions } = setupVRT(
  APP_CONFIG.projects.English.Id,
  "bookstore",
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe.skip("Bookstore - Checkout flow", () => {
  test("RazorPay modal after clicking on PayNow", async ({ page }) => {
    const url = `autobiography-of-a-yogi`;

    await navigateToPage(page, url);

    // Click on Hindi language radio
    await page.locator('a:has-text("Hindi")').click();

    //wait for 1 sec
    await page.waitForTimeout(1000);

    await vrt.trackPage(page, "#1_Product page: AOY - Hindi", trackOptions);

    // Click on Quantity textbox & update to 2
    await page.locator("input.input-text.qty.text").fill("2");

    // Scroll to the top of the page
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/cart`, {
      waitUntil: "domcontentloaded",
    });

    await vrt.trackPage(page, "#2_Cart page: (2) AOY Hi", trackOptions);

    // Click on Proceed to Checkout button
    await page.locator('a:has-text("Proceed to Checkout")').click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/checkout`, {
      waitUntil: "domcontentloaded",
    });

    await vrt.trackPage(
      page,
      "#3_Checkout page without Login: (2) AOY Hi",
      trackOptions
    );

    // Click on Login Now button
    await page.getByRole("link", { name: "Login Now" }).click();

    await page.locator("//input[@id='email']").fill(APP_CONFIG.loginEmail);
    await page
      .locator("//input[@id='password']")
      .fill(APP_CONFIG.loginPassword);

    await page.getByText("Continue", { exact: true }).click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/checkout`, {
      waitUntil: "domcontentloaded",
    });

    await vrt.trackPage(page, "#4_Checkout page: (2) AOY Hi", trackOptions);

    // ---------------------- God Talks with Arjuna ---------------------- //
    const second_url = `product/god-talks-with-arjuna-the-bhagavad-gita`;

    await navigateToPage(page, second_url);

    await page.waitForSelector(`img[alt='GTWA-Eng-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    // ---------------------- God Talks with Arjuna ---------------------- //

    // ---------------------- Man's Eternal Quest ---------------------- //
    const third_url = `product/mans-eternal-quest`;

    await navigateToPage(page, third_url);

    // Click on Tamil language radio
    await page.locator('a:has-text("Tamil")').click();

    await page.waitForSelector(`img[alt='MEQ-tamil-front']`, {
      state: "attached",
    });

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/cart`, {
      waitUntil: "domcontentloaded",
    });
    // ---------------------- Man's Eternal Quest ---------------------- //

    //Increase MEQ to 2 by clicking + icon on Cart page
    await expect(page.getByRole("link", { name: "+" }).nth(2)).toBeVisible();
    await page.getByRole("link", { name: "+" }).nth(2).click();

    // Wait for the loading spinner to be hidden
    await expect(
      page.locator(
        "//form[@class='woocommerce-cart-form processing']//div[@class='blockUI blockOverlay']"
      )
    ).toBeHidden();

    await vrt.trackPage(
      page,
      "#5_Checkout page: (2) AOY Hi + (1) GTWA + (2) MEQ",
      trackOptions
    );

    // ---------------------- Armrest ---------------------- //
    const fourth_url = `/product/armrest-wooden`;

    await navigateToPage(page, fourth_url);

    await page.waitForSelector(
      `img[alt='armrest-wooden-foldable-yss-front.jpg']`,
      {
        state: "attached",
      }
    );

    // Click on Add to Cart buton
    await page.locator('button:has-text("Add to cart")').click();

    await page.waitForURL(`https://${APP_CONFIG.baseURL}/cart`, {
      waitUntil: "domcontentloaded",
    });

    await vrt.trackPage(
      page,
      "#6_Checkout page: (2) AOY Hi + (1) GTWA + (2) MEQ + 1 Armrest",
      trackOptions
    );

    // ---------------------- Armrest ---------------------- //

    // Click on Proceed to Checkout button
    await page.locator('a:has-text("Proceed to Checkout")').click();

    // Click on PayNow to proceed to RazorPoy modal
    await page.locator('button:has-text("PAY NOW")').click();

    //wait for 3 sec
    await page.waitForTimeout(3000);

    // Wait for RazorPoy modal with new Checkout url to load
    await page.waitForURL("**/order-pay/**", {
      waitUntil: "domcontentloaded",
    });

    // Wait for RazorPoy modal with new Checkout url to load
    await page.waitForSelector(".razorpay-container");
    await page.waitForSelector(".razorpay-checkout-frame");

    await expect(
      page.locator("iframe").first().contentFrame().getByTestId("Netbanking")
    ).toBeVisible();

    //wait for 3 sec
    await page.waitForTimeout(3000);

    await vrt.trackPage(page, "#7_RazorPay modal after PayNow", trackOptions);

    await expect(page).toHaveScreenshot("razor-pay-modal-after-paynow.png", {
      fullPage: true,
    });
  });
});
