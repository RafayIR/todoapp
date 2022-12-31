const userRouter = require('../modules/user')


const express = require('express');
const router = require('../modules/user');
const userTodo = require('../modules/todoList');
const { route } = require('express/lib/router');
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

routes.get('')


// app.post('/', function (req, res) {
//     console.log(req.body);
//     res.end("Congrate..")
// })

// app.get('/', (req, res)=>{

//     res.end(`Users ${JSON.stringify(users)}`)
// })



module.exports = routes;