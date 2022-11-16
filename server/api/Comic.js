const express = require('express');
const router = express.Router();
const Comic = require('./../models/Comic')

router.post("/upload", (req, res) => {
    console.log(req.req.body.name)
    console.log(req.files.myFile);
    console.log(req.files.myPicture);
    console.log(req.files.myVideo);
});

//Show Image of post
router.get('/image/:id', (req, res) => {
    let id = req.params.id;

    Comic.findById(id).exec((err, result) => {
        if (err) {
            res.send(err);
        }

        res.set('Content-Type', result.image.contentType);
        res.send(result.image.data);

    })

});
//create comic
router.post('/create', async (req, res) => {
    // let { name, editorial, genre, characters, year, description, aproved } = req.body;
    // let image = req.files;
    // name = name.trim();
    // editorial = editorial.trim();
    // genre = genre.trim();
    // // characters = characters.trim();
    // // year = year.trim();
    // description = description.trim();
    // if (name == "" || description == "") {
    //     res.json({
    //         status: "FAILED",
    //         message: "Empty input fields!"
    //     });
    // } else if (!/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]*$/.test(name)) {
    //     res.json({
    //         status: "FAILED",
    //         message: "Invalid comic name entry"
    //     })
    // }
    // else if (isNaN(year)) {
    //     res.json({
    //         status: "FAILED",
    //         message: "Year must be a number"
    //     })
    // }
    // else {
    //     //Checking if Comic already exists
    //     Comic.find({ name }).then(result => {
    //         if (result.length) {
    //             // A Comic already exists
    //             res.json({
    //                 status: "FAILED",
    //                 message: "Comic with the provided name already exists"
    //             })
    //         } else {
    //             // Try to create new Comic

    //             let newComic = new Comic({
    //                 name: name,
    //                 editorial: editorial,
    //                 genre: genre,
    //                 characters: characters,
    //                 year: year,
    //                 description: description,
    //                 aproved: aproved,
    //             });
    //             newComic.img.data = image.data;
    //             newComic.img.contentType = image.mimetype;
    //             newComic.img.name = image.name;

    //             newComic.save().then(result => {
    //                 res.json({
    //                     status: "SUCCESS",
    //                     message: "Comic saved!",
    //                     data: result
    //                 })
    //             })
    //                 .catch(err => {
    //                     res.json({
    //                         status: "FAILED",
    //                         message: "An error occurred while saving Comic!"
    //                     })
    //                 })
    //         }
    //     }).catch(err => {
    //         console.log(err);
    //         res.json({
    //             status: "FAILED",
    //             message: "An error ocurred while checking for existing Comic!"
    //         });
    //     });
    // }
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
router.get("/read", async (req, res) => {
    Comic.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
});

module.exports = router;