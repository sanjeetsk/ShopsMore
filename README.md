# E-commerce Web Page Project Overview

## Demo
[Deploy Link](https://shopsmore.netlify.app/)

## Project Description
This project involves creating a simple shopping cart application using HTML, CSS, and advanced JavaScript concepts. The focus areas include promises, async/await, using storage APIs, and basic API calls, along with complex DOM manipulations.

## Features and Grading Criteria
The project will be graded based on the following features:

### Pages
1. **index.html**: Main landing page.
2. **login.html**: User login page.
3. **signup.html**: User signup page.
4. **shop.html**: Product listing and shopping page.
5. **cart.html**: Shopping cart page.
6. **profile.html**: User profile page.

### User Authentication
- Handle signup and login using local storage.
- Support multiple users.
- Restrict access to shop, cart, and profile pages if the user is not logged in.

### Product Management
- Fetch products using an API.
- Save product data in local storage.

### Filtering
- Implement item filtering based on name (search bar), price, and rating (sidebar).

### Shopping Cart
- Manage the shopping cart using local storage.
- Allow adding and removing items from the cart.

### Checkout
- Implement checkout functionality using Razorpay.
- After `razorpay.open()`, delete items from the cart.

### Profile Page
- Display user data taken during signup.
- Allow users to edit their profile information.

## Best Practices
- Use advanced JS concepts such as promises and async/await.
- Implement secure user authentication using local storage.
- Optimize performance with efficient storage management.
- Conduct thorough testing to identify and address any bugs or issues.
- Implement clean and well-documented code for readability and collaboration.
