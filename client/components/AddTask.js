import React from 'react'

const AddTask = ({ setTasks }) => {

    const [newTask, setNewTask] = React.useState();

    const addNewTask = async () => {
        const response = await fetch("/api/addTask", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({task: newTask})
        })
        const newTaskData = await response.json();
        setTasks(prev => {
            return [
                ...prev,
                newTaskData
            ]
        })
        setNewTask("");
    }

    return (
        <div className="w-full flex items-center justify-around">
            <input type="text" className="w-[80%] bg-light rounded border border-gray p-1" placeholder="Add Task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button className="bg-dark text-white px-2 py-1 rounded-lg shadow-lg w-auto" onClick={() => addNewTask()}>Add Task</button>
        </div>
    )
}

export default AddTask