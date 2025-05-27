const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

app.get('/', (req,res) => {
    res.send();
});

app.use("/api/contacts", require("./routes/contactRoutes"));


app.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}!`);
});

console.log("booby");