// index.js

import app from "./app.js";

// Import environment variables
import dotenv from "dotenv";
dotenv.config();

// Get the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
