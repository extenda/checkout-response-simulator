
# Response Time Tester

This project provides a simple web application that allows users to simulate and experience varying response times from a backend server. The application is built with Express.js for the backend and plain HTML, CSS, and JavaScript for the frontend.

## Features

- Enter a delay value in milliseconds.
- Click a button to simulate a backend response with the specified delay.
- Clear the input and response message to start a new simulation.

## Prerequisites

- Node.js and npm should be installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository or download the source code.
   ```bash
   git clone https://github.com/yourusername/response-time-tester.git
   cd response-time-tester
   ```

2. Install the necessary npm packages.
   ```bash
   npm install
   ```

## Running the Application

1. Start the Express server.
   ```bash
   node server.js
   ```

2. Open your web browser and navigate to `http://localhost:3000`. You should see the web page for testing response times.

## Usage

1. Open the web page in your browser.
2. Enter a delay value in milliseconds in the input field.
3. Click the "Scan Item" button to see the simulated response time as the receipt builds up.
4. Click the "Clear" button to reset the input and the response message.

## Example

- Enter `1000` in the input field (for a 1-second delay).
- Click "Scan Item".
- The receipt will build up with a 1000ms (1 sec) delay.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)