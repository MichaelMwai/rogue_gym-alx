Here’s a comprehensive and professional README for your class project. It’s structured to showcase your skills, the thought process, and the implementation details to impress your lecturer.

---

# **Rogue Gym Website Project**

## **Overview**

The Rogue Gym website is a fully responsive, dynamic, and user-friendly platform designed to provide a seamless experience for users seeking information about fitness, memberships, and gym offerings. With features like a login system, light/dark theme toggle, and subscription pop-ups, this project demonstrates the integration of front-end design with practical JavaScript functionality.

---

## **Table of Contents**

1. [Project Features](#project-features)
2. [Technologies Used](#technologies-used)
3. [Features Implemented](#features-implemented)
   - [Login System with Local Storage](#login-system-with-local-storage)
   - [Light/Dark Mode Toggle](#lightdark-mode-toggle)
   - [Subscription Pop-Up](#subscription-pop-up)
4. [HTML/CSS/JS Integration](#htmlcssjs-integration)
5. [Setup and Installation](#setup-and-installation)
6. [Challenges Faced](#challenges-faced)
7. [Future Enhancements](#future-enhancements)
8. [Acknowledgments](#acknowledgments)

---

## **Project Features**

### **1. Dynamic Login System**

- A login form is dynamically added via JavaScript.
- Users can log in, and their username is displayed next to the login button.
- Persistent login state is maintained using `localStorage`, ensuring users remain logged in across page reloads or navigation.

### **2. Light/Dark Mode Toggle**

- A theme toggle button (featuring a bulb icon) allows users to switch between light and dark modes.
- The toggle dynamically updates:
  - Text and background colors.
  - Maintains consistent styling for the primary red theme.
- User preferences are saved to `localStorage`, so the selected theme persists across sessions.

### **3. Subscription Pop-Up**

- A subscription form dynamically injects a pop-up to confirm email subscriptions.
- The user’s email is displayed in the pop-up for confirmation.
- The pop-up can be closed via a button or by clicking outside the modal.

### **4. Responsive Design**

- The website is fully responsive and optimized for various devices.
- CSS variables (`:root`) and modern layout techniques (Flexbox) ensure scalability.

---

## **Technologies Used**

- **HTML5**: Semantic structure for easy accessibility and organization.
- **CSS3**: Custom styling with variables for light/dark mode support.
- **JavaScript (ES6)**: Adds interactivity and dynamic functionality.
- **LocalStorage**: Preserves user preferences and login state.
- **Google Fonts**: Clean typography to enhance readability.
- **SVG Icons**: Used for the light/dark mode toggle button.

---

## **Features Implemented**

### **Login System with Local Storage**

- **Description**: Users can log in, and their username is displayed dynamically in the header.
- **Technical Details**:
  - The login form is dynamically injected into the DOM via JavaScript.
  - Login state is preserved across pages using `localStorage`.

### **Light/Dark Mode Toggle**

- **Description**: Users can switch between light and dark modes using a bulb icon.
- **Technical Details**:
  - CSS variables are used to define `--text-color`, `--background-color`, and `--primary-color`.
  - JavaScript toggles a `light-theme` class on the `<body>`.
  - The theme preference is saved in `localStorage` for persistence across pages.

### **Subscription Pop-Up**

- **Description**: Users can enter their email into a subscription form, triggering a success pop-up.
- **Technical Details**:
  - The pop-up is dynamically added to the DOM and styled using CSS.
  - The pop-up shows the entered email and allows closing via buttons or overlay clicks.

---

## **HTML/CSS/JS Integration**

This project focuses on modular and reusable code:

1. **HTML**:
   - All forms and buttons are simple and minimal, relying on JavaScript for dynamic functionality.
2. **CSS**:
   - Variables (`--primary-color`, `--background-color`) ensure easy theme management.
   - Flexbox is used for layout responsiveness.
3. **JavaScript**:
   - Dynamically injects reusable components (e.g., login and subscription forms).
   - Manages localStorage to persist user settings and data across sessions.

---

## **Setup and Installation**

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/your-username/rogue-gym.git
```

### **Step 2: Open in a Browser**

Navigate to the project folder and open `index.html` in your preferred browser.

---

## **Challenges Faced**

1. **CSS Conflicts**:
   - Overlapping class names caused unexpected behavior in styling. The issue was resolved by giving unique class names to dynamically injected elements (e.g., `login-popup` and `subscription-popup`).
2. **Local Storage Integration**:
   - Initial issues with theme and login persistence across pages were resolved by ensuring `localStorage` was read and applied on `DOMContentLoaded`.

---

## **Future Enhancements**

1. **Google Sign-In Integration**:
   - Use the Google OAuth API for user authentication.
2. **Admin Panel**:
   - Add a backend system (e.g., Django) for managing gym memberships and subscriptions.
3. **Analytics Dashboard**:
   - Provide real-time stats on user engagement and subscriptions.

---

## **Acknowledgments**

Special thanks to:

- **My Instructor**: For guidance throughout the project.
- **OpenAI**: For collaborative coding and insights.
- **Rogue Gym Team**: For inspiring the design and functionality.

---

This README should help present your project as a polished and professional submission. Let me know if you need tweaks or additional sections! 😊
