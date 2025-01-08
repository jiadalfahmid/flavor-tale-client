### **Flavor Tale – Food Management Platform**

Welcome to **Flavor Tale**, a vibrant platform designed for food enthusiasts and providers. With interactive features, robust authentication, and a sleek interface, it offers a complete food management solution.

---

### **🚀 Purpose**  
The goal of **Flavor Tale** is to create a unified space for exploring, managing, and ordering food items, ensuring a seamless experience for both users and providers.

---

### **🌐 Live URL**  
Explore the project here: [Flavor Tale Live](https://flavor-tales.web.app/)

---

### **🔑 Key Features**  

#### **Layout & Navigation**  
- **Navbar**:  
  - Includes brand logo, links (Home, All Foods, Gallery), and a conditional login/logout button.  
  - Displays the user’s profile image when logged in.
- **Footer**:  
  - Informative and aesthetically designed footer section.  

#### **Authentication System**  
- Email-password login and registration with validation rules.  
- Google and GitHub OAuth integration for quick sign-in.  
- Real-time error and success feedback using **React Toastify** or **SweetAlert2**.  

#### **Dynamic Pages**  
1. **Home Page**  
   - Attractive banner with navigation options.  
   - Top Foods section highlighting six best-selling food items.  
   - Additional engaging sections for users.  
   
2. **All Foods Page**  
   - Displays food items in a searchable card format.  
   - Each card includes a “View Details” button for more information.  

3. **Gallery Page**  
   - Lightbox-style gallery showcasing food images with hover animations.  

4. **Single Food Page**  
   - Detailed information about selected food, including purchase options.  

#### **Private Pages (Requires Login)**  
1. **Food Purchase Page**  
   - Users can complete purchases via a form.  
   - Disables purchases if quantity is unavailable or exceeds stock.  
   
2. **My Foods Page**  
   - Displays foods added by the logged-in user.  
   - Allows users to update or delete their items.  

3. **Add Food Page**  
   - Enables users to add new food items with required details (name, image, description, etc.).  

4. **My Orders Page**  
   - Lists all orders placed by the logged-in user.  
   - Provides options to delete orders.

---

### **✨ Additional Features**  
- **JWT Authentication**:  
  - Ensures secure sessions for logged-in users and protects private routes.  
- **Food Quantity Control**:  
  - Prevents users from purchasing unavailable quantities or their own listed items.  
- **Search Functionality**:  
  - Users can search for foods by name on the All Foods page.  
- **Theme Switching**:  
  - Light and Dark mode toggling for better user experience.  
- **Profile Image Dropdown**:  
  - Offers quick links to My Foods, Add Food, and My Orders pages.

---

### **📦 NPM Packages Used**  
- **React Router DOM**: For routing and navigation.  
- **Firebase**: Authentication and hosting services.  
- **React Toastify**: Real-time notifications for user actions.  
- **SweetAlert2**: Stylish alert modals.  
- **Axios**: For API communication.  
- **JWT-decode**: Decodes JWT tokens.  
- **Moment.js**: Formats date and time.  
- **Tailwind CSS**: Responsive styling framework.  
- **DaisyUI**: Pre-styled UI components with theme support.  
- **Yet-Another-React-Lightbox**: Creates an interactive lightbox for the gallery.

---

### **💻 How to Run Locally**  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/jiadalfahmid/flavor-tale-client.git
   cd flavor-tale
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Firebase Config**  
   - Create a `.env` file in the root directory.  
   - Add Firebase API keys and other environment variables.

4. **Run the Application**  
   ```bash
   npm start
   ```

---

### **Final Note**  
Flavor Tale is a highly interactive food management platform designed to offer a delightful experience for all users. Try it out now and start exploring delicious foods!  

**Let’s learn and grow together!** 🌱
