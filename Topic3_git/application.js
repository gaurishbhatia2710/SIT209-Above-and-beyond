// Name : Gaurish Bhatia
// Student ID : 2110994762
// Remarks : this is the server file for the application.


// Including the express modules.
const express = require('express');

// Including the body-parser modules.
const bodyParser = require('body-parser');

// initialising the application as express
const app = express();

//Using the port 3000 as a server.
const port = 3000;


// using the base as the directory
const base = `${__dirname}`;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));





// The get command for getting the login page by default.
app.get('/', function (req, res) {
    res.sendFile(`${base}/login/login-page.html`);
  });


// post command for checking the username and password and sending the file for smart-car.html file and invalid password.
  app.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'username' && password === 'password') {
      res.sendFile(__dirname + '/smart/smart-car.html');
    } else {
      res.sendFile(__dirname + '/invalid.html');
    }
  });

// the listen command for listening on the port 3000.
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });





