const express = require('express')
const router = express.Router();


let users = [{ name: 'abc', email: 'abc@gmail.com' }];

// define the home page route
router.get('/', (req, res) => {
    res.send(users);
})



// define the about route
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.end(`Save Successfully :)`);
    console.log(users)
})

router.post("/login", (req, res) => {
    console.log(users)
    const { email, password } = req.body;
    console.log(email, password)
    let isValid = false;
    users.map((item) => {
        if ((item.email === email) && (item.password === password)) {
            isValid = true;
            // navigate("/Welcome")
            res.send("Valid Credentials")
        }
    })
    // if (!isValid) alert("Please Enter Valid Credentials");
    if (!isValid) res.send("Invalide Credentials");
})



module.exports = router;