# yolo.py
import cv2
import numpy as np

class YOLO:
    def __init__(self):
        self.net = cv2.dnn.readNet('models/yolov3.weights', 'models/yolov3.cfg')
        self.layer_names = self.net.getLayerNames()
        # Debugging: Print layer names and unconnected out layers
        print("Layer Names:", self.layer_names)
        unconnected_out_layers = self.net.getUnconnectedOutLayers()
        print("Unconnected Out Layers:", unconnected_out_layers)

        self.output_layers = [self.layer_names[i - 1] for i in unconnected_out_layers]

        with open('models/coco.names', 'r') as f:
            self.classes = [line.strip() for line in f.readlines()]

    def detect_objects(self, frame):
        height, width, channels = frame.shape
        blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
        self.net.setInput(blob)
        outs = self.net.forward(self.output_layers)

        class_ids = []
        confidences = []
        boxes = []

        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > 0.5:
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)

                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)

                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)

        indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

        for i in range(len(boxes)):
            if i in indexes:
                x, y, w, h = boxes[i]
                label = str(self.classes[class_ids[i]])
                confidence = confidences[i]
                color = (0, 255, 0)
                cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
                cv2.putText(frame, f'{label} {int(confidence * 100)}%', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        return frame
