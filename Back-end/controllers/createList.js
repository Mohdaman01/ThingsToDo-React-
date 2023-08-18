const List = require('../models/listModel');

module.exports = (req,res)=>{
    
    List.create(req.body);

    return res.status(200).json({ 
        message: 'List created successfully'
    })
    
}    