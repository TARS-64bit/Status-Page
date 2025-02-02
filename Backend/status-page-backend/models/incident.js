import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Service from "./service.js";

const Incident = sequelize.define("Incident", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  serviceId: { type: DataTypes.INTEGER, allowNull: false },
  incidentName: { type: DataTypes.STRING, allowNull: false }, // Incident name
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: "open" }, // Incident status (open, in-progress, resolved)
  message: { type: DataTypes.TEXT, allowNull: false }, // Incident message
  userId: { type: DataTypes.INTEGER, allowNull: false }, // User ID to associate the incident with a specific user
});

Service.hasMany(Incident, { foreignKey: "serviceId" });
Incident.belongsTo(Service, { foreignKey: "serviceId" });

export default Incident;
