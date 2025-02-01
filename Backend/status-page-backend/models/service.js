import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Service = sequelize.define("Service", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: "operational" },
});

export default Service;
