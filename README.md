# Nasa React App

This web application, built with React, TypeScript, and Vite, allows users to explore images provided by NASA's API. The app displays an image, its title, and a description. Users can save the displayed data using localStorage, ensuring that the information persists across sessions.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)

## Features

- **NASA API Integration**: Fetches and displays images along with their titles and descriptions from NASA's API.
- **LocalStorage Support**: Saves fetched data to localStorage to maintain data persistence.
- **Responsive Design**: Adaptable layout for various screen sizes.

## Demo

Check out the live demo of the application [here](https://nasa-react-app-ten.vercel.app/)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) or [Pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MielAndMoon/nasa-react-app.git
   cd nasa-react-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Obtain a NASA API key by signing up at [NASA's API Portal](https://api.nasa.gov/).

4. Create a `.env` file in the root directory and add your NASA API key:

   ```
   VITE_NASA_API_KEY=your_api_key_here
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
#
pnpm run dev
```

The application will be available at `http://localhost:5173`.
