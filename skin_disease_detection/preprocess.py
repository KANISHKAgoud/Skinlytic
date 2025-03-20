import os
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Path to dataset
dataset_path = "path/to/dataset"
categories = ["Acne", "Eczema", "Melanoma", "Psoriasis"]  # Add more if needed

data = []
labels = []

# Process images
for category in categories:
    path = os.path.join(dataset_path, category)
    label = categories.index(category)

    for img_name in os.listdir(path):
        img_path = os.path.join(path, img_name)
        img = cv2.imread(img_path)
        img = cv2.resize(img, (224, 224))  # Resize
        img = img / 255.0  # Normalize
        data.append(img)
        labels.append(label)

# Convert to NumPy arrays
data = np.array(data)
labels = np.array(labels)

print(f"Dataset Loaded: {data.shape}, Labels: {labels.shape}")
