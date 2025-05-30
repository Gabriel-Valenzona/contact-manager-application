// express-async-handler is an npm package that lets you use async/await in Express routes
// without needing try/catch in every handler. It catches errors in async functions
// and passes them to Express's error handling middleware automatically.
const asyncHandler = require('express-async-handler');
// import model mongoose
const Contact = require('../models/contactModel.js');
const contactModel = require('../models/contactModel.js');

//@desc Get all contacts
//@access public
//@route GET /api/contacts
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Get individual contact
//@access public
//@route GET /api/contacts/:id
const getContact = asyncHandler(async (req,res) => {
    const contact = await contactModel.findById(req.params.id);

    if (!contact){
        res.status(404);
        throw new Error ("Contact not found");
    }
    res.status(200).json(contact);
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

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    
    res.status(201).json({contact});
});

//@desc Update a contact
//@access public
//@route PUT /api/contacts/id
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(contact); // access id (can be anything) using req.params.{insert id}
});

//@desc Delete a contact
//@access public
//@route DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.deleteOne();
    res.status(200).json(contact);
});


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};