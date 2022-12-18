# SCC0219 - Introduction to Web Development - 2022.2

#### ICMC - Instituto De Ciências Matemáticas e de Computação, USP São Carlos

#### Project to study web development techniques through the creation of an online store, the project will be used as approval criteria within the discipline.

## Students

- Matheus Pereira Dias - 11207752
- Jefferson Eduardo Muniz Bueno - 11275255

## Project Report

### Table of Contents
1. [Requirements](#requirements)
2. [Project Description](#project-description)
3. [Comments About the Code](#comments-about-the-code)
4. [Test Plan](#test-plan)
5. [Test Results](#test-results)
6. [Build Procedures](#build-procedures)
7. [Problems](#problems)
8. [Comments](#comments)

### Requirements

* The system must have 2 types of users: Clients and Administrators
  - Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  - Customers are users who access the system to buy products/services.
* The admin record includes, at least: name, id, phone, email.
* Each customer's record includes, at least: name, id, address, phone, email
* Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
* Your store may sell products, services or both (you decide)
* Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
* The system must provide accessibility requirements and provide good usability. The system must be responsive, meaning that it should complete assigned tasks within a reasonable time.

### Project Description

#### Funcionalites:
* Two types of users (admnistrators, clients)
* Admin:
  - Users, products and stock manegement
  - Sales history
  - CRUD
* User:
  - Login/Sign In
  - Add products to the cart
  - Buying options
  - Review products with ✩✩✩✩✩

#### Navigation Diagram (Will be updated constantly): https://github.com/matheuspd/SCC0219---Web-Project/blob/main/Diagrama%20Loja.pdf

#### Mockup (Will be updated constantly): https://www.figma.com/file/ChUXAvdSrFZn4HOzOO8cRY/Web-Project

For now we have all the pages with some functional javascript in the login, products and cart pages. 

### Comments About the Code

### Test Plan

Manual tests will be done by the Insomnia software.

Tests to be performed:
* As an admin:
  - Add new product
  - Add new admin
  - Login and Logout
* As an user:
  - Sign In
  - Buy product
  - Login and Logout
* Cart:
  - Add product
  - Buy more products than in stock
  - Remove products from cart

### Test Results

### Build Procedures

### Problems

### Comments
