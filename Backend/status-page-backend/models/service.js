import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Service = sequelize.define("Service", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // Use TEXT if descriptions might be long
    allowNull: true, // Allow null values if the description is optional
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "operational", // Default status
    validate: {
      isIn: {
        args: [["active", "inactive", "operational"]], // Allowed statuses
        msg: "Status must be one of 'active', 'inactive', or 'operational'",
      },
    },
  },
});

export default Service;
