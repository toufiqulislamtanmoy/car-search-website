# Hotel Listing Website

This project is a hotel listing website built with React.js for desktop-only screens. It allows users to explore properties in different cities, view property details, and navigate to individual property pages. The website is designed to be user-friendly and intuitive, providing a seamless experience for users looking for accommodations.

## Features

- **City Tabs:** Users can select a city from the tabs displayed on the top. Only 4 tabs are visible at a time, and the first tab is active by default. Clicking on any other tab sets it as active, displaying properties specific to that city.

- **Property Cards:** Properties are listed in cards, with 3 cards displayed in each row. The cards provide essential information about each property, including images, hotel name, price, and location.

- **Show More:** Users can click on the "Show More" button to load 3 new properties under the active tab. This feature allows users to explore more options without overwhelming them with a large number of properties at once.

- **Property Details:** Clicking on a property card navigates the user to the property page (`/property/:id`), where they can view detailed information about the selected property. The same card design is used on the property page for consistency.

## Technologies Used
- React.js
- React Router DOM
- Swiperjs
- Fontawesome

## How to Use

1. Clone the repository:

   ```bash
   https://github.com/toufiqulislamtanmoy/propertyDealer_job_task2.git
2. Install dependencies:

   ```bash
   npm install
3. Start the development server

   ```bash
   npm run dev
