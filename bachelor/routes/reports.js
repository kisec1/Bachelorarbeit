const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Report = require('../models/report');


// Get all Reports
router.get('/all', passport.authenticate('jwt', {session: false}),
    function (req, res) {
        Report.getAll((err, data) => {
            if (err) {
                res.json({msg: "Something went wrong"});
            } else {
                res.json({report: data});
            }
        });
    }
);

router.get('/unfinished', passport.authenticate('jwt', {session: false}),
    function (req, res) {
        Report.getUnfinished((err, data) => {
            if (err) {
                res.json({msg: "Something went wrong"});
            } else {
                res.json(data);
            }
        });
    }
);


router.get('/id/:id', passport.authenticate('jwt', {session: false}),
    function (req, res) {
        id = req.params.id;
        Report.getReportById(id, (err, data) => {
            if (err) {
                res.json({msg: "Something went wrong: " + err});
            } else {
                res.json(data);
            }
        });
    }
);


router.post('/', (req, res, next) => {
    let newReport = new Report({
        spareParts: req.body.spareParts,
        work: req.body.work,
        state: req.body.state,
        technician: req.body.technician,
        client: req.body.client,
        device: req.body.device,
        testProcedure: req.body.testProcedure,
        tools: req.body.tools,
        comment: req.body.comment,
        corrections: req.body.corrections,
        serviceKit: req.body.serviceKit,
        date: req.body.date
    });

    if (req.body._id) {
        newReport._id = req.body._id;
        Report.updateReport(newReport, (err, report) => {
            if (err) {
                res.json({success: false, msg: 'Failed to upload Report'});
            } else {
                res.json({success: true, msg: 'Report added'});
            }

        });
    } else {

        Report.addReport(newReport, (err, report) => {
            if (err) {
                res.json({success: false, msg: 'Failed to upload Report'});
            } else {
                res.json({success: true, msg: 'Report added'});
            }

        });
    }
});

module.exports = router;

