import sys
import json

def analyze_symptoms(symptoms):
    return {
        "disease": "Flu",
        "solution": "Take antiviral medication and rest.",
        "prevention": "Get a flu vaccine and practice good hygiene.",
        "medicine": "Antiviral drugs like Tamiflu.",
        "doctorRequired": False
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No symptoms provided"}))
        sys.exit(1)

    symptoms = sys.argv[1]

    result = analyze_symptoms(symptoms)

    print(json.dumps(result))
    sys.stdout.flush()  # Ensures proper data output
