// src/config.js

const isProd = process.env.NODE_ENV === "production";

const BASE_URL = isProd
  ? "https://ccc-backend-xlsw.onrender.com" // Replace with your actual Render URL
  : "https://ccc-backend-xlsw.onrender.com"; // Localhost for development

export default BASE_URL;
