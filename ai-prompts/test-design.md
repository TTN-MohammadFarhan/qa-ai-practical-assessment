# AI Prompts – Test Design

## Objective

Use AI to design maintainable, traceable, and automation-friendly test cases for the Practice Software Testing (Toolshop) application.

---

## Prompt 1

### Prompt

Identify the highest priority user journeys suitable for UI automation using Playwright.

### AI Response Summary

AI recommended prioritizing:

- Product Search
- Product Filtering
- Product Details
- Add Product to Cart
- Cart Update
- Guest Checkout

### Validation

- Removed unsupported scenarios.
- Aligned with project scope.
- Selected only scenarios implemented in automation.

---

## Prompt 2

### Prompt

Design API test scenarios for the Practice Software Testing application.

### AI Response Summary

AI proposed validating:

- Get Products
- Product Details
- Product Search
- Categories
- Brands
- Invalid Product

### Validation

Verified every endpoint against the live API before automation.

---

## Prompt 3

### Prompt

Suggest an automation architecture using Playwright and Page Object Model.

### AI Response Summary

AI recommended:

- Page Object Model
- Data Driven Testing
- Reusable Page Objects
- Modular Utilities
- API/UI Separation

### Validation

The framework was implemented using these recommendations and refined during development.

---

## Final Outcome

### UI Automation

- Search Product
- Filter Products
- Product Details
- Add Product to Cart
- Update Cart Quantity
- Guest Checkout

### API Automation

- Get All Products
- Get Single Product
- Search Products
- Get Categories
- Get Brands
- Invalid Product Validation

All AI-generated designs were reviewed and refined before implementation.