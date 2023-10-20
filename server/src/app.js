const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { FUNDS } = require('../data/funds');
const { getInvestmentByUser, updateInvestmentRecord } = require('./utils/investments');

const app = express();
app.use(bodyParser.json())
app.use(cors());

app.get('/api/funds', (req, res) => {
    res.json(FUNDS);
});

app.get('/api/investments', (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return console.log('User ID is required!')
    }
    res.json(getInvestmentByUser(userId));
});

app.post('/api/investment', (req, res) => {
    const body = req.body;
    try {
        updateInvestmentRecord(body);
        res.sendStatus(200)
    } catch (e) {
        console.log('Unable to update investment details')
        throw e
    }
});

app.listen(5000)