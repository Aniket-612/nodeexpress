const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/appRoutes');
app.use('/', authRoutes);

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});


 