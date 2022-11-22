const express = require('express');
const router = express.Router();
const Recomendadion = require('./../models/Recomendation')

//create create
router.post('/create', async (req, res) => {
    let name = req.body.name;
    let description = req.body.description;


    let recomendation = new Recomendadion({ name: name, description: description,  });



    try {
        await recomendation.save().then(result => {
            res.json({
                status: "SUCCESS",
                message: "Recomendation saved!",
                data: result
            })
        })
    } catch (err) {
        res.json({
            status: "FAILED",
            message: "An error occurred while saving Recomendation!"
        })
        console.log(err);
    }

});
//read latests
router.get("/readLatest", async (req, res) => {
    Recomendadion.find({}).sort({ _id: -1 }).limit(4).then((result) => {
        // if (err) {
        //     res.send(err);
        // }
        res.send(result);
    })

});

module.exports = router;