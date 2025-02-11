const getAllTasks = (req, res) => {
    res.send('get all task');
};

const createTasks = (req, res) => {
    res.json(req.body);
};
const getTask = (req, res) => {
    res.json({id:req.params.id});
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