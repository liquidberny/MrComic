const express = require('express');
const router = express.Router();
const Message = require('./../models/Message')

//create create
router.post('/create', async (req, res) => {
    let content = req.body.content;


    let message = new Message({ content: content });



    try {
        await message.save().then(result => {
            res.json({
                status: "SUCCESS",
                message: "Message saved!",
                data: result
            })
        })
    } catch (err) {
        res.json({
            status: "FAILED",
            message: "An error occurred while saving Message!"
        })
        console.log(err);
    }

});
//read latests
router.get("/readLatest", async (req, res) => {
    Message.find({}).sort({ _id: -1 }).limit(1).then((result) => {
        // if (err) {
        //     res.send(err);
        // }
        res.send(result);
    })

});

module.exports = router;