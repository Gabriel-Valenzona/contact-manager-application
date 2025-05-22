const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

app.get('/', (req,res) => {
    res.send();
});

app.get('/api/contacts', (req,res) => {
    res.json({message: "Get all contacts"});
});


app.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}!`);
});

console.log("booby");