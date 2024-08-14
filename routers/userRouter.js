const express = require('express');
const Model = require('../models/userModel');
const { } = require('mongoose');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//getall
router.get('/getall', (req, res) => {
    Model.find() //model.find use for find the data in the  requested collection
    .then((result) =>{
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
//getbyemail
router.get('/getbyemail/:email',(req,res)=>{
    Model.findOne({ email:req.params.email})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
//getbycity
router.get('/getbycity/:city',(req,res)=>{
    Model.find({ city:req.params.city})
   .then((results)=>{
    res.status(200).json(results);
   })
   .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
//getbyid
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id); // to get the id from the url parameters. params means the parameters passed in the url.
    res.send('Response from getbyid');
});
//update
router.get('/update', (req, res) => {
    res.send('Response from update');
});

//delete

router.get('/delete', (req, res) => {
    res.send('Response from delete');
});

module.exports = router;