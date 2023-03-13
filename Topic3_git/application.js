const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const base = `${__dirname}`;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/login/login-page.html`);
  });



  app.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'username' && password === 'password') {
      res.sendFile(__dirname + '/smart/smart-car.html');
    } else {
      res.sendFile(__dirname + '/invalid.html');
    }
  });





app.listen(port, () => {
  console.log(`listening on port ${port}`);
});