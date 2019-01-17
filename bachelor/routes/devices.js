const express = require('express');
const router = express.Router();
const passport = require('passport');
const Device = require('../models/device');



/*
Get all devices from a client by his clientId
Example:
<hospitooldomain>/devices/client/<clientId>
 */
router.get('/client/:clientId', passport.authenticate('jwt', {session: false }),
    function(req, res) {
        console.log(req.params.clientId); // debugging
        clientId = req.params.clientId;
        Device.getAllByClientId(clientId, (err, data) => {
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
// Get specific client by id
router.get('/id', passport.authenticate('jwt', {session: false }),
    function(req, res) {
        console.log(req.body.id);
        device = Device.getDeviceById(req.body.id, (err, data) => {
            if(err) {
                res.json({msg: "No matching device_id"});
            }
            else{
                res.json({device: data});
            }
        });
    }
);
*/

module.exports = router;