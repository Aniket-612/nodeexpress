const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

const landingRoutes = require('./routes/landingRoutes');
const deleteRoutes = require('./routes/deleteAccount');
const updateRoutes = require('./routes/updatePassword');
const registrationRoutes = require('./routes/registrationRoutes');



app.use('/', landingRoutes);
app.use('/', deleteRoutes);
app.use('/', updateRoutes);
app.use('/', registrationRoutes);

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});


 