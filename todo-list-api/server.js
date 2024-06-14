
const express = require('express');
const bodyParser = require('body-parser');
const TaskRouter = require('./routes/taskRoute');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/home',(req,res)=> {
    res.send('welcome to todolist')
})

app.use('/tasks', TaskRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
