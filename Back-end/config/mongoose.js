const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const password = process.env.password;
const user = process.env.user;

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.69irmlm.mongodb.net/react-todo-app`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){

    console.log('mongobd connected!'); 
    
});