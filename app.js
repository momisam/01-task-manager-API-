const express = require('express');
const app = express();
const routes = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/', (req,res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', routes);
//app.get('api/v1/tasks')   - get all task
//app.post('api/v1/tasks')  - create a new task
//app.get('api/v1/tasks/:id') - get single task
//app.patch('api/v1/tasks/:id') - update task
//app.delete('api/v1/tasks/:id') - delete task





const port = 3000;


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    
});



