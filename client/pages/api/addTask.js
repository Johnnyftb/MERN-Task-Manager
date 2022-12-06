import axios from 'axios';

const addTask = async (req, res) => {
    try {
        const newTask = req.body;
        const task = await axios.post("http://localhost:5000", newTask);
        res.status(200).json(task.data);
    } catch (error) {
        console.log(error);
    }
}

export default addTask;