const express = require('express');
const Users = require('../model/dbcalls');
const path = require('path');

const router = express.Router();

// Landing page
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

// Registration page
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



//Delete Account page
router.get('/deleteAccount',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pages/deleteAccount.html'));
})
router.post('/deleteAccount',async (req,res)=>{
    const {username,password}=req.body;

    try{
        const result = await Users.deleteAccount(username,password);
        if(result){
            console.log("Deleted Successfully");
            res.sendFile(path.join(__dirname,'../pages/register.html'));
        }else{
            return res.send("Error while deleting");
        }
    }catch(err){
        console.log(err.message);

        // res.send(500).send("Error while deleting");
    }
});

//update password

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
