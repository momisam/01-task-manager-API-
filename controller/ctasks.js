const getAllTasks = (req, res) => {
    res.send('all items from the file');
};

const createTasks = (req, res) => {
    res.send('Create task');
};
const getTask = (req, res) => {
    res.send('get A single task');
};
const updateTasks = (req, res) => {
    res.send('Update A single task');
};
const deleteTasks = (req, res) => {
    res.send('Delete A single task');
};




module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}