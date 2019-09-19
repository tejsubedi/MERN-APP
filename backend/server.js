const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//import router file
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

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

//Use routes

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})

