
# API Test Scenarios

## Smoke Scenarios
| ID | Scenario | Expected Result |
|---|---|---|
| API-001 | Register a new user | 201 Created |
| API-002 | Login with valid credentials | Bearer token returned |
| API-003 | Retrieve products | 200 OK with product list |
| API-004 | Create cart and add product | Cart created successfully |
| API-005 | Generate invoice (Cash on Delivery) | Invoice generated successfully |

## Regression Scenarios
| ID | Scenario | Expected Result |
|---|---|---|
| API-006 | Login with invalid password | 401 Unauthorized |
| API-007 | Access protected API without token | 401 Unauthorized |
| API-008 | Invalid product ID | 404 Not Found |
| API-009 | Invalid invoice payload | 400 Bad Request |
| API-010 | Expired/invalid bearer token | 401 Unauthorized |
