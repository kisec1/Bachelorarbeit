const express = require('express');
const router = express.Router();
const passport = require('passport');
const TestProcedures = require('../models/testProcedure');

/*
Get the testprocedure of a specific device (model)
Example:
<hospitooldomain>/testprocedures/model/<model>
 http://localhost:3000/testprocedures/model/Pari TurboBoy S
 */
router.get('/model/:model', passport.authenticate('jwt', {session: false }),
    function(req, res) {
        console.log(req.params.model); // debugging
        model = req.params.model;
        TestProcedures.getTestProcedureByModel(model, (err, data) => {
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
// Get all Clients
router.get('/all', passport.authenticate('jwt', {session: false }),
    function(req, res) {
        date = new Date();
        console.log(date+" Checkd all testprocedures");
        TestProcedures.getAll( (err, data) => {
            if(err){
                res.json({msg: "Something went wrong"});
            }
            else{
                res.json(data);
            }
        });
    }
);
*/
module.exports = router;