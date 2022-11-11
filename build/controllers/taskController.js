"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.editTask = exports.addTask = exports.getAllTasks = void 0;
const task_1 = require("../models/task");
const getAllTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let taskList = yield task_1.Task.find();
    res.status(200).json(taskList);
});
exports.getAllTasks = getAllTasks;
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = new task_1.Task({
        title: req.body.title
    });
    try {
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.addTask = addTask;
const editTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let bool = req.params.completed;
    const toggle = yield task_1.Task.updateOne({ _id: taskId }, { completed: !bool });
    res.status(200).json(toggle);
});
exports.editTask = editTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let result = yield task_1.Task.findByIdAndDelete(taskId);
    res.status(200).json(result);
});
exports.deleteTask = deleteTask;
