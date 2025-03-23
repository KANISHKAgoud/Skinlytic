import * as tf from "@tensorflow/tfjs";

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
    // If predictions is an array, take the first tensor and cast to Float32Array
    results = predictions[0].dataSync() as Float32Array;
  } else {
    // If predictions is a single tensor, cast to Float32Array
    results = predictions.dataSync() as Float32Array;
  }

  return results;
};