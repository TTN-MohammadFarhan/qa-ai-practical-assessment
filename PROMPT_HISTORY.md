# AI Prompt History – QA AI Capability Exercise

## Purpose

This document records the AI-assisted workflow used during the QA AI Capability Exercise. AI was used to accelerate requirement analysis, risk identification, test design, automation architecture, debugging, and documentation.

AI-generated recommendations were treated as suggestions. Final test scenarios, implementation decisions, locators, API coverage, and documentation were reviewed and validated before inclusion.

---

# 1. Requirements and Planning

### Prompt
Analyze the Practice Software Testing application and identify the major functional requirements, user journeys, testing scope, assumptions, and risks.

### AI-Assisted Outcome
Identified major areas including:

- User registration
- User login
- Product browsing
- Product search
- Product filtering
- Product details
- Shopping cart
- Checkout
- Invoice generation
- API authentication
- Product APIs
- Cart APIs
- Invoice APIs

### Human Validation / Refinement

The recommendations were reviewed against the assignment scope and the actual application. Unsupported or unnecessary areas were excluded from the final automation scope.

---

# 2. Risk Analysis

### Prompt
Identify business, functional, API, security, and UI risks for an e-commerce application and prioritize them for testing.

### AI-Assisted Outcome

Identified risks including:

- Registration and login failure
- Incorrect product search/filter results
- Incorrect cart quantity or pricing
- Cckout failure
- Invoice generation failure
- Authentication/token failures
- Invalid API payload handling
- Unauthorized API access
- Session-related failures

### Human Validation / Refinement

Risks were prioritized according to business impact and the assessment scope. Smoke and regression priorities were then defined.

---

# 3. UI Test Design

### Prompt
Identify the highest-priority user journeys suitable for Playwright UI automation for the Practice Software Testing application.

### AI-Assisted Outcome

Recommended:

- Product Search
- Product Filtering
- Product Details
- Add Product to Cart
- Cart Update
- Guest Checkout

### Human Validation / Refinement

Scenarios were verified against the live application and assignment requirements. Only supported and implementable scenarios were selected for automation.

---

# 4. API Test Design

### Prompt
Design API test scenarios for the Practice Software Testing application.

### AI-Assisted Outcome

Recommended validating:

- Get Products
- Get Single Product
- Search Products
- Categories
- Brands
- Invalid Product
- Authentication-related scenarios
- Cart lifecycle
- Invoice generation

### Human Validation / Refinement

API endpoints were checked against the available API documentation/application before automation. Unsupported scenarios were excluded from the final automated suite.

---

# 5. Test Data Strategy

### Prompt
Suggest a maintainable test-data strategy for Playwright UI and API automation.

### AI-Assisted Outcome

Recommended:

- Separate test data from test logic
- Reusable JSON-based test data
- Dynamic data where appropriate
- Avoid hard-coding values directly inside test cases

### Human Validation / Refinement

The strategy was adapted to the existing Prism Playwright framework and the Toolshop application.

---

# 6. Automation Architecture

### Prompt
Design a maintainable Playwright automation framework using Page Object Model.

### AI-Assisted Outcome

Recommended:

- Page Object Model
- Reusable page methods
- Data-driven testing
- Modular utilities
- Separation of UI and API automation
- Centralized configuration

### Human Validation / Refinement

The recommendations were adapted to the existing Prism framework structure rather than introducing an unnecessary new framework.

---

# 7. Locator and Automation Debugging

### Prompt
Review failing Playwright locators and recommend more reliable locator strategies.

### AI-Assisted Outcome

Recommended:

- Prefer stable attributes/data-test selectors where available
- Avoid unnecessarily fragile XPath/CSS selectors
- Scope dynamic locators to the relevant product/container
- Improve locator uniqueness

### Human Validation / Refinement

The recommendations were applied to failures involving:

- Product search
- Product selection
- Dynamic product locators
- Guest checkout

Locator changes were executed and validated through Playwright runs.

---

# 8. Playwright Debugging

### Prompt
Debug Playwright failures involving strict mode violations, dynamic elements, and checkout interactions.

### AI-Assisted Outcome

Suggested:

- Review locator uniqueness
- Narrow locator scope
- Use appropriate Playwright locator methods
- Validate element state before interaction
- Remove duplicate/unstable automation logic

### Human Validation / Refinement

The suggested fixes were tested against the application and refined where necessary before being retained.

---

# 9. API Debugging

### Prompt
Review API automation failures and verify endpoint, request, response, and status-code handling.

### AI-Assisted Outcome

Recommended validating:

- Endpoint correctness
- Request payload
- Authentication requirements
- Expected HTTP status codes
- Response structure
- Negative scenarios

### Human Validation / Refinement

API endpoints and responses were verified before finalizing the API automation scenarios.

---

# 10. Framework Review

### Prompt
Review the Playwright automation implementation and recommend engineering improvements.

### AI-Assisted Outcome

Recommended:

- Reusable page methods
- Clear test naming
- Reduced duplication
- Maintainable assertions
- Separation of test data and implementation
- Clear UI/API organization

### Human Validation / Refinement

The framework was reviewed and refactored where appropriate while preserving the existing Prism conventions.

---

# 11. Exploratory Testing

### Prompt
Create an exploratory testing charter for an e-commerce purchase journey.

### AI-Assisted Outcome

Suggested exploring:

- Registration
- Login
- Product search
- Product details
- Cart
- Checkout
- Invoice

and considering risks such as:

- Session expiration
- Duplicate order submission
- Invalid payment details
- Missing invoice

### Human Validation / Refinement

A time-boxed exploratory session was performed and application-specific observations were documented separately in `docs/exploratory-testing.md`.

---

# 12. Documentation

### Prompt
Review the QA repository structure and recommend documentation required for a professional AI-assisted QA submission.

### AI-Assisted Outcome

Recommended documenting:

- Requirements
- Risks
- Test strategy
- Test cases
- API scenarios
- Traceability
- Exploratory testing
- Automation strategy
- Execution evidence
- AI prompt history
- Repository structure

### Human Validation / Refinement

Documentation was organized under `docs/`, `ai-prompts/`, and `execution-reports/` according to the assessment requirements.

---

# AI Usage Principles

The following principles were followed throughout the project:

1. AI recommendations were not accepted blindly.
2. Application behavior was manually verified.
3. API endpoints were validated before automation.
4. Automation failures were reproduced before fixes were accepted.
5. Generated test scenarios were reduced to those relevant to the assessment.
6. Engineering judgement was used to decide the final implementation.
7. AI-assisted artifacts were reviewed before inclusion in the repository.

---

# Related Artifacts

AI-assisted work is also documented in:

- `ai-prompts/requirements-and-planning.md`
- `ai-prompts/test-data.md`
- `ai-prompts/test-design.md`
- `ai-prompts/automation-and-debugging.md`
- `ai-prompts/documentation-and-summary.md`

Supporting QA artifacts are available under:

- `docs/`
- `FunctionalTestCase.csv`
- `execution-reports/`
- `screenshots/`
