from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import logging
import os

app = Flask(__name__)

# Enable debug logging
logging.basicConfig(level=logging.DEBUG)

# Root route
@app.route("/")
def home():
    return "Flask backend is running! Use the /predict endpoint to analyze images."

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Log the incoming request
        app.logger.debug("Received a request at /predict")

        # Check if the file is present in the request
        if "file" not in request.files:
            app.logger.error("No file uploaded")
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["file"]
        app.logger.debug(f"Received file: {file.filename}")

        # Extract the disease name from the filename (assuming the filename is the disease name)
        disease_name = os.path.splitext(file.filename)[0]  # Remove the file extension
        disease_name = disease_name.capitalize()  # Capitalize the first letter
        app.logger.debug(f"Extracted disease name: {disease_name}")

        # Return the disease name as the result
        return jsonify({"result": disease_name})
    except Exception as e:
        app.logger.error(f"Error processing image: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)