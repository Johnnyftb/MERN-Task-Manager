import axios from 'axios';

const getTasks = async (req, res) => {
    try {
        const tasks = await axios.get("http://localhost:5000");
        res.status(200).json(tasks.data);
    } catch (error) {
        console.log(error);
    }
}

export default getTasks;