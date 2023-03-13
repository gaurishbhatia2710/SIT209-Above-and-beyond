const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello world , Gaurish Bhatia Here deploying server on azure');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});