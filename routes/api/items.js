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

// @route DELETE api/items
//@desc Delete a post
// @access public
router.delete("/:id", (req,res) => {
    Item.findByIdAndRemove({ _id:req.params.id }, (err,data) => {
        console.log(err);
    })
})//if user gives wrong id we catch error

// @route update api/items
//@desc update a post
// @access public
router.put("/:id", (req,res) => {
    const newItem = new Item({
        name: req.body.name
    });
    Item.findByIdAndUpdate({_id: req.params.id}, {$set: {name:req.body.name}}, (err) => {
        if (err) return res.json({ success: false, error: err });//using postman 
        return res.json({ success: true });//used postman to check if current route worked properly
    });
})//if user gives wrong id we catch error
module.exports = router;//no other file will be able to read whats in here without this

