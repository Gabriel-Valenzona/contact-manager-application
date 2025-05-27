const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/controllerContact.js")

router.route('/').get((req,res) => {
    res.status(200).json({message: "Get all contacts"});
});

// get for individual contacts
router.route('/:id').get((req,res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});
 
router.route('/').post((req,res) => {
    res.status(200).json({message: "Create contact"});
});

router.route('/:id').put((req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`}); // access id (can be anything) using req.params.{insert id}
});

router.route('/:id').delete((req,res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});

module.exports = router;