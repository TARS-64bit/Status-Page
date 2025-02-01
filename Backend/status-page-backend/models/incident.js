import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Service from "./service.js";

const Incident = sequelize.define("Incident", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  serviceId: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  resolved: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Service.hasMany(Incident, { foreignKey: "serviceId" });
Incident.belongsTo(Service, { foreignKey: "serviceId" });

export default Incident;
