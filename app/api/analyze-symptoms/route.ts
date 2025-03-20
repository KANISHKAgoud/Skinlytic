import { NextResponse } from "next/server";
import { PythonShell } from "python-shell";

export async function POST(request: Request) {
  const { symptoms } = await request.json();
  console.log("Received symptoms:", symptoms);

  try {
    console.log("Calling Python script...");
    const result = await new Promise<string[]>((resolve, reject) => {
      PythonShell.run(
        "analyze_symptoms.py", // Python script to analyze symptoms
        {
          args: [symptoms], // Pass symptoms as an argument
          pythonPath: "C:\\Users\\comp\\AppData\\Local\\Programs\\Python\\Python310\\python.exe", // Use the full path to Python
        },
        (err: Error | null, results?: string[]) => {
          if (err) {
            console.error("Python script error:", err);
            reject(err); // Reject the promise if there's an error
          } else {
            console.log("Python script output:", results);
            resolve(results || []); // Resolve the promise with the results (or an empty array if results is undefined)
          }
        }
      );
    });

    console.log("Parsing result...");
    const disease = result[0]; // The predicted disease
    const solution = result[1]; // The recommended solution
    const prevention = result[2]; // Prevention tips
    const medicine = result[3]; // Recommended medicine
    const doctorRequired = result[4] === "true"; // Whether a doctor is required

    return NextResponse.json({
      disease,
      solution,
      prevention,
      medicine,
      doctorRequired,
    });
  } catch (error) {
    console.error("Error analyzing symptoms:", error);
    return NextResponse.json({ error: "Failed to analyze symptoms" }, { status: 500 });
  }
}