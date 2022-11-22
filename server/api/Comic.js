const express = require('express');
const router = express.Router();
const Comic = require('./../models/Comic')

//update comi
router.put("/updateComic", async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const year = req.body.year;
    const description = req.body.description;

    try {
        await Comic.findById(id, (err, updatedComic) => {
            updatedComic.name = name;
            updatedComic.year = year;
            updatedComic.description = description;
            updatedComic.save();
            res.send("updated");
        });
    } catch (err) {
        console.log(err);
    }
});
//delete comic
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await Comic.findByIdAndRemove(id).exec();
    res.send("deleted");
});
//update status user
router.put("/approve", async (req, res) => {
    const id = req.body.id;

    try {
        await Comic.findById(id, (err, updatedComic) => {
            updatedComic.approved = true;
            updatedComic.save();
            res.send("approved");
        });
    } catch (err) {
        console.log(err);
    }
});
//Read comic
router.get("/read/:id", async (req, res) => {

    let id = req.params.id;
    await Comic.findById(id).exec((err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
        console.log(result);
    })
});

//Show Image of post
router.get('/image/:id', (req, res) => {
    let id = req.params.id;

    Comic.findById(id).exec((err, result) => {
        if (err) {
            res.send(err);
        }
        try {
            res.set('Content-Type', result.image.contentType);
            res.send(result.image.data);
        } catch {
            (err) => {
                console.log(err)
            }
        }
    })
});
//create comic
router.post('/create', async (req, res) => {
    if (req.files) {
        let name = req.body.name;
        let editorial = req.body.editorial;
        let genre = req.body.genre;
        let characters = req.body.characters;
        let year = req.body.year;
        let description = req.body.description;
        let aproved = req.body.aproved;
        let image = req.files.image;

        let comic = new Comic({ name: name, editorial: editorial, genre: genre, characters: characters, year: year, description: description, aproved: aproved });


        comic.image.data = image.data;
        comic.image.contentType = image.mimetype;
        comic.image.name = image.name;
        Comic.find({ name }).then(result => {



        })

        try {
            await comic.save().then(result => {
                res.json({
                    status: "SUCCESS",
                    message: "Comic saved!",
                    data: result
                })
            })
        } catch (err) {
            res.json({
                status: "FAILED",
                message: "An error occurred while saving Comic!"
            })
            console.log(err);
        }
    } else (console.log("no files"))

});

//get comics
router.get("/:editorial", async (req, res) => {
    let editorial = req.params.editorial;

    Comic.find({editorial: editorial}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
});
//get comics
router.get("/read", async (req, res) => {
    Comic.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
});
//get latest 4
router.get("/readLatest", async (req, res) => {
    Comic.find({approved:true} ).sort({ _id: -1 }).limit(4).then((result) => {
        // if (err) {
        //     res.send(err);
        // }
        res.send(result);
    })

});

module.exports = router;