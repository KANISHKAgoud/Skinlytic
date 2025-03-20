from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import cv2
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to call backend

# Load Pretrained Model
model = tf.keras.models.load_model("model/skin_disease_model.h5")

# Disease Labels
disease_labels = ["Acne", "Eczema", "Psoriasis", "Skin Cancer"]

# Medicine & Prevention Database
disease_data = {
    "Acne": {
        "solution": "Wash face twice daily, avoid oily food",
        "prevention": "Use mild face wash, drink water",
        "medicine": "Benzoyl Peroxide, Clindamycin Gel",
        "doctorRequired": False,
    },
    "Eczema": {
        "solution": "Use moisturizing creams, avoid hot showers",
        "prevention": "Apply coconut oil, avoid harsh soaps",
        "medicine": "Hydrocortisone Cream, Antihistamines",
        "doctorRequired": True,
    },
}

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    image_data = data["image"].split(",")[1]  # Remove header
    image_bytes = base64.b64decode(image_data)

    # Convert Image to Numpy Array
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    img = cv2.resize(img, (224, 224)) / 255.0
    img = np.expand_dims(img, axis=0)

    # Predict Disease
    prediction = model.predict(img)
    disease_index = np.argmax(prediction)
    disease_name = disease_labels[disease_index]

    # Get Treatment Info
    info = disease_data.get(disease_name, {})

    return jsonify({
        "disease": disease_name,
        "solution": info.get("solution", "No solution available"),
        "prevention": info.get("prevention", "No prevention available"),
        "medicine": info.get("medicine", "Consult a doctor"),
        "doctorRequired": info.get("doctorRequired", False),
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
