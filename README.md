
# Video Clipper - Stage 2

## Overview

Welcome to the Video Clipper application! This project is a web-based tool designed to allow users to upload and view videos through a custom video player component. In Stage 2, we have integrated YOLO with OpenCV for video processing and made significant enhancements to the UI to display video processing progress.

For detailed documentation, visit our [Project Wiki](https://github.com/raihanvaheed/Video-Clipper-App/wiki).

## Features

- **Custom Video Player:** A simple video player component built with React and TypeScript.
- **Upload and Play Video:** Users can upload a video from their local computer and play it in the video player.
- **Video Processing with YOLO:** Videos are processed using the YOLO algorithm with OpenCV to detect objects.
- **Progress Indicator:** Displays the progress of video processing in the UI.
- **Processed Video Information:** Indicates where the processed video is saved.
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
├── python-backend/
│   ├── models/
│   │   └── yolov3.weights
│   ├── processed/
│   │   └── (processed videos)
│   ├── src/
│   │   ├── app.py
│   │   ├── utils.py
│   │   └── yolo.py
│   ├── uploads/
│   ├── venv/
│   ├── .gitignore
│   ├── requirements.txt
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

In the `python-backend` directory, you can run:

#### Create and Activate Virtual Environment

```bash
python -m venv venv
source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
```

#### Install Dependencies

```bash
pip install -r requirements.txt
```

#### Run the Flask Server

```bash
python src/app.py
```

### Full Project Setup

To get the entire project up and running, follow these steps:

1. **Install Dependencies**:
   - In the project root, run the following commands to install dependencies for both client and server:

     ```bash
     cd client
     npm install
     cd ../python-backend
     pip install -r requirements.txt
     ```

2. **Build the React App**:
   - Navigate to the `client` directory and build the app:

     ```bash
     cd client
     npm run build
     ```

3. **Start the Flask Server**:
   - Navigate to the `python-backend` directory and start the development server:

     ```bash
     cd ../python-backend
     python src/app.py
     ```

4. **Open Your Browser**:
   - Open your browser and go to `http://localhost:3000`. Your React app should be running.

## Next Steps

In the next stages of development, we plan to:

- Implement video clipping functionality.
- Add user authentication and authorization.
- Improve the user interface with more advanced features and better design.
- Set up a database for storing user data and video metadata.
- Fix the issue with processed video not playing in the UI.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

This project is licensed under the MIT License.
