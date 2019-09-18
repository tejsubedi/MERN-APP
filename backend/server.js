const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;


const uri = process.env.DATABASE;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Mongo db succeessfully connected`);
})


//middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello Backend`);
})


app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})

