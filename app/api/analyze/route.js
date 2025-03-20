import axios from "axios";

export async function POST(req) {
  try {
    const { image } = await req.json();

    // Send image to Flask API
    const response = await axios.post("http://localhost:5000/analyze", { image });

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Analysis failed" }), { status: 500 });
  }
}
