const express = require('express')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const router = express.Router();
const redis = require('../redis')

// get config vars
dotenv.config();



let users = [{ name: 'abc', email: 'abc@gmail.com' }];






// define the about route
router.post('/register', (req, res) => {
    const { email, password, username, name } = req.body;
    
    let userData = {
        username, name, email, password, todo:[]
    };
    redis.hset("userTable", email, JSON.stringify(userData));
    
    res.end(`Save Successfully :)`);
    console.log(userData)
})

router.post("/login", async (req, res) => {
    console.log(users)
    const { email, password } = req.body;
    console.log(email, password)
    let isValid = false;
    // users.map((item) => {
    //     if ((item.email === email) && (item.password === password)) {
    //         isValid = true;
    //         const token = generateAccessToken({ email: req.body.email });
    //         res.send(token);
    //     }
    // })
    // if (!isValid) res.sendStatus(404);

    const userdataStr = await redis.hget("userTable", email)
    console.log(userdataStr);
    const userdataObj = JSON.parse(userdataStr );

    if(userdataObj.password === password){
        isValid = true;
        const token = generateAccessToken({ email: req.body.email });
        res.send(token);
    }
    if (!isValid) res.sendStatus(404);
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {

}

module.exports = router;