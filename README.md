The Beauty World
The Beauty World is a React application that allows users to browse and search for beauty products. It fetches data from the Makeup API and displays the products in a visually appealing way.

Components
The application consists of the following components:

CreateCard
The CreateCard component represents an individual beauty product card. It displays information such as the product image, name, brand, type, and price. Users can also remove a card by clicking the delete button.

Fetch
The Fetch component is the main component of the application. It fetches data from the Makeup API and handles the logic for searching, filtering, and displaying the beauty products. It also manages the state for the number of visible products, the loaded status, and the search input.

Header
The Header component displays the title of the application.

App
The App component is the entry point of the application. It renders the Header and Fetch components.

Functionality
The Beauty World app provides the following functionality:

Fetches beauty product data from the Makeup API.
Displays beauty product cards with relevant information.
Allows users to search for products based on price and type.
Implements pagination by loading more products on button click.
Enables users to remove a product from the displayed list.
Dependencies
The following dependencies are used in this application:

react
react-dom
axios
@mui/material
react-bootstrap
Make sure to install these dependencies by running npm install before running the application.

Styling
The application includes CSS files for styling the components. You can customize the styles by modifying the CSS files or adding your own styles.

Usage
To use The Beauty World app, follow these steps:

Install the necessary dependencies by running npm install in the project directory.

Open the App.jsx file, which serves as the entry point for the application.

Customize the styling and layout of the components by modifying the CSS files.

Run the React app using npm start in the project directory. The app will open in your default browser, and you can browse and search for beauty products.

Credits
The Beauty World app was created by [Your Name].

## Live Website:

### [Beauty World](https://beauty-world-mec.netlify.app/)

