const express = require('express');
const router = express.Router();

const createList = require('../controllers/createList');
const getLists = require('../controllers/getLists');
const deleteList = require('../controllers/deleteList');

router.get('/', (req,res)=>{
    return res.send('API is online.');
})

router.get('/get-lists', getLists);

router.post('/create-list', createList);

router.delete('/delete-list', deleteList);

module.exports = router; 