const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    return res.json(['user0','user1']);
});

app.listen(3001);