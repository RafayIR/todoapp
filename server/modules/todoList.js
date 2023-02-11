const express = require('express')
const jwt = require('jsonwebtoken');
const todoRouter = express.Router();
const redis = require('../redis')


todoRouter.use((req, res, next) => {
    console.log("ToDo middle ware");

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next();
    })
});

todoRouter.post('/add', async (req, res) => {
    const { item } = req.body;
    // obj[req.user.username]=item;
    // list.push({item})

    let userToDoArr = []
    try {
        userToDoArr = await redis.hget("userTable", req.user.email);
        const userToDoObj = JSON.parse(userToDoArr)

        userToDoObj.todo.push(item);
        redis.hset("userTable", req.user.email, JSON.stringify(userToDoObj));

        res.send(userToDoObj.todo)
    } catch (e) {

    }


})

todoRouter.get("/", async (req, res) => {
    try {
        const userToDoArr = await redis.hget("userTable", req.user.email);
        const userToDoObj = JSON.parse(userToDoArr)
        res.send(userToDoObj.todo);
    } catch (e) {
        res.send([]);
    }
})

// delete Todo
// todoRouter.delete('/', async (req, res) => {
//     const { item } = req.body;

//     let userToDoArr = []
//     try {
//         userToDoArr = await redis.hget("userTable", req.user.email);
//         const userToDoObj = JSON.parse(userToDoArr)

//         const deleteIndex = userToDoObj.todo.indexOf(item);;
//         userToDoObj.todo.splice(deleteIndex, 1);
//         redis.hset("userTable", req.user.email, JSON.stringify(userToDoObj));

//         res.send(userToDoObj.todo)
//     } catch (e) {

//     }
// })


module.exports = todoRouter;
