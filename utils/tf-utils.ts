import * as tf from "@tensorflow/tfjs";

// Load the pre-trained model
export const loadModel = async () => {
  // Replace with the path to your pre-trained model
  const model = await tf.loadLayersModel("/path/to/your/model.json");
  return model;
};

// Analyze the image
export const analyzeImage = async (file: File, model: tf.LayersModel) => {
  const img = new Image();
  img.src = URL.createObjectURL(file);

  await img.decode();

  // Convert the image to a tensor
  const tensor = tf.browser.fromPixels(img)
    .resizeNearestNeighbor([224, 224]) // Resize to the input size of the model
    .toFloat()
    .expandDims();

  // Normalize the image (if required by the model)
  const normalized = tensor.div(255.0);

  // Predict
  const predictions = await model.predict(normalized);

  // Handle single tensor or tensor array
  let results: Float32Array;
  if (Array.isArray(predictions)) {
    // If predictions is an array, take the first tensor
    results = predictions[0].dataSync();
  } else {
    // If predictions is a single tensor
    results = predictions.dataSync();
  }

  return results;
};

// Process predictions (map to disease names)
export const processPredictions = (predictions: Float32Array) => {
  // Example: Map predictions to disease names
  const diseases = ["Eczema", "Psoriasis", "Acne"];
  const maxIndex = predictions.indexOf(Math.max(...predictions));
  return diseases[maxIndex];
};