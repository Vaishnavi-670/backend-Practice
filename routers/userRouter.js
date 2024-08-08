const express = require('express');
const router = express.Router();

router.post('/add',(req, res)=>{
    console.log(req.body);
    
    res.send('Response from express');
});

//getall
router.get('/getall',(req, res)=>{
    res.send('Response from getall');
});
//getbyid
router.get('/getbyid/:id',(req, res)=>{
    console.log(req.params.id); // to get the id from the url parameters. params means the parameters passed in the url.
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