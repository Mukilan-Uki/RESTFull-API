import express from "express"
import { create, fetch } from "../controller/userController.js";

const router = express.Router();

// ✅ ADD THIS - Root route for GET /api/user
router.get("/", (req, res) => {
  res.json({ 
    message: "User API is working!",
    endpoints: [
      "GET /api/user - This page",
      "GET /api/user/fetch - Get all users",
      "POST /api/user/create - Create new user"
    ],
    instructions: "Use Postman or curl to test POST endpoints"
  });
});

// Your existing routes
router.get("/fetch", fetch);
router.post("/create", create);

export default router;