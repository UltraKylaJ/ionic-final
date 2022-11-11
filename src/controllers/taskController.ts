import { RequestHandler } from "express";
import { ITask, Task } from "../models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
    let taskList = await Task.find();
    res.status(200).json(taskList);
}

export const addTask: RequestHandler = async (req, res, next) => {
    const newTask: ITask = new Task({
        title: req.body.title
    });

    try {
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export const editTask: RequestHandler = async (req, res, next) => {
    let taskId = req.params.id;
    let bool = req.params.completed

    const toggle = await Task.updateOne({ _id: taskId }, { completed: !bool })

    res.status(200).json(toggle);
}

export const deleteTask: RequestHandler = async (req, res, next) => {
    let taskId = req.params.id;

    let result = await Task.findByIdAndDelete(taskId);

    res.status(200).json(result);
}