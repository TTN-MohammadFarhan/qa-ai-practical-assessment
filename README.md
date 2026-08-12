# QA AI Capability Exercise

## Overview

This repository contains the solution for the QA AI Capability Exercise using the **Practice Software Testing (Toolshop)** application.

The project demonstrates an AI-assisted software testing workflow covering requirement analysis, risk assessment, manual test design, UI automation, API automation, documentation, and execution reporting using the Prism Playwright framework.

---

# Tech Stack

- Playwright
- JavaScript
- Node.js
- Prism Framework
- REST API Testing

---

# Application Under Test

UI
https://practicesoftwaretesting.com/

API
https://api.practicesoftwaretesting.com/api/documentation

---

# Project Structure

```
qa-ai-practical-assessment/
│
├── README.md
├── project-info.md
├── FunctionalTestCase.csv
├── ai-prompts/
├── docs/
├── execution-reports/
├── screenshots/
└── PrismStructure/
    ├── API/
    ├── Toolshop/
    ├── commonUtils/
    ├── tests/
    ├── package.json
    └── playwright.config.js
```

---

# Automated UI Test Scenarios

- Search Product
- Filter Products
- Verify Product Details
- Add Product to Cart
- Update Cart Quantity
- Guest Checkout
- User Registration
- User Login
- Two-Step Checkout Confirmation
- Invoice Verification

---

# Automated API Test Scenarios

- Get All Products
- Get Single Product
- Search Product
- Get Categories
- Get Brands
- Invalid Product Validation

---

# Test Execution

Execute all tests

```bash
cd PrismStructure
npx playwright test
```

Execute UI Tests

```bash
npx playwright test tests/Toolshop
```

Execute API Tests

```bash
npx playwright test "tests/API Test"
```

Open Report

```bash
npx playwright show-report
```

---

# Framework Design

- Page Object Model (POM)
- Data Driven Testing
- Reusable Utilities
- Modular Test Design
- API & UI Separation

---

# AI Usage

AI was used for

- Requirement analysis
- Test planning
- Test case generation
- Framework design
- Locator optimization
- API test development
- Documentation
- Debugging

All AI-generated outputs were manually reviewed, validated, and refined before inclusion.

---

# Test Summary

| Type | Count |
|------|------:|
| UI Tests    |     7 |
| API Tests | 6 |
| Total Tests |    13 |

Current Status

- 13/13 Tests Passing
- HTML Report Generated
- BRD Deliverables Included

---

# Author

Mohammad Farhan
