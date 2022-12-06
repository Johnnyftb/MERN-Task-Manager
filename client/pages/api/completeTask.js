import axios from 'axios';

const completeTask = async (req, res) => {
    try {
        const { id } = req.query;
        const updatedTask = req.body;
        const tasks = await axios.patch(`http://localhost:5000/${id}`, updatedTask);
        res.status(200).json(tasks.data);
    } catch (error) {
        console.log(error);
    }
}

export default completeTask;