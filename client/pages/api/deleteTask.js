import axios from 'axios';

const deleteTask = async (req, res) => {
    try {
        const { id } = req.query;
        const tasks = await axios.delete(`http://localhost:5000/${id}`);
        res.status(200).json(tasks.data);
    } catch (error) {
        console.log(error);
    }
}

export default deleteTask;