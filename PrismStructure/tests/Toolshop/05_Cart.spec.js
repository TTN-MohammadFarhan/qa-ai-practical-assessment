const { test, expect } = require("@playwright/test");
const { HomePage } = require("../../Toolshop/pageobjects/HomePage");

test("Update Cart Quantity", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await home.search("Bolt");

    await home.openProduct("Bolt Cutters");

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    const quantity = page.locator('[data-test="product-quantity"]');

    await quantity.fill("2");

    await expect(quantity).toHaveValue("2");

});