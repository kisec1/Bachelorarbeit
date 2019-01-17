const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Client = require('../models/client');

// Get all Clients
router.get('/all', passport.authenticate('jwt', {session: false }),
    function(req, res) {
        date = new Date();
        console.log(date+" Checkd all!!");
        Client.getAll( (err, data) => {
            if(err){
                res.json({msg: "Something went wrong"});
            }
            else{
                res.json({clients: data});
            }
        });
    }
);

/*
// Get specific client by id
router.get('/id', passport.authenticate('jwt', {session: false }),
    function(req, res) {
    console.log(req.body.id)
        client = Client.getClientById(req.body.id, (err, data) => {
            if(err) {
                res.json({msg: "No matching client_id"});
            }
            else{
                res.json({client: data});
            }
        });
    }
);
*/

module.exports = router;