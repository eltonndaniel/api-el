const express = require('express');
const app = express();

app.get('/api', (req, res) =>{

    const apiKey = req.query.apiKey;

    // validate API KEY
    //Bill user for usage

    res.send({ data: '**********'});

});

app.listen(8080, () => console.log('alive on http://localhost:8080'));
