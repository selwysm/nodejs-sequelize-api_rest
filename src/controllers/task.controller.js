import { Task } from "../models/tasks.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ message: "not result" });
  }
};
export const getByIdTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    res.status(200).json(task);
    if (!task) {
      res.status(404).json({ message: " not result" });
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
export const createTask = async (req, res) => {
  const { name, projectId } = req.body;

  try {
    const newTasks = await Task.create({
      name: name,
      done: false,
      projectId: projectId,
    });
    res.status(200).json(newTasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    task.set(req.body);
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({ where: { id: id } });
    res.status(200).json({ message: "tasks delete successfully" });
  } catch {
    err;
  }
  {
    return res.status(500).json({ message: err.message });
  }
};
