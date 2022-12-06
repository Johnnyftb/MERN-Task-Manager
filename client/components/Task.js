import React from 'react'
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

const Task = ({ task, setTasks }) => {

    const completeTask = async (id) => {
        const response = await fetch(`http://localhost:3000/api/completeTask?${new URLSearchParams({ id })}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: true})
        });
        const tasks = await response.json();
        setTasks(tasks);
    }

    const deleteTask = async (id) => {
        const response = await fetch(`http://localhost:3000/api/deleteTask?${new URLSearchParams({ id })}`)
        const tasksData = await response.json();
        setTasks(tasksData);
    }

    return (
        <div className="w-full bg-dark text-white rounded-lg shadow-sm flex justify-between items-center p-2 mb-2">
            <p className={`w-[80%] ${task.completed && 'line-through'}`}>{task.task}</p>
            <div className="flex items-center justify-center">
                {!task.completed && <FaCheck className="text-green-700 mx-2 cursor-pointer" onClick={() => completeTask(task._id)}/>}
                <FaTrashAlt className="text-red-700 mx-2 cursor-pointer" onClick={() => deleteTask(task._id)}/>
            </div>
        </div>
    )
}

export default Task