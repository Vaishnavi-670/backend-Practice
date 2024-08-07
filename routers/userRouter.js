const express = require('express');
const router = express.Router();

router.get('/add',(req, res)=>{
    res.send('Response from express');
});

//getall
router.get('/getall',(req, res)=>{
    res.send('Response from getall');
});
//getbyid
router.get('/getbyid',(req, res)=>{
    res.send('Response from getbyid');
});
//update
router.get('/update',(req, res)=>{
    res.send('Response from update');
});

//delete

router.get('/delete',(req, res)=>{
    res.send('Response from delete');
});

module.exports = router;