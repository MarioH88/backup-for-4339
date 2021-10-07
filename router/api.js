//router 
const express = require('express');
const router = express.Router();
const Generalinfo = require('../models/generalInfo');

// get operator
router.get('/generalInfo/',function(req,res,next){
    Generalinfo.find({}).then(function(generalInfo){
        res.send(generalInfo);
    }).catch(next);
});

// post request
router.post('/generalInfo/new',function(req,res,next){
    Generalinfo.create(req.body).then(function(generalInfo){
        res.send(generalInfo);
    }).catch(next);
});

// put request
router.put('/generalInfo/update/:id',function(req,res,next){
    Generalinfo.findOneAndUpdate({_id: req.params.id},req.body).then(function(generalInfo){
        Generalinfo.findOne({_id: req.params.id}).then(function(generalInfo){
            res.send(generalInfo);
        });
    });
});

// delete request
router.delete('/generalInfo/delete/:id',function(req,res,next){
    Generalinfo.findOneAndDelete({_id: req.params.id}).then(function(generalInfo){
        res.send(generalInfo);
    });
});

// General Info Router

// get operator
router.get('/generalInfo',function(req,res,next){
    GeneralInfo.find({}).then(function(generalInfo){
        res.send(generalInfo);
    }).catch(next);
});

// post request
router.post('/generalInfo',function(req,res,next){
    GeneralInfo.create(req.body).then(function(generalInfo){
        res.send(generalInfo);
    });
});
router.post('/healthInfo/new',function(req,res,next){
    Healthinfo.create(req.body).then(function(healthInfo){
        res.send(healthInfo);
    }).catch(next);
});

// put request
router.put('/generalInfo/:id',function(req,res,next){
    GeneralInfo.findOneAndUpdate({_id: req.params.id},req.body).then(function(generalInfo){
        Clients.findOne({_id: req.params.id}).then(function(generalInfo){
            res.send(generalInfo);
        });
    });
});
router.put('/healthInfo/update/:id',function(req,res,next){
    Healthinfo.findOneAndUpdate({_id: req.params.id},req.body).then(function(healthInfo){
       Healthinfo.findOne({_id: req.params.id}).then(function(healthInfo){
            res.send(healthInfo);
        });
    });
});

// delete request
router.delete('/generalInfo/:id',function(req,res,next){
    GeneralInfo.findOneAndDelete({_id: req.params.id}).then(function(generalInfo){
        res.send(generalInfo);
    });
});

module.exports = router;



