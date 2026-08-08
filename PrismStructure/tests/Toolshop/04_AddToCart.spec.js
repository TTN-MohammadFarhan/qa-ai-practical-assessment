const { test, expect } = require("@playwright/test");
const { HomePage } = require("../../Toolshop/pageobjects/HomePage");

test("Add Product To Cart", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await home.search("Bolt");

    await home.openProduct("Bolt Cutters");

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    await expect(page.locator('[data-test="product-title"]')).toBeVisible();

});