const express = require('express');
const Users = require('../model/dbcalls');
const path = require('path');

const router = express.Router();


router.post('/updatepassword', async (req, res) => {
    const { username, newpassword } = req.body;

    try {
        const result = await Users.updatePassword(username, newpassword);
        if (result) {
            res.send(`New password is ${newpassword}`);
        } else {
            res.send("There was some error setting password");
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error while updating password");
    }
});

module.exports = router;

