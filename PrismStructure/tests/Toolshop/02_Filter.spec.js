const { test, expect } = require("@playwright/test");
const { HomePage } = require("../../Toolshop/pageobjects/HomePage");
const data = require("../../Toolshop/testdata/toolshopData.json");

test("Filter Products", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await home.filterCategory(data.filters.category);

    await expect(
        page.locator('[data-test="product-name"]').first()
    ).toBeVisible();

});