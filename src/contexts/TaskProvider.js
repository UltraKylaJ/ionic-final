import axios from "axios";
import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";

export const TaskProvider = (props) => {

    const [ task, setTask ] = useState([]);

    const baseUrl = "http://localhost:3000/api/tasks/";

    useEffect(() => {
        async function fetchData() {
            await getAllTasks();
        }
        fetchData();
    }, []);

    async function getAllTasks() {
        return axios.get(baseUrl).then(response => setTask(response.data));
    }

    async function addTask(task) {
        return axios.post(baseUrl, task).then(response => {
            getAllTasks();
            return new Promise(resolve => resolve(response.data));
        });
    }

    async function editTask(id) {
        let url = baseUrl + `${task._id}`;
        
        return axios.put(url, id).then(response => {
            getAllTasks();
            return new Promise(resolve => resolve(response.data));
        });
    }

    async function deleteTask(id) {
        let url = baseUrl + `${task._id}`;

        return axios.delete(url, id).then(response => {
            getAllTasks();
        })
    }

    return (
        <TaskContext.Provider value={{
            task,
            getAllTasks,
            addTask,
            editTask,
            deleteTask
        }}>
            { props.children }
        </TaskContext.Provider>
    )
}