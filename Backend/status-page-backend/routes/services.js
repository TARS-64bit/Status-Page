import express from "express";
import Service from "../models/service.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const services = await Service.findAll();
  res.json(services);
});

router.post("/", authMiddleware, async (req, res) => {
  const { name, status } = req.body;
  const service = await Service.create({ name, status });
  res.json(service);
});

router.patch("/:id/status", authMiddleware, async (req, res) => {
  const { status } = req.body;
  await Service.update({ status }, { where: { id: req.params.id } });
  res.json({ message: "Service status updated" });
});

export default router;
