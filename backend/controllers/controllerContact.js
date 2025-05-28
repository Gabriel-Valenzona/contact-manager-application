// express-async-handler is an npm package that lets you use async/await in Express routes
// without needing try/catch in every handler. It catches errors in async functions
// and passes them to Express's error handling middleware automatically.
const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@access public
//@route GET /api/contacts

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all contacts"});
});

//@desc Get individual contact
//@access public
//@route GET /api/contacts/:id
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

//@desc Create a contacts
//@access public
//@route POST /api/contacts
const createContact = asyncHandler(async (req,res) => {
    console.log("The request body is", req.body)
    const { name, email, phone } = req.body; // object destructuring 
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");     
    }   
    res.status(201).json({message: "Create contact"});
});

//@desc Update a contact
//@access public
//@route PUT /api/contacts/id
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`}); // access id (can be anything) using req.params.{insert id}
});

//@desc Delete a contact
//@access public
//@route DELETE /api/contacts
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};