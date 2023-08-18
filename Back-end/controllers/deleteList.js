const List = require('../models/listModel');

module.exports = async (req, res) => {

    try {

        const list_id = req.query.id;

        if(list_id){

            await List.findByIdAndDelete(list_id);

            return res.status(200).json({
                message: 'List Deleted'
            })
        }

        return res.status(404).json({
            message: 'List does not exist'
        })

    } catch (err) {

        console.log(err);
        return;
    }



}