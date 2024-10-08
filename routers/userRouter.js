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
            if(err.code === 11000){
                res.status(400).json({ message: 'Email already exists' });
            }
            else{
                res.status(400).json(err);
            }
            res.status(500).json({message: 'Internal server error'});
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
});
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
});
//getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
//update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true}) //new true value is used to get the updated data from the database
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
   .then((results) => {
    res.status(200).json(results);
   })
   .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;