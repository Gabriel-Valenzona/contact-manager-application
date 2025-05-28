const {constants} = require("../constants.js")

const errorHandler = (err, req, res, next) => { // function with 4 arguments gets treated as an error handler
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Not Found", message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND: 
            res.json({
                title: "Validation Failed", message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED: 
            res.json({
                title: "Unathorized", message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN: 
            res.json({
                title: "Forbidden", message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR: 
            res.json({
                title: "Server error", message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No error, all g here!");
            break;
                
    }
};

module.exports = errorHandler;
