# AI Prompts – Test Data

## Objective

Use AI to generate realistic, reusable, and maintainable test data for UI and API automation.

---

## Prompt 1

### Prompt

Suggest suitable test data for product search and product validation.

### AI Response Summary

AI suggested using stable product names available in the application.

### Validation

Selected:

- Search Keyword: **Bolt**
- Product Name: **Bolt Cutters**

Verified manually before automation.

---

## Prompt 2

### Prompt

Generate guest checkout data for automation testing.

### AI Response Summary

AI generated sample guest user information.

### Validation

Used:

- Dynamic Email
- First Name
- Last Name
- Country
- Postal Code
- House Number

Dynamic email generation prevented duplicate execution failures.

---

## Prompt 3

### Prompt

Identify suitable API test data for validating public endpoints.

### AI Response Summary

AI suggested validating:

- Products
- Categories
- Brands
- Search
- Invalid Product IDs

### Validation

Each endpoint was manually verified before being automated.

---

## Test Data Used

### UI

- Search Keyword: Bolt
- Product: Bolt Cutters
- Quantity: 2
- Country: India

### API

- Valid Product ID
- Invalid Product ID
- Product Search Query
- Categories Endpoint
- Brands Endpoint

---

## Outcome

AI-assisted test data was reviewed, validated, and refined before implementation to ensure stable and repeatable test execution.