const List  = require('../models/listModel');

module.exports = async (req,res) =>{

    const lists = await List.find({});
    lists.reverse();

    return res.status(200).json({
        message: 'Lists provided',
        data: {
            lists
        }
    })

}