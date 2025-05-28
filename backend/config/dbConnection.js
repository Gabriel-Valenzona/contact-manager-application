const mongoose = require("mongoose");

const connectDb = () => {
    try{
        
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;