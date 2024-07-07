# Video Clipper - Stage 1

## Overview

Welcome to the Video Clipper application! This project is a web-based tool designed to allow users to upload and view videos through a custom video player component. The current stage (Stage 1) focuses on setting up the basic project structure and implementing a simple video player to play a sample video clip.

For detailed documentation, visit our [Project Wiki](https://github.com/raihanvaheed/video-clipper-app/wiki).

## Features

- **Custom Video Player:** A simple video player component built with React and TypeScript.
- **Sample Video Clip:** Includes a sample video clip "WelcomeToJurassicPark.mp4" to demonstrate the video player's functionality.
- **Frontend-Backend Separation:** The project is structured with separate front-end and back-end directories for better scalability and maintainability.

## Project Structure

```
video-clipper-app/
├── client/
│   ├── public/
│   │   ├── WelcomeToJurassicPark.mp4
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── VideoPlayer.tsx
│   │   ├── pages/
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   └── index.css
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── react-app-env.d.ts
│   │   └── ...
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── server/
│   ├── src/
│   │   ├── routes/
│   │   │   └── index.ts
│   │   ├── controllers/
│   │   ├── models/
│   │   └── app.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── .gitignore
├── README.md
└── ...
```

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Frontend Setup

In the `client` directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

### Backend Setup

In the `server` directory, you can run:

#### `npm run dev`

Runs the backend server in development mode using `ts-node-dev`.\
The server will restart automatically if there are any changes in the source code.

#### `npm run build`

Compiles the TypeScript code into JavaScript and outputs it into the `dist` directory.

#### `npm start`

Runs the compiled JavaScript code from the `dist` directory.

## Next Steps

In the next stages of development, we plan to:

- Implement video clipping functionality.
- Add user authentication and authorization.
- Improve the user interface with more advanced features and better design.
- Set up a database for storing user data and video metadata.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

This project is licensed under the MIT License.
