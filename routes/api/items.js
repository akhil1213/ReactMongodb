const express = require('express');
//const bodyParser = require("body-parser");//You need to use bodyParser() if you 
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
//@desc Get all items
// @access public

router.get("/", (req,res) => {
    Item.find()
        .sort({ date: -1})//sort by date
        .then(items => res.json(items));
});

// @route POST api/items
//@desc Create a post
// @access public

router.post("/", (req,res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
})

// @route POST api/items
//@desc Create a post
// @access public

router.delete("/:id", (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success:true})));
    newItem.save().then(item => res.json(item))
    .catch(err => res.status(404).json({success:false}));;
})//if user gives wrong id we catch error

module.exports = router;//no other file will be able to read whats in here without this

