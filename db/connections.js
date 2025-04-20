const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Aniket123",
    database: "nodeexpress"
});

// Optional: test connection with a simple query
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Connection failed:", err.message);
    } else {
        console.log("Connected to the database successfully");
        connection.release(); // release the connection back to the pool
    }
});

module.exports = pool;
