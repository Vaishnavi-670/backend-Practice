const express = require('express'); //this line is used to import the express module  which is a minimal and flexible Node.js web application framework.
//initialize express
const app = express(); //this line creates an instance of the express module.
const port =5000; //this line is used to set the port number to 5000

app.listen(port ,() =>{console.log('Server is running ')}); //this line is used to start the server on port 5000 and print a message on the console.

