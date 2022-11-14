const express = require('express');
const router = express.Router();
const Comic = require('./../models/Comic')

//create comic
router.post('/create', (req, res) => {
    let { name, editorial, genre, characters, year, description, aproved } = req.body;
    let imagen = req.files;
    name = name.trim();
    editorial = editorial.trim();
    genre = genre.trim();
    // characters = characters.trim();
    // year = year.trim();
    description = description.trim();
    if (name == "" || editorial == "" || genre == "" || description == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid comic name entry"
        })
    }
    else if (isNaN(year)) {
        res.json({
            status: "FAILED",
            message: "Year must be a number"
        })
    } 
    else {
        //Checking if Comic already exists
        Comic.find({ name }).then(result => {
            if (result.length) {
                // A Comic already exists
                res.json({
                    status: "FAILED",
                    message: "Comic with the provided name already exists"
                })
            } else {
                // Try to create new Comic

                //Password handling
                const newComic = new Comic({
                    name,
                    editorial,
                    genre,
                    characters,
                    year,
                    description,
                    aproved
                });
                newComic.img.data = imagen.data;
                newComic.img.contentType = imagen.mimetype; 
                newComic.img.name = imagen.name;

                newComic.save().then(result => {
                    res.json({
                        status: "SUCCESS",
                        message: "Comic saved!",
                        data: result
                    })
                })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while saving Comic!"
                        })
                    })

            }

        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error ocurred while checking for existing Comic!"
            });
        });



    }


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

module.exports = router ;