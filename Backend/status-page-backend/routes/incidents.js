import express from "express";
import Incident from "../models/incident.js";
import Service from "../models/service.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all incidents or filter by status (optional) with pagination
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.userId; // Get the userId from the token
  const { status, page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const incidents = status
      ? await Incident.findAll({ where: { userId, status }, limit, offset })
      : await Incident.findAll({ where: { userId }, limit, offset });

    if (incidents.length === 0) {
      return res.status(404).json({ message: "No incidents found" });
    }

    res.json({ success: true, data: incidents });
  } catch (err) {
    res.status(500).json({ message: "Error fetching incidents" });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const { serviceId, incidentName, status, message } = req.body;
  const userId = req.user.userId; // Access userId from the token

  // Check if all required fields are present
  if (!incidentName || !status || !message || !serviceId) {
    return res.status(400).json({ message: "incidentName, status, message, and serviceId are required" });
  }

  // Check if status is valid
  const validStatuses = ["active", "inactive", "operational"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    // Check if the serviceId exists in the database
    const serviceExists = await Service.findOne({ where: { id: serviceId } });
    if (!serviceExists) {
      return res.status(400).json({ message: "Service not found" });
    }

    // Check if the message is not empty or just spaces
    if (!message.trim()) {
      return res.status(400).json({ message: "Message cannot be empty or just spaces" });
    }

    // Create the new incident
    const incident = await Incident.create({
      serviceId,
      incidentName,
      status,
      message,
      userId, // Associate the incident with the logged-in user
    });

    res.status(201).json({ success: true, data: incident });
  } catch (err) {
    // Handle database or other unexpected errors
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: "Error creating incident, please try again later" });
  }
});


export default router;
