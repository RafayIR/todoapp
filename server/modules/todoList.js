const express = require('express')
const todoRouter = express.Router();


let list = [];


todoRouter.post('/', (req, res)=>{
    const {item} = req.body;
    res.send("Todo Item added")
    list.push(item)
    console.log("List==>", list)
})

todoRouter.get( '/', (req , res) => {
    res.send(list);
})



module.exports = todoRouter;
