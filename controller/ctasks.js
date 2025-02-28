const Task = require('../model/task');
const getAllTasks = async (req, res) => {
    try {
        const task =- await Task.find({})
        res.send(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }
     catch (error) {
        res.status(500).json({msg: error});
    }}
const getTask = async (req, res) => {
    try {
        const {id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
       return res.status(404).json({msg: `No task with id: ${taskID}`})
    } 
    res.status(200).json({ task })
}  catch (error) {
    res.status(500).json({ msg: error })       
}
};
const updateTasks = (req, res) => {
    res.send('Update task');
};
const deleteTasks = (req, res) => {
    res.send('Delete task');
};




module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}