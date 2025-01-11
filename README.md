### **Flavor Tale – Food Management Platform**

Welcome to **Flavor Tale**, a dynamic food management platform designed to offer a seamless experience for both food enthusiasts and food providers. The platform includes robust authentication, interactive features, and a visually appealing interface.

## Purpose
The primary purpose of **Flavor Tale** is to create an all-in-one platform where users can explore delicious food items, manage personal food inventories, and place orders in a highly interactive and user-friendly environment. 

## Live URL
You can explore the live project here: [Flavor Tale Live](https://flavor-tales.web.app/)

## Key Features
### Layout & Page Structure
- **Navbar**: Includes website name/logo, navigation links (Home, All Foods, Gallery), and a conditional login/logout button with a profile image for logged-in users.
- **Main Section**: Dynamic routing to display various pages.
- **Footer**: Contains relevant information with an eye-catching design.

### Authentication System
- Login and Register pages with email-password authentication.
- Google or GitHub OAuth integration.
- Password validation: Includes uppercase, lowercase, and minimum length requirements.
- Error and success notifications using toast or SweetAlert.

### Pages
#### Public Pages
- **Home Page**:
  - Banner with a heading, short description, and navigation to the All Foods page.
  - Top Foods section showcasing six top-selling food items.
  - Additional relevant sections for user engagement.
- **All Foods Page**:
  - Food cards with search functionality and details buttons.
  - Displays all food items stored in the database.
- **Gallery Page**:
  - Displays at least 10 static images in a lightbox-style gallery with hover effects.
- **Single Food Page**:
  - Displays detailed information about a selected food item, including purchase count and a purchase button.

#### Private Pages
- **Food Purchase Page**:
  - A form to complete food purchases.
  - Disables purchases when quantity is zero or exceeds availability.
- **My Foods Page**:
  - Displays all food items added by the logged-in user.
  - Option to update food items.
- **Add Food Page**:
  - Allows logged-in users to add food items with various details.
- **My Orders Page**:
  - Displays all ordered items by the logged-in user with options to delete orders.

### Additional Features
- **JWT Authentication**:
  - Secure user sessions with JWT tokens.
  - Tokens are used to protect private routes.
- **Food Quantity Control**:
  - Prevents purchases of unavailable or excess quantities.
  - Restricts users from buying their own added food items.
- **Search Functionality**:
  - Search foods by name on the All Foods page.
- **Theme Customization**:
  - Light/Dark theme toggling for the entire application.
- **Profile Image Functionalities**:
  - Dropdown menu with links to My Foods, Add Food, and My Orders pages.

## NPM Packages Used
Here is a list of notable npm packages used in this project:
- **React Router DOM**: For navigation and routing.
- **Firebase**: For authentication and hosting.
- **React Toastify**: For error and success notifications.
- **SweetAlert2**: For stylish alerts.
- **Axios**: For API calls.
- **JWT-decode**: To decode JWT tokens.
- **Moment.js**: For date and time formatting.
- **Tailwind CSS**: For styling the application.
- **DaisyUI**: For UI components and theme toggling.
- **Yet-Another-React-Lightbox**: For the gallery lightbox effect.

---

Let’s learn and grow together!
