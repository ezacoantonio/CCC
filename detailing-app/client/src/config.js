// src/config.js

const isProd = process.env.NODE_ENV === "production";

const BASE_URL = isProd
  ? "https://your-backend-app.onrender.com" // Replace with your actual Render URL
  : "http://127.0.0.1:5000"; // Localhost for development

export default BASE_URL;
