const express = require('express');
const router = express.Router();
const User = require('./../models/User')

//password
const bcrypt = require('bcrypt');
//sign up
router.post('/signup', (req, res) => {
    let { name, email, password, test } = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    if (name == "" || email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entry"
        })
    } else if (!/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
        //MM-DD-YY
    } else {
        //Checking if user already exists
        User.find({ email }).then(result => {
            if (result.length) {
                // A user already exists
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })
            } else {
                // Try to create new user
            
                //Password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        name,
                        email,
                        password: hashedPassword,
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Sign up successful!",
                            data: result
                        })
                    })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "An error occurred while saving user account!"
                            })
                        })
                })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while hashing password!"
                        })
                    })
            }

        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error ocurred while checking for existing user!"
            });
        });



    }


});



//sign in
router.post('/signup', (req, res) => {

})

module.exports = router;