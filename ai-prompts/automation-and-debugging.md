# AI Prompts – Automation and Debugging

## Objective

Use AI to accelerate automation development, improve framework quality, resolve failures, and optimize Playwright implementation.

---

## Prompt 1

### Prompt

Design a Playwright Page Object Model framework for the Practice Software Testing application.

### AI Response Summary

AI suggested:

- Page Object Model
- Reusable page classes
- Data-driven testing
- Modular utilities
- API/UI separation

### Validation

The framework structure was refined and implemented using Prism conventions.

---

## Prompt 2

### Prompt

Debug failing Playwright locators and improve locator reliability.

### AI Response Summary

AI suggested replacing unstable selectors with stable data-test locators and improving locator strategies.

### Validation

Resolved issues related to:

- Product search
- Product selection
- Guest checkout
- Dynamic locators

---

## Prompt 3

### Prompt

Review Playwright automation and recommend engineering improvements.

### AI Response Summary

AI recommended:

- Reusable page methods
- Better naming conventions
- Removal of duplicate code
- Cleaner assertions

### Validation

Framework was refactored before final execution.

---

## Automation Outcome

Successfully automated:

### UI

- Search Product
- Filter Products
- Product Details
- Add Product to Cart
- Update Cart Quantity
- Guest Checkout

### API

- Get All Products
- Get Single Product
- Search Products
- Get Categories
- Get Brands
- Invalid Product Validation

---

## Debugging Summary

Major issues resolved:

- Locator failures
- Strict mode violations
- Dynamic product locators
- API endpoint validation
- Guest checkout flow
- Framework refactoring

All fixes were manually validated before final execution.