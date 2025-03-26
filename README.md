# Skinlytic AI - Skin Disease Detection App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The app uses TensorFlow.js to analyze skin images and detect potential skin diseases such as Eczema, Psoriasis, and Acne.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn (package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/skinlytic-ai.git

2. **Navigate to the project directory:**

   ```bash
   cd skinlytic-ai

3. **Install dependencies:**

   ```bash
   npm install

## Running the Development Server
Once the dependencies are installed, you can start the development server:

Using npm:

npm run dev

After running the command, open http://localhost:3000 in your browser to see the app in action.

**Now you have to simultaneously run the app.py file in the terminal**
Make sure you are in the right directory were the app.py file is there
To do that make sure you have install this :

pip install flask

pip install Pillow

pip install numpy

Now run the app.py file :

python app.py

## Using the App
1. **Upload an Image:**

Click the "Upload Image" button to select a skin image from your device.

2. **Analyze the Image:**

The app will process the image using TensorFlow.js and display the predicted skin disease.

3. **View Results:**

The results will show the most likely skin disease (e.g., Eczema, Psoriasis, or Acne).

## Example Terminal Output
When you run the development server, you should see something like this in your terminal:

> skinlytic-ai@1.0.0 dev
> next dev

  ▲ Next.js 14.0.3
  - Local:        http://localhost:3000
  - Environments: .env.local
  - Ready in 2.1s

When you run the python file the output looks something like this:

C:\Users\KJCOEMR\Desktop\kk>python app.py
 * Serving Flask app 'app'
 * Debug mode: on
INFO:werkzeug:←[31m←[1mWARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.←[0m
 * Running on http://127.0.0.1:5000
INFO:werkzeug:←[33mPress CTRL+C to quit←[0m
INFO:werkzeug: * Restarting with stat
WARNING:werkzeug: * Debugger is active!
INFO:werkzeug: * Debugger PIN: 117-518-493


## Learn More
To learn more about the technologies used in this project, check out the following resources:

- Next.js Documentation - Learn about Next.js features and API.

- TensorFlow.js Documentation - Learn how to use TensorFlow.js for machine learning in the browser.

- Geist Font - The font family used in this project.

## Deploy on Vercel
The easiest way to deploy this Next.js app is to use the Vercel Platform from the creators of Next.js.

**Steps to Deploy:**
1. **Push your code to GitHub:**

Commit and push your changes to your GitHub repository.

2. **Deploy to Vercel:**

Go to Vercel and import your GitHub repository.

Follow the prompts to deploy your app.

3. **Access Your Live App:**

Once deployed, you can access your app at the provided Vercel URL.

## Live Demo
Check out the live demo of this project deployed on Vercel:
👉 https://skinlytic.vercel.app/  

## Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request or submit an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
