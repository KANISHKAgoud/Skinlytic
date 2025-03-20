import sys
import joblib

print("Python script started...")  # Log that the script is running

# Step 1: Load the trained model and vectorizer
model = joblib.load("symptom_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

# Step 2: Get symptoms from command-line arguments
symptoms = sys.argv[1]
print("Received symptoms:", symptoms)  # Log the received symptoms

# Step 3: Vectorize the symptoms
symptoms_vectorized = vectorizer.transform([symptoms])

# Step 4: Predict the disease
disease = model.predict(symptoms_vectorized)[0]
print("Predicted disease:", disease)  # Log the predicted disease

# Step 5: Define solutions, preventions, and medicines
solutions = {
    "Flu": "Take antiviral medication and rest.",
    "Skin Infection": "Use topical antibiotics and consult a doctor.",
    "Migraine": "Take pain relievers and rest in a dark room.",
    "Allergy": "Avoid allergens and take antihistamines.",
    "Common Cold": "Rest and drink plenty of fluids.",
}

preventions = {
    "Flu": "Get a flu vaccine and practice good hygiene.",
    "Skin Infection": "Keep the affected area clean and dry.",
    "Migraine": "Avoid triggers like stress and certain foods.",
    "Allergy": "Avoid allergens and keep your environment clean.",
    "Common Cold": "Wash hands frequently and avoid close contact with sick people.",
}

medicines = {
    "Flu": "Antiviral drugs like Tamiflu.",
    "Skin Infection": "Topical antibiotics like Neosporin.",
    "Migraine": "Pain relievers like Ibuprofen.",
    "Allergy": "Antihistamines like Claritin.",
    "Common Cold": "Over-the-counter cold medicine.",
}

# Step 6: Determine if a doctor is required
doctor_required = disease == "Skin Infection"

# Step 7: Return the results
print(disease)  # Line 1: Disease
print(solutions[disease])  # Line 2: Solution
print(preventions[disease])  # Line 3: Prevention
print(medicines[disease])  # Line 4: Medicine
print(str(doctor_required).lower())  # Line 5: Doctor required (true/false)