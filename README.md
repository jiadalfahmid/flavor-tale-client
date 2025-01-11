### **Flavor Tale – Food Management Platform**

<<<<<<< HEAD
Welcome to **Flavor Tale**, an advanced food management platform crafted to provide a seamless, user-centric experience for both food enthusiasts and food providers. The platform boasts a range of interactive features, a robust authentication system, and an intuitive interface, designed to ensure an optimal user experience.

## Table of Contents
- [Purpose](#purpose)
- [Live URL](#live-url)
- [Key Features](#key-features)
  - [Layout & Page Structure](#layout--page-structure)
  - [Authentication System](#authentication-system)
  - [Pages](#pages)
    - [Public Pages](#public-pages)
    - [Private Pages](#private-pages)
  - [Additional Features](#additional-features)
- [NPM Packages Used](#npm-packages-used)
- [Getting Started](#getting-started)

## Purpose
The purpose of **Flavor Tale** is to provide a one-stop solution for discovering, managing, and ordering food items. It allows users to interact with the platform in a personalized way by managing food inventories, exploring food options, and making purchases, all within an engaging, highly interactive environment.

## Live URL
Experience the live project here: [Flavor Tale Live](https://flavor-tales.web.app/)

## Key Features

### Layout & Page Structure
- **Navbar**: Features the website's logo/name, navigation links (Home, All Foods, Gallery), and a login/logout button with a profile image for authenticated users.
- **Main Section**: Dynamic page routing for easy navigation.
- **Footer**: Includes key information presented with an eye-catching design.

### Authentication System
- User login and registration pages with email-password authentication.
- OAuth support for Google and GitHub login.
- Password validation ensuring strength, including uppercase, lowercase, and length requirements.
- Toast notifications for success and error messages, using **React Toastify**.

### Pages

#### Public Pages
- **Home Page**: 
  - Eye-catching banner with a short description and a link to the All Foods page.
  - Top Foods section showcasing six top-selling food items.
  - Engaging content to drive user interaction.
  
- **All Foods Page**: 
  - Displays food items in a card format with search and filter options.
  - Each food card includes a "Details" button for more information.
  
- **Gallery Page**: 
  - A collection of at least 10 static images displayed in a lightbox with hover effects.

- **Single Food Page**: 
  - Detailed information about a selected food item, including purchase count and a purchase button.

#### Private Pages
- **Food Purchase Page**: 
  - Form to complete food purchases with logic to disable purchases if the quantity is unavailable or exceeds stock.
  
- **My Foods Page**: 
  - Displays the user's added food items with the ability to update them.
  
- **Add Food Page**: 
  - Allows users to add new food items, including details such as name, description, and quantity.
  
- **My Orders Page**: 
  - Displays a history of user orders with options to delete them.

### Additional Features
- **JWT Authentication**: Secure user sessions using JWT tokens, protecting private routes.
- **Food Quantity Control**: Prevents purchases of unavailable or over-quantity items and restricts users from purchasing their own listed foods.
- **Search Functionality**: Users can search food items by name on the All Foods page.
- **Theme Customization**: Provides a toggle to switch between light and dark themes.
- **Profile Image Functionalities**: Dropdown menu for easy access to My Foods, Add Food, and My Orders pages.

## NPM Packages Used
This project uses the following key npm packages:
- **React Router DOM**: For navigation and routing between pages.
- **Firebase**: For authentication and hosting the platform.
- **React Toastify**: For displaying toast notifications for success and errors.
- **SweetAlert2**: For custom alerts and modal notifications.
- **Axios**: For API requests.
- **JWT-decode**: To decode JWT tokens for authenticated user sessions.
- **Moment.js**: For formatting dates and times.
- **Tailwind CSS**: For utility-first styling, making the UI modern and responsive.
- **DaisyUI**: Provides pre-built UI components and supports theme switching.
- **Yet-Another-React-Lightbox**: For a sleek, responsive lightbox feature in the gallery.

## Getting Started

To run **Flavor Tale** locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jiadalfahmid/flavor-tale-client.git
   ```

2. Install dependencies:
   ```bash
   cd flavor-tale-client
   npm install
   ```

3. Set up Firebase and environment variables:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Set up Firebase Authentication and Firestore.
   - Add the Firebase configuration to your `.env` file.

4. Run the project locally:
   ```bash
   npm start
   ```

Visit `http://localhost:5173` in your browser to start using the application!

---

Let’s learn and grow together!
