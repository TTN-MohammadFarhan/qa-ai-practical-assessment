# Risk Analysis

## Business Risks

- User unable to register.
- User unable to login.
- Checkout failure resulting in order loss.
- Invoice not generated after successful purchase.
- Incorrect pricing displayed.

---

## Functional Risks

- Search returns incorrect products.
- Filters do not work correctly.
- Cart quantity updates incorrectly.
- Product details mismatch.
- Session timeout during checkout.

---

## API Risks

- Authentication token expires unexpectedly.
- Invalid payload handling.
- Incorrect HTTP status codes.
- API contract changes.
- Missing validation.

---

## Security Risks

- Unauthorized access.
- Broken authentication.
- Sensitive information exposure.
- Weak password validation.
- Session hijacking.

---

## UI Risks

- Responsive layout issues.
- Browser compatibility issues.
- Broken navigation.
- Missing error messages.

---

## Test Prioritization

### Smoke

- Registration
- Login
- Search Product
- Add to Cart
- Checkout

### Regression

- Product Filters
- Product Details
- Quantity Update
- Remove Cart Item
- Invoice
- Profile
- Logout
- API Validation

