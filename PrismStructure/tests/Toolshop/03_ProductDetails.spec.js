const { test, expect } = require("@playwright/test");
const { HomePage } = require("../../Toolshop/pageobjects/HomePage");

test("Verify Product Details", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await home.search("Bolt");

    await home.openProduct("Bolt Cutters");

    await expect(page.locator('[data-test="product-name"]')).toBeVisible();
    await expect(page.locator('[data-test="unit-price"]')).toBeVisible();
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();

});