# Exploratory Testing Notes

## Session Charter

Explore the complete shopping workflow of the Practice Software Testing (Toolshop) application with emphasis on usability, functionality, and error handling.

---

## Time Box

60 Minutes

---

## Areas Explored

### Product Search

- Search using valid keywords
- Search using invalid keywords
- Partial keyword search

### Product Filtering

- Category filtering
- Filter reset
- Combined search and filter

### Product Details

- Product information
- Product price
- Product image
- Add to Cart availability

### Shopping Cart

- Add products
- Update quantity
- Verify quantity persistence

### Guest Checkout

- Customer information
- Address validation
- Payment method selection
- Order completion

### Public APIs

- Products
- Categories
- Brands
- Product Search
- Invalid Product Requests

---

## Key Observations

- Product search behaved consistently.
- Category filtering returned expected results.
- Cart quantity updated correctly.
- Guest checkout completed successfully using dynamic guest email.
- Public APIs returned expected HTTP status codes.
- Invalid product requests correctly returned **404 Not Found**.

---

## Risks Identified

- Product locator changes may affect UI automation.
- Product catalog updates could impact search validation.
- Guest checkout depends on valid mandatory input.
- API contract changes may affect automated validations.

---

## Follow-up Exploratory Ideas

- Boundary value testing for checkout fields.
- Empty and special character search.
- Invalid postal code validation.
- Browser refresh during checkout.
- Multiple quantity updates.
- API response schema validation.
- Cross-browser exploratory execution.