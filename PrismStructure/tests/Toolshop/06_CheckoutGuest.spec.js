const { test, expect } = require("@playwright/test");
const { HomePage } = require("../../Toolshop/pageobjects/HomePage");

test("Guest Checkout with Two-Step Confirmation and Invoice Verification", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await home.search("Bolt");
    await home.openProduct("Bolt Cutters");

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    await page.locator('[data-test="product-quantity"]').fill("2");

    await page.locator('[data-test="proceed-1"]').click();

    await page.getByRole("tab", { name: "Continue as Guest" }).click();

    await page.locator('[data-test="guest-email"]').fill(
        `guest${Date.now()}@gmail.com`
    );
    await page.locator('[data-test="guest-first-name"]').fill("Mohammad");
    await page.locator('[data-test="guest-last-name"]').fill("Farhan");

    await page.locator('[data-test="guest-submit"]').click();

    await page.locator('[data-test="proceed-2-guest"]').click();

    await page.locator('[data-test="country"]').selectOption("IN");
    await page.locator('[data-test="postal_code"]').fill("281001");
    await page.locator('[data-test="house_number"]').fill("28");

    await page.locator('[data-test="proceed-3"]').click();

    await page.locator('[data-test="payment-method"]')
        .selectOption("buy-now-pay-later");

    await page.locator('[data-test="monthly_installments"]')
        .selectOption("3");

    // Step 1: Submit payment
    await page.locator('[data-test="finish"]').click();

    // Verify payment success
    await expect(
        page.locator('[data-test="payment-success-message"]')
    ).toBeVisible();

    // Step 2: Confirm order
    await page.locator('[data-test="finish"]').click();

    // Verify final order confirmation and invoice number
    await expect(
        page.getByText(/Thanks for your order!/i)
    ).toBeVisible();

    await expect(
        page.getByText(/invoice number is INV-\d+/i)
    ).toBeVisible();
});
