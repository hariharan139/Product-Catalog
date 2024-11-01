Product Catalog Web Page Documentation
Project Overview
The Product Catalog Web Page is a React.js application developed as part of an internship project. It showcases a product catalog where users can:

View a list of products.
Filter products by category.
View detailed information for each product on a separate page.
The UI is styled with Tailwind CSS for a clean, responsive layout.



Technologies Used
React.js: Library for building user interfaces.
React Router: For routing and navigating between pages.
Tailwind CSS: Utility-first CSS framework for styling.
JavaScript: Programming language for client-side logic.


Usage
Viewing Products: All products are displayed on the main page. You can scroll through and view basic details for each product.
Filtering Products: Use the dropdown filter to view products by category.
Viewing Details: Click "View Details" on any product to navigate to its detail page, where additional information, including an image and description, is displayed.

Features
Product Listing: Displays all products in a grid layout.
Product Filtering: Filter products by category for easier navigation.
Detailed View: Each product has a dedicated page for in-depth information.

Components
1. App.js
The main application component that sets up routing and initializes the product data.

2. ProductList.js
Displays a grid of products.
Includes a filter dropdown for selecting categories.
Renders each product card with basic information and a "View Details" button.
3. ProductDetails.js
Shows details for a single product, including the image, description, category, and price.
Fetches the product by ID from the URL parameter.
