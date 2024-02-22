# Project Title

Jewellery E-Commerce

## Overview

This is a minimalist jewellery e-commerce website that will be built with React and CSS. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products.

### Problem

I plan to open my own e-commerce store one day and I want to build the website for the future customers to give them a quick and efforteless shopping experience

### User Profile

- Jewellery Buyers:
  - looking to buy modern jewellery from the commfort of their home
  - looking to buy gifts for their friends and family

### Features

- As a user, I want to be able to find the product that I need easily
- As a user, I want to be able to see trending and best-seller products
- As a user, I want to be able to sign up for future offers and new product announcements
- As a user, I want to be able to filter the products by category
- As a user, I want to be able to create a account to manage my saved products
- As a user, I want to be able to find the highest-rated products
- As a logged in user, I want to be able to rate the products I buy.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - Tailwind CSS (If have enough time to learn it) otherwise, SCSS
- Server libraries:
  - knex
  - express
  - a system for login(still need to research more for the teach stack for this)

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page
- All products page
- Product detail page
- Register
- Login

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Create client - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Create seeds with sample jewellery products data

- Deploy client and server projects so all commits will be reflected in production

- Feature: Home page

  - Implement list of links to other product categories
  - create a trending products section
  - create a header/footer
  - Create GET /products endpoint
  - Create GET /products/product category endpoint

- Feature: View product

  - Implement view product page
  - Create GET /products/:product_id
  - Implement comments section on the page
  - Implement trending now section at the end of page content

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint
  - Implement local storage to save interseted product information

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Forgot password functionality
- Unit and Integration Tests
- Scroll back to same spot on the previous page once user exits a specific product page
- As a user, I want to have a quick checkout process
- Photo Zoom-ins for the product photos
- logo icon in the URL
- Pagination if there are a lot of products to fit in 1 page
- filter the products by price and other filters(tags)
- search the products with keyword in search bar
- Implement a virtual try-on feature that allows customers to see how the jewelry will look on them using augmented reality or photo upload technology.
- Allow users to create a wishlist of their favorite jewelry items
- Offer inquire via email to assist customers with any inquiries they may have while browsing or making a purchase.
