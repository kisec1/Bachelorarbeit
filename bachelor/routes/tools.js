const express = require('express');
const router = express.Router();
const passport = require('passport');
const Tool = require('../models/tool');

/*
Get all tools from specific User
Example:    <hospitooldomain>/devices/tools/<username>
 */
router.get('/:username', passport.authenticate('jwt', {session: false }),
    function(req, res) {
        console.log(req.params.username); // debugging
        userName = req.params.username;
        Tool.getToolsByUserName(userName, (err, data) => {
            if(err){
                res.json({msg: "Something went wrong: "+ err});
            }
            else{
                //res.json({device: data});
                res.json(data);
            }
        });
    }
);

/*
Add new Tool to DB
(post) -> http://localhost:3000/tools/add
 */

router.post('/add', passport.authenticate('jwt', {session: false }),
    function(req,res) {
    console.log(req.body.userName+" "+ req.body.id+" "+req.body.description)
    let newTool = new Tool({
        userName: req.body.userName,
        id: req.body.id,
        description: req.body.description,
    });

    Tool.addTool(newTool, (err, tool) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register new Tool'});
        }
        else {
            res.json({success: true, msg: 'Tool was Successfully added' + tool});
        }
    });
});

router.delete('/:id', passport.authenticate('jwt', {session: false }),
    function(req,res) {
        id = req.params.id;
        console.log(id) //debugging
        Tool.deleteTool(id, (err, tool) => {
            if (err) {
                res.json({success: false, msg: 'Failed to remove Tool'});
            }
            else {
                res.json({success: true, msg: 'Tool was Successfully removed'});
            }
        });
    });

module.exports = router;