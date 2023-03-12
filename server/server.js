const express = require('express');
const cors = require('cors');
const app = express()
const { config } = require('dotenv');
app.use(cors());
app.use(express.json());
config();
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    try {
        res.send('Get the Request');
    } catch (error) {
        res.status(500).send('unknown error')
    }
})
app.get('*', (req, res) => {
    res.send('page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})