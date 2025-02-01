import express from "express";
import Incident from "../models/incident.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const incidents = await Incident.findAll();
  res.json(incidents);
});

router.post("/", authMiddleware, async (req, res) => {
  const { serviceId, description } = req.body;
  const incident = await Incident.create({ serviceId, description });
  res.json(incident);
});

export default router;
