import axios from "axios";
import TaskContext from "./TaskContext";

export const TaskProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/tasks/";

    // useEffect

    function getAllTasks() {
        // 
    }

    function addTask() {
        // 
    }

    function editTask(id) {
        // 
    }

    function deleteTask() {
        // 
    }

    return (
        <TaskContext.Provider value={{
            getAllTasks,
            addTask,
            editTask,
            deleteTask
        }}>
            { props.children }
        </TaskContext.Provider>
    )
}