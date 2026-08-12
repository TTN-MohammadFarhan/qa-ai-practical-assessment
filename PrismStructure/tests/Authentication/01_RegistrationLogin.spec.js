const { test, expect } = require("@playwright/test");

test("Register, Login and Logout", async ({ page }) => {
    const email = `farhan_${Date.now()}@example.com`;
    const password = "farHAN@2";

    // Registration
    await page.goto("https://practicesoftwaretesting.com/auth/register");

    await page.locator('[data-test="first-name"]').fill("Mohammad");
    await page.locator('[data-test="last-name"]').fill("Farhan");
    await page.locator('[data-test="dob"]').fill("1999-06-12");
    await page.locator('[data-test="country"]').selectOption("IN");
    await page.locator('[data-test="postal_code"]').fill("281001");
    await page.locator('[data-test="house_number"]').fill("28");
    await page.locator('[data-test="phone"]').fill("7078011086");
    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);

    await page.locator('[data-test="register-submit"]').click();

    // Registration should redirect to login
    await expect(page).toHaveURL(/auth\/login/);

    // Login
    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();

    // Verify authenticated state
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

    // Logout
    await page.locator('[data-test="nav-menu"]').click();
});
