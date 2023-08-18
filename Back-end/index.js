const express = require('express');
const app = express();
const db = require('./config/mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded());

app.use('/', require('./routes/index'));

app.listen(port,(error)=>{

    if(error){
        console.log(error);
    } 

    console.log(`your sever is running on http://localhost:${port}`); 
})