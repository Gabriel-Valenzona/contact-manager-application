//@desc Get all contacts
//@access public
//@route GET /api/contacts

const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

//@desc Get individual contact
//@access public
//@route GET /api/contacts/:id
const getContact = (req,res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Create a contacts
//@access public
//@route POST /api/contacts
const createContact = (req,res) => {
    console.log("The request body is", req.body)
    const { name, email, phone } = req.body; // object destructuring 
    res.status(200).json({message: "Create contact"});
};

//@desc Update a contact
//@access public
//@route PUT /api/contacts/id
const updateContact = (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`}); // access id (can be anything) using req.params.{insert id}
};

//@desc Delete a contact
//@access public
//@route DELETE /api/contacts
const deleteContact = (req,res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
};


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};