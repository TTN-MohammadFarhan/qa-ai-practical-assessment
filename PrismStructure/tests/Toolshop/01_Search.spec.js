const { test } = require("@playwright/test");
const { HomePage } = require("../../Toolshop/pageobjects/HomePage");

test("Search Product", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await home.search("Bolt");

    await home.verifySearch("Bolt");

});