const express = require('express'); //this line is used to import the express module  which is a minimal and flexible Node.js web application framework.
const UserRouter = require('./routers/userRouter');
const cors = require('cors');

//initialize express
const app = express(); //this line creates an instance of the express module.
const port =5000; //this line is used to set the port number to 5000

//middleware
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json()); //this line is used to parse the incoming request body as JSON. This is necessary to access the request body in the request object.
app.use('/user', UserRouter); //this line is used to use the userRouter as a middleware in the express app. This means that all the routes defined in the userRouter will be accessible under the /user path.

//route or express
app.get('/', (req, res) => { //this line is used to create a route that listens to the root URL of the website.
    res.send('Response from express'); //this line is used to send a response to the client when the route is accessed.
});
app.get('/add',(req, res) => {
    res.send('Response from add route');
});

app.listen(port ,( ) =>{console.log('Server is running ')}); //this line is used to start the server on port 5000 and print a message on the console.

