const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('combined'));


app.get('/', (req, res) => {
    res.status(200).json({message:"Hello World"});
})
app.listen(3000);