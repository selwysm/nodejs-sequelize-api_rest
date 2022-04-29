import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./tasks.js";

export const Project = sequelize.define(
  "project",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    priority: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
  },
  { timestamp: true }
);

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
