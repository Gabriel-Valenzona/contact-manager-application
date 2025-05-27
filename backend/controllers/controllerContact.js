//@desc Get all contacts
//@access public
//@route GET /api/contacts

const getContact = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

const createContact = (req, res) => {
    res.status(200).json({message: "Get all contacts"})
};

module.exports = {getContact};