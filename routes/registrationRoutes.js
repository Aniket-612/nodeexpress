const express = require('express');
const Users = require('../model/dbcalls');
const path = require('path');

const router = express.Router();

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/register.html'));
});

// Handle registration
router.post('/register', async (req, res) => {
    const { fullname, username, email, password } = req.body;

    try{
        const result =await Users.registerUser(fullname, username, email, password);

        if (result) {
            console.log("1 row inserted");
            res.send(`
                <script>
                    alert("Registration successful!");
                    window.location.href = "/";
                </script>
            `);
        } else {
            res.send("Error in data insertion");
        }
    }catch(err){
        console.error(err.message);
        res.status(500).send("Error while registration");
    }
});

module.exports = router;