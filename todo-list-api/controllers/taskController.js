
let tasks = [];
let nextTaskId = 1;

const Task = require('../models/task.model');

const getAllTasks = (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 5; 

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const tasksPage = tasks.slice(startIndex, endIndex);

        res.status(200).json({
            page: page,
            limit: limit,
            total: tasks.length,
            tasks: tasksPage
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const getTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const task = tasks.find(task => task.id === id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createTask = (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.body)
        if (!title || !description) {
            console.log('Title and description are required fields.');
        }
        const newTask = new Task(nextTaskId++, title, description);
        tasks.push(newTask);
        res.status(201).json({message: 'Task created successfully', newTask });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, description } = req.body;
        let taskUpdated = false;
        tasks = tasks.map(task => {
            if (task.id === id) {
                task.title = title;
                task.description = description;
                taskUpdated = true;
            }
            return task;
        });
        if (taskUpdated) {
            res.status(200).json({ message: 'Task updated successfully' , taskUpdated });
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const initialLength = tasks.length;
        tasks = tasks.filter(task => task.id !== id);
        if (tasks.length < initialLength) {
            res.status(200).json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById
};
