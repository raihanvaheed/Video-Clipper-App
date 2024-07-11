# Video Clipper - Stage 2

## Overview

Welcome to the Video Clipper application! This project is a web-based tool designed to allow users to upload and view videos through a custom video player component. In Stage 2, we have integrated YOLO with OpenCV for video processing and made significant enhancements to the UI to display video processing progress.

For detailed documentation, visit our [Project Wiki](https://github.com/raihanvaheed/Video-Clipper-App/wiki).

## Features

- **Custom Video Player:** A simple video player component built with React and TypeScript.
- **Upload and Play Video:** Users can upload a video from their local computer and play it in the video player.
- **Video Processing with YOLO:** Videos are processed using the YOLO algorithm with OpenCV to detect objects.
- **Progress Indicator:** Displays the progress of video processing in the UI.
- **View Processed Video:** The processed video is now viewable in the UI.
- **Frontend-Backend Separation:** The project is structured with separate front-end and back-end directories for better scalability and maintainability.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Full Project Setup

To get the entire project up and running, follow these steps:

#### 1. Frontend Setup

In the `client` directory, you can run:

##### Install Dependencies

```bash
cd client
npm install
```

##### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

##### Serve the Build

To serve the built application, you can use a static server like `serve`:

```bash
serve -s build
```

This will start a server and serve your built application. By default, it will be accessible at `http://localhost:3000`.

#### 2. Backend Setup

In the `python-backend` directory, you can run:

##### Create and Activate Virtual Environment

```bash
python -m venv venv
source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
```

##### Populate `models` Directory

Before running the backend server, ensure that the `models` directory is populated with the necessary YOLO configuration files, weights, and COCO labels. You can download these files from the following links:

- **YOLOv3 Configuration File (`yolov3.cfg`)**:
  - Download from: https://github.com/pjreddie/darknet/blob/master/cfg/yolov3.cfg

- **YOLOv3 Weights (`yolov3.weights`)**:
  - Download from: https://pjreddie.com/media/files/yolov3.weights

- **COCO Labels (`coco.names`)**:
  - Download from: https://github.com/pjreddie/darknet/blob/master/data/coco.names

Place these files in the `python-backend/models` directory.

##### Install Dependencies

```bash
pip install -r requirements.txt
```

##### Run the Flask Server

```bash
python src/app.py
```

#### 3. Open Your Browser

Open your browser and go to `http://localhost:5000`. Your React app should be running, served by the Flask backend.

---

### Next Steps

In the next stages of development, we plan to:

- Implement video clipping functionality.
- Add user authentication and authorization.
- Improve the user interface with more advanced features and better design.
- Set up a database for storing user data and video metadata.

### License

This project is licensed under the MIT License.

