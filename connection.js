const mongoose = require('mongoose');
const url = "mongodb+srv://vaishnavi357:vaishnavi123@cluster0.k4yrt8l.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

//connect to database 

//asynchronous function-return a promise
mongoose.connect(url) 
.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose; //this line is used to export the mongoose module so that it can be used in other files. This is necessary to connect to the database in other files.