import { spawn } from "child_process";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { symptoms } = req.body;

  if (!symptoms || symptoms.length === 0) {
    return res.status(400).json({ error: "No symptoms provided" });
  }

  const pythonProcess = spawn("python", ["analyze_symptoms.py", symptoms]);

  let responseData = "";

  pythonProcess.stdout.on("data", (data) => {
    responseData += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Error from Python script: ${data.toString()}`);
  });

  pythonProcess.on("close", (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: "Failed to analyze symptoms" });
    }

    try {
      const parsedData = JSON.parse(responseData);
      return res.status(200).json(parsedData);
    } catch (error) {
      console.error("JSON Parsing Error:", error);
      return res.status(500).json({ error: "Invalid JSON response from Python script" });
    }
  });
}