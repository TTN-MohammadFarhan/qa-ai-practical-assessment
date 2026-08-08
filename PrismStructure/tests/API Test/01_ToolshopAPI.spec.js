const { test, expect } = require("@playwright/test");

const BASE_URL = "https://api.practicesoftwaretesting.com";

test.describe("Toolshop API", () => {

    test("Get All Products", async ({ request }) => {

        const response = await request.get(`${BASE_URL}/products`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toHaveProperty("data");
        expect(body.data.length).toBeGreaterThan(0);
    });

    test("Search Product", async ({ request }) => {

        const response = await request.get(`${BASE_URL}/products/search?q=bolt`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.data.length).toBeGreaterThan(0);
    });

    test("Get Categories", async ({ request }) => {

        const response = await request.get(`${BASE_URL}/categories`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.length).toBeGreaterThan(0);
    });

    test("Get Brands", async ({ request }) => {

        const response = await request.get(`${BASE_URL}/brands`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.length).toBeGreaterThan(0);
    });

    test("Get Single Product", async ({ request }) => {

        const products = await request.get(`${BASE_URL}/products`);

        const productId = (await products.json()).data[0].id;

        const response = await request.get(`${BASE_URL}/products/${productId}`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(productId);
    });

    test("Invalid Product", async ({ request }) => {

        const response = await request.get(
            `${BASE_URL}/products/invalid-product-id`
        );

        expect(response.status()).toBe(404);
    });

});