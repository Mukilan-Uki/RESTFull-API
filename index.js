import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());

app.use("/api/user", userRoute);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    available: ["/", "/health", "/api/user", "/api/user/fetch"]
  });
});

// Start server
mongoose.connect(MONGOURL).then(() => {
  console.log("✅ Database Connected Successfully");
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
    console.log(` Open: http://localhost:${PORT}`);
    console.log("\n Available endpoints:");
    console.log(`   http://localhost:${PORT}/`);
    console.log(`   http://localhost:${PORT}/health`);
    console.log(`   http://localhost:${PORT}/api/user`);
    console.log(`   http://localhost:${PORT}/api/user/fetch`);
  });
}).catch((error) => {
  console.log(` Database Connection Failed: ${error}`);
});