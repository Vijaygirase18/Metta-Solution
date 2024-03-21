# Currency Search Application

This project is a web application that allows users to find countries using a specific currency code. 
It provides information about countries that use a particular currency, including their names and capitals. 
The application offers various display formats, including a list, grid, and table, to suit different user preferences.

## Features
- **Currency Code Search**: Users can enter a currency code (e.g., USD, EUR) to search for countries that use that currency.
- **Display Options**: Users can choose from multiple display formats (list, grid, or table) to view the search results.
- **Country Information**: The application provides information about each country, including its name and capital.
- **Flag Images**: When available, the application displays flag images of countries alongside their information.

## Technologies Used
- **Frontend**: React.js for building the user interface.
- **Backend**: Node.js with Express.js for handling API requests and responses.
- **External APIs**: Utilizes external APIs to fetch country data and flag images.
- **Styling**: CSS for styling the user interface.

## Setup Instructions
1. Clone the repository to your local machine.
git clone <repository-url>
2. Navigate to the project directory.
cd currency-search
3. Install dependencies for both the frontend and backend.
cd front
npm install
cd ../back
npm install
4. Start the backend server.
node index.js
5. Start the frontend development server.
npm start
6. Open your web browser and visit `http://localhost:3000` to access the Currency Search application.

## Usage
1. Enter a currency code (e.g., USD, EUR) into the search bar.
2. Press the "Search" button or hit the "Enter" key to initiate the search.
3. Choose from the available display options (list, grid, table) to view the search results.
4. Explore the countries using the chosen display format, including their names and capitals.

## Notable Assumptions
During the development of this project, the following assumptions were made:
- Currency codes entered by users are assumed to be valid.
- Flag images are assumed to be available for most countries.
- External APIs used by the application are assumed to be responsive and available.
- Currency codes are treated as case-insensitive during the search process.
- Users are assumed to primarily access the application from devices with standard web browsing capabilities.



## Acknowledgments
- Special thanks to [Rest Countries](https://restcountries.com/) for providing country data.
- Thanks to [Flags API](https://flagsapi.com/) and [Flag CDN](https://flagcdn.com/) for providing flag images.

## Author
 Vijay Girase




