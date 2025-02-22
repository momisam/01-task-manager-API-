const express = require('express');
const routes = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();


//middleware
app.use(express.json());

//routes
app.get('/', (req,res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', routes);



const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)  
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}.............`);
            
        });
    } catch (error) {
        console.log(error);
        
    }
};

start();


