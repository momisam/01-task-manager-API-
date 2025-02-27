const Task = require('../model/task');
const getAllTasks = (req, res) => {
    res.send('get all task');
};

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
        const 
        res.json({id:req.params.id});
    } catch (error) {
        
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