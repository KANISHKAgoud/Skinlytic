import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const body = await request.json();
  const userSymptoms = body.symptoms.toLowerCase();

  // Read the symptoms.txt file
  const filePath = path.join(process.cwd(), "symptoms.txt");
  const data = fs.readFileSync(filePath, "utf8");

  const lines = data.split("\n");
  const matchedDiseases: string[] = [];

  lines.forEach((line) => {
    // Split the line into symptoms and disease
    const lastCommaIndex = line.lastIndexOf(",");
    const symptoms = line.slice(0, lastCommaIndex).trim();
    const disease = line.slice(lastCommaIndex + 1).trim();

    // Split symptoms into an array
    const symptomList = symptoms.split(", ").map((s) => s.trim().toLowerCase());

    let matchCount = 0;
    symptomList.forEach((symptom) => {
      // Use a regex to match whole words only
      const regex = new RegExp(`\\b${symptom}\\b`, "i");
      if (regex.test(userSymptoms)) {
        matchCount++;
      }
    });

    console.log(`Disease: ${disease}, Symptoms: ${symptomList}, Matches: ${matchCount}`);

    if (matchCount >= 2) {
      matchedDiseases.push(disease);
    }
  });

  if (matchedDiseases.length > 0) {
    const result = `Based on your symptoms, you may have: ${matchedDiseases.join(", ")}.`;
    let advice = "";
    if (matchedDiseases.includes("Flu")) {
      advice += "Please consult a doctor and consider taking antiviral medication.<br>";
    }
    if (matchedDiseases.includes("Migraine")) {
      advice += "Rest in a dark room and consider taking pain relievers.<br>";
    }
    if (advice === "") {
      advice = "Please consult a doctor for further advice.";
    }
    return NextResponse.json({ result: `${result}<br>${advice}` });
  } else {
    return NextResponse.json({ result: "No specific disease detected based on your symptoms. Please consult a doctor for further advice." });
  }
}