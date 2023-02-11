const userRouter = require('../modules/user')
const express = require('express');
const userTodo = require('../modules/todoList');
const routes = express.Router();

routes.use((req, res, next) => {
    console.log("next middle ware");
    next();
});

routes.get('/', (req, res) => {
    res.send("Happy");
})

routes.use('/users', userRouter)
routes.use('/todo' , userTodo)


// app.post('/', function (req, res) {
//     console.log(req.body);
//     res.end("Congrate..")
// })

// app.get('/', (req, res)=>{

//     res.end(`Users ${JSON.stringify(users)}`)
// })



module.exports = routes;