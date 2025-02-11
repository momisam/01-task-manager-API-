const express = require('express');
const router = express.Router();
const {getAllTasks,createTasks,getTask,updateTasks, deleteTasks } = require('../controller/ctasks');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks);


//app.get('api/v1/tasks')   - get all task
//app.post('api/v1/tasks')  - create a new task
//app.get('api/v1/tasks/:id') - get single task
//app.patch('api/v1/tasks/:id') - update task
//app.delete('api/v1/tasks/:id') - delete task






module.exports = router;