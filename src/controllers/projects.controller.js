import { Project } from "../models/projects.js";
import { Task } from "../models/tasks.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (err) {
    return res.status(401).jason({ message: " not result" });
  }
};

export const getByIdProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByPk(id);
    res.status(200).json(project);
    if (!project) {
      return res.status(401).jason({ message: "project not found" });
    }
  } catch (err) {
    return res.status(404).json({ message: " found not result" });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name: name,
      priority: priority,
      description: description,
    });
    res.status(200).json(newProject);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();
    res.status(200).json({ massage: " project update" });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({ where: { id: id } });
    res.status(200).json({ message: "project deleted successfully" });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

export const getProjectTask = async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Task.findAll({ where: { projectId: id } });
    res.status(200).json(tasks);
  } catch (err) {
    return res.status(404).json({ message: "found not result" });
  }
};
