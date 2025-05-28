const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");


connectDb(); //call and connect to DB first thing before anything else

app.get('/', (req,res) => {
    res.send();
});
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}!`);
});

console.log("booby");