# E-Commerce Shop

## Final Project for Front End Application Development with Javascript, Spring 2022

* Overview
  * This online shop offers a variety of products and a fast checkout process via integration with the Stripe API specifically for credit card processing. 

* This web app is built on these technologies:
  * Firebase functions
  * Express
  * Firebase Firestore
  * Stripe API
  * Material UI
  * Bootstrap 5
  * React
  * Axios

## Future Implementation

* Implement OAuth
* Implement an order tracking system for the authenticated users
* Calculate shipping costs
* Implement other payment methods like Paypal or Square
* Add a favorites section for authenticated users
* Add more product categories in the side bar
* Add a customer service or feedback section
* Implement GraphQL to search for products with specific features
* Refactor the database to have collections inside collections
* Introduce infinite scroll, or a pagination system
* Introduce a system to rank products

## Notes for users:
* Due to API shenanigans, the checkout form requires users to input countries in the short form. For example, US. The form has input field validation to accommodate this.
* The test Stripe Credit card needs to be 4242 4242 4242 4242 with a future expiration date.
