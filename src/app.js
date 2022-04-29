import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/task.routes.js";
// initialize
const app = express();

// middlewares:
app.use(express.json());

// routes:
app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;
