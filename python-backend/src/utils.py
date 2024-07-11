# utils.py

import os
import cv2
from flask import Response, request

def process_video(filepath, yolo, processed_folder, progress_callback):
    cap = cv2.VideoCapture(filepath)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    filename = os.path.basename(filepath)
    output_path = os.path.join(processed_folder, filename)
    
    # Switch to H264 codec
    fourcc = cv2.VideoWriter_fourcc(*'H264')  # Change codec to H264
    out = cv2.VideoWriter(output_path, fourcc, 30.0, (int(cap.get(3)), int(cap.get(4))))

    processed_frames = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        processed_frame = yolo.detect_objects(frame)
        out.write(processed_frame)
        processed_frames += 1

        # Calculate progress
        progress = (processed_frames / total_frames) * 100
        progress_callback(progress)  # Send progress to the callback

    cap.release()
    out.release()
    print(f"Video processing completed: {output_path}")  # Debugging: Confirm video processing
    return filename

def stream_video(file_path):
    def generate():
        with open(file_path, 'rb') as f:
            while True:
                data = f.read(1024 * 1024)
                if not data:
                    break
                yield data
    return Response(generate(), headers={'Content-Type': 'video/mp4'})
