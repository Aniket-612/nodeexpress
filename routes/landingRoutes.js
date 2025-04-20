const express = require('express');
const Users = require('../model/dbcalls');
const path = require('path');

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/landing.html'));
});


// Handle login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try{
        const result= await Users.selectUser(username, password);

        if (result.length > 0) {
            res.sendFile(path.join(__dirname, '../pages/dashboard.html'));
        } else {
            res.send("Username or password incorrect");
        }
    }catch(err){
        console.error(err.message);
        res.send(500).send("Error while login");
    }

});

