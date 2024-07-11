# app.py
from flask import Flask, request, jsonify, send_from_directory, abort, Response
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
from yolo import YOLO
import utils

app = Flask(__name__)
CORS(app)  # Enable CORS

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
PROCESSED_FOLDER = os.path.join(os.getcwd(), 'processed')
ALLOWED_EXTENSIONS = {'mp4', 'avi', 'mov'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROCESSED_FOLDER'] = PROCESSED_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

current_progress = 0

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def update_progress(progress):
    global current_progress
    current_progress = progress

yolo = YOLO()

@app.route('/upload', methods=['POST'])
def upload_video():
    global current_progress
    current_progress = 0
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        processed_video_path = utils.process_video(filepath, yolo, app.config['PROCESSED_FOLDER'], update_progress)
        return jsonify({'message': 'File processed successfully', 'path': processed_video_path}), 200
    else:
        return jsonify({'error': 'File type not allowed'}), 400

@app.route('/processed/<filename>', methods=['GET'])
def get_processed_video(filename):
    processed_path = os.path.join(app.config['PROCESSED_FOLDER'], filename)
    print(f"Trying to serve file: {processed_path}")  # Debugging: Print the path being served
    if os.path.exists(processed_path):
        return utils.stream_video(processed_path)
    else:
        print(f"File not found: {processed_path}")  # Debugging: Print file not found message
        abort(404)

@app.route('/progress', methods=['GET'])
def get_progress():
    global current_progress
    return jsonify({'progress': current_progress})

# Test route to serve a static file
@app.route('/test-video', methods=['GET'])
def test_video():
    test_video_path = os.path.join(app.config['PROCESSED_FOLDER'], 'PatrickWalking.mp4')
    if os.path.exists(test_video_path):
        return utils.stream_video(test_video_path)
    else:
        abort(404)

if __name__ == '__main__':
    app.run(debug=True)
