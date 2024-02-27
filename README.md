# Sunscreen Checker Web Application

This web application allows users to check if they need to apply sunscreen based on their location's UV index. Users can enter their latitude and longitude or use their device's location to get real-time sunscreen recommendations.

## Features

- Input fields for latitude and longitude
- Option to use device's geolocation
- Real-time UV index retrieval using the Open UV API
- Sunscreen recommendation based on UV index
- Responsive design using Tailwind CSS

## Technologies Used

- HTML
- CSS (with Tailwind CSS for styling)
- JavaScript (Vanilla JS)
- Node.js (for backend functionality)
- Express.js (for server setup)
- Axios (for making HTTP requests)
- Open UV API (for retrieving UV index data)
- 
  ## Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/adityasingh151/RandomJokeApp-using-JokeApi.git

2. ```bash
   cd random-jokes-web-app
3. ```bash
   npm install
4. ```bash
   npm install -g nodemon
5. ```bash
   nodemon index.js

## Usage

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Get an API key from [Open UV API](https://www.openuv.io/) and replace `'YOUR_OPENUV_API_KEY_HERE'` in `server.js` with your actual API key.
4. Run the server using `node server.js`.
5. Open your web browser and navigate to `http://localhost:3000`.
6. Enter your latitude and longitude or click on "Use My Location" to allow the browser to access your device's location.
7. Click on "Check Sunscreen" to see if you need to apply sunscreen based on the UV index at your location.

## Author

This web application was created with ❤️ by [Aditya](https://github.com/aditya).

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.

