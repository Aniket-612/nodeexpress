const express = require('express');
const Users = require('../model/dbcalls');
const path = require('path');

const router = express.Router();




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

module.exports = router;