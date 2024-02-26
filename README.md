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
- As a user, I want to be able to see the pictures of products
- As a user, I want to be able to see the description and price of product

## Implementation

### Installation on developer environment

1. Clone the repository:

   ```bash
   git clone https://github.com/jaskaurbrar14/Hargun
   ```

2. Navigate to the project directory:

   ```bash
   cd Hargun
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a .env file and create the environment variables same as mentioned in the .env.sample file
5. Follow the instructions mentioned in the server respository to install and run express server for the app
   ```bash
   git clone https://github.com/jaskaurbrar14/Hargun-Api
   ```
6. Start the react app
   ```bash
   npm start
   ```

### Folder Structure

- public: Contains static assets like HTML files and images.
- src: Contains the React application source code.

  - assets: All the iamges, icons, font and logos used in the application
  - components: Reusable UI components.
  - pages: Components representing different pages of the application.
  - styles: has common style scss files
  - utils: has the common functionality logic for the app
  - App.js: Root component.
  - index.js: Entry point of the application.

- websiteImages: has the sample images of teh website and folder structure for refrence.
- env.sample: has the sample of environment variables that needs to be defined to run app in development environment

- ![Folder structure of React app](<websiteImages/Screenshot 2024-02-26 at 5.34.41 AM.png>)

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
  - a system for login(If have enough time to implement it)

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page
- All products page
- Product detail page
- Not Found Page
- Register (for 2nd Sprint)
- Login (for 2nd Sprint)

### Mockups

![Main Page](<websiteImages/Screenshot 2024-02-26 at 4.31.59 AM.png>)
![Main Page](<websiteImages/Screenshot 2024-02-26 at 4.32.42 AM.png>)
![Products Page](<websiteImages/Screenshot 2024-02-26 at 4.32.53 AM.png>)
![Products Page](<websiteImages/Screenshot 2024-02-26 at 4.33.18 AM.png>)
![Product detail Page](<websiteImages/Screenshot 2024-02-26 at 4.33.54 AM.png>)
![Not Found Page](<websiteImages/Screenshot 2024-02-26 at 4.34.13 AM.png>)

### Data

- I have created a data set in MySql for products with their own id's
- Sprint 2
  - I will create a new data set for reviews for each product using it's product id as secondary id for the new tabel to establish the relationship in tables in sprint 2.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- Sprint 1

  - I have created 3 endpoint for the backend all are get endpoints - /products to get all products and only to get their ID, title, Photo and price

    - {
      "id": 1,
      "title": "Auryn Bangles",
      "price": "35.00",
      "photo": [
      "http://localhost:8080/products/AurynBangles/1.jpg",
      "http://localhost:8080/products/AurynBangles/2.jpg",
      "http://localhost:8080/products/AurynBangles/3.jpg",
      "http://localhost:8080/products/AurynBangles/4.jpg"
      ]
      },

  - /products/trending to get all products with true value for trending and only to get their ID, title, Photo and price

    - {
      "id": 1,
      "title": "Auryn Bangles",
      "price": "35.00",
      "photo": [
      "http://localhost:8080/products/AurynBangles/1.jpg",
      "http://localhost:8080/products/AurynBangles/2.jpg",
      "http://localhost:8080/products/AurynBangles/3.jpg",
      "http://localhost:8080/products/AurynBangles/4.jpg"
      ]
      },

  - /products/:productId to get all product details about a product with a specific ID and get all the details about a product ID, title, Photo, description, and price
    - {
      "id": 2,
      "title": "Bay Chain",
      "price": "25.00",
      "photo": [
      "http://localhost:8080/products/BayChain/1.jpg",
      "http://localhost:8080/products/BayChain/2.jpg",
      "http://localhost:8080/products/BayChain/3.jpg"
      ],
      "description": "Perfect to pair with the bay hoops to make a dainty set of sophistication."
      }

### Auth

-sprint 2, will include login

## Roadmap

Create client - react project with routes and boilerplate pages

- Spint 1

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
  - Create GET /products/:productId category endpoint

  - Feature: View product

    - Implement view product page
    - Create GET /products/:productId
    - Implement trending now section at the end of page content

  - Bug fixes

  - DEMO DAY

- Sprint 2

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

## Nice-to-haves

- As a user, I want to be able to filter the products by category
- As a user, I want to be able to create a account to manage my saved products
- As a user, I want to be able to find the highest-rated products
- As a logged in user, I want to be able to rate the products I buy.
- Forgot password functionality
- Unit and Integration Tests
- Scroll back to same spot on the previous page once user exits a specific product page
- As a user, I want to have a quick checkout process
- Photo Zoom-ins for the product photos
- Favicon in the URL
- Pagination if there are a lot of products to fit in 1 page
- filter the products by price and other filters(tags)
- search the products with keyword in search bar
- Implement a virtual try-on feature that allows customers to see how the jewelry will look on them using augmented reality or photo upload technology.
- Allow users to create a wishlist of their favorite jewelry items
- Offer inquire via email to assist customers with any inquiries they may have while browsing or making a purchase.
