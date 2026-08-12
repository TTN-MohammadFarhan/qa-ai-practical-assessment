# Requirement Analysis

## System Under Test

**Application Name:** Practice Software Testing (Toolshop)

UI:
https://practicesoftwaretesting.com/

API:
https://api.practicesoftwaretesting.com/api/documentation

---

# Objective

The objective of the application is to allow users to browse products, manage shopping carts, complete purchases, and verify invoices using both UI and REST APIs.

---

# Functional Requirements

## User Management

- User Registration
- User Login
- User Logout
- Profile Verification

## Product Management

- Browse Products
- Search Products
- Filter Products
- View Product Details

## Cart

- Add Product
- Remove Product
- Update Quantity
- View Cart

## Checkout

- Customer Details
- Address Details
- Payment Method
- Order Confirmation

## Invoice

- Generate Invoice
- View Invoice History

---

# Business Rules and Acceptance Criteria

## Registration

- Registration requires the mandatory user details requested by the application.
- Email address must be in a valid email format.
- Password must satisfy the application's configured password validation rules.
- Password confirmation must match the password.
- Registration with an already registered email should be rejected.
- Successful registration should create a usable user account.

## Login

- A registered user should be able to log in using valid credentials.
- Invalid credentials should not authenticate the user.
- Successful authentication should create an authenticated session/token as applicable.
- The authenticated user should be able to access the appropriate profile/account information.
- Logout should terminate the authenticated session.

## Product and Cart

- Products displayed in search/results should be selectable and open the corresponding product details.
- A valid product can be added to the cart.
- Cart quantity should reflect the quantity selected by the customer.
- Removing a product should remove it from the cart.
- Cart totals should reflect the products and quantities currently in the cart.

## Checkout

- Checkout requires the mandatory customer and address information.
- The selected payment method must be accepted by the application.
- Cash on Delivery (COD) should be available when supported by the test environment.
- Invalid or incomplete mandatory checkout information should prevent order completion.
- Successful checkout should create an order/confirmation.

## Two-Step Confirmation

- Checkout/order submission should require the application's confirmation step before the order is finalized.
- The order should not be considered successfully completed until the final confirmation is accepted.
- After successful confirmation, the application should display an order-success/confirmation state.

## Invoice

- A successfully completed order should have an associated invoice when invoice generation is supported.
- The invoice should identify the order/customer and purchased products.
- Invoice details should be consistent with the completed order.
- Product quantities and order totals shown on the invoice should match the finalized purchase.
- Invoice generation should not occur for an unsuccessful or cancelled order.

---

# Non Functional Requirements

- Responsive UI
- Secure Authentication
- Stable API Responses
- Proper Error Handling
- Fast Search
- Cross Browser Compatibility

---

# In Scope

- Registration
- Login
- Search
- Product Details
- Cart
- Checkout
- Invoice
- API Authentication
- Product APIs
- Cart APIs
- Invoice APIs

---

# Out of Scope

- Performance Testing
- Load Testing
- Penetration Testing
- Browser Performance Benchmarking
- Mobile Native Application

---

# Assumptions

- Test environment remains available.
- APIs remain stable.
- Test user accounts can be created.
- Internet connectivity is available.
- Exact validation rules may depend on the current application implementation and API contract.

---

# High Level User Journey

Visitor

↓

Register

↓

Login

↓

Browse Products

↓

Search Products

↓

View Product

↓

Add to Cart

↓

Checkout

↓

Confirm Order

↓

Generate Invoice

↓

Logout
