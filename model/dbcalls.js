const pool = require('../db/connections');

// Register function
async function registerUser(fullname, username, email, password, callback) {
    const insert = 'INSERT INTO users (fullname, username, email, password) VALUES (?, ?, ?, ?)';
    const [result] = await pool.query(insert, [fullname, username, email, password]);

    return result;
}

// Login function
async function selectUser(username, password, callback) {
    const select = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const [result] = await pool.query(select, [username, password]);
    return result;
}

async function deleteAccount(username,password,callback){
    const deleteAcc ='delete from users where username=? && password=?';
    const [result] = await pool.query(deleteAcc,[username,password]);

    return result;

}

async function updatePassword(username,newpassword){
    const updatepassword = 'update users set password=? where username=?';

    const [result] = await pool.query(updatepassword,[newpassword,username]);
    // const [result] = await pool.query("UPDATE users SET password = ? WHERE username = ?",[newpassword, username]);
    return result;
}

// 🔥 Export properly
module.exports = {
    registerUser,
    selectUser,
    deleteAccount,
    updatePassword
};
