const { expect } = require("@playwright/test");

class HomePage {
    constructor(page) {
        this.page = page;

        this.searchBox = page.locator('[data-test="search-query"]');
        this.searchButton = page.locator('[data-test="search-submit"]');
        this.cartIcon = page.locator('[data-test="nav-cart"]');
    }

    async open() {
        await this.page.goto("https://practicesoftwaretesting.com/");
    }

    async search(product) {
        await this.searchBox.fill(product);
        await this.searchButton.click();
    }

    async verifySearch(product) {
        await expect(
            this.page.locator('[data-test="product-name"]').first()
        ).toContainText(product);
    }

    async openProduct(productName) {
        console.log("Opening product:", productName);
    
        await this.page
            .locator('[data-test="product-name"]')
            .filter({ hasText: productName })
            .first()
            .click();
    }

    async filterCategory(category) {
        await this.page.locator("#filters").getByText(category).click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}

module.exports = { HomePage };