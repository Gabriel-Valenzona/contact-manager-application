const asyncHandler = require("express-async-handler");
//@desc Register a user
//@access public
//@route POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
    res.json( {message: "Register the user"});
});

//@desc Login user
//@access public
//@route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    res.json( {message: "Login the user"});
});

//@desc Current user info
//@access private
//@route POST /api/users/current
const currentUser = asyncHandler(async (req, res) => {
    res.json( {message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser};