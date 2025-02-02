import express from "express";
import Service from "../models/service.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.findAll({
      attributes: ["id", "name", "status", "description"],
    });

    if (services.length === 0) {
      return res.status(404).json({ message: "No services found" });
    }

    res.json({ success: true, data: services });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching services" });
  }
});

// POST a new service (status is not required from frontend)
router.post("/", authMiddleware, async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const existingService = await Service.findOne({ where: { name } });
    if (existingService) {
      return res.status(409).json({ message: "Service with this name already exists" });
    }

    // Create the service with default status "operational"
    const service = await Service.create({ name, description, status: "operational" });
    res.status(201).json({ success: true, data: service });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating service" });
  }
});

// PATCH (update) a service's status
router.patch("/:id/status", authMiddleware, async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  const validStatuses = ["active", "inactive", "operational"];
  if (!validStatuses.includes(status)) {
    return res
      .status(400)
      .json({ message: "Invalid status. Allowed values are 'active', 'inactive', or 'operational'" });
  }

  try {
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.update({ status });
    res.json({ success: true, message: "Service status updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating service status" });
  }
});

// DELETE a service by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.destroy();
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting service" });
  }
});

export default router;
