const express = require('express');
const router = express.Router();
const UserModel = require('./../models/User')

//password
const bcrypt = require('bcrypt');
//sign up
router.post('/signup', (req, res) => {

    let { name, email, password } = req.body;
    name = name.trim();;
    email = email.trim();
    password = password.trim();

    if (name === "" || email === "" || password === "") {
        res.json({
            status: "FAILED",
            messsage: "Empty input fields!"
        });
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        res.json({
            status: "FAILED",
            messsage: "Invalid name entered"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            messsage: "Invalid email entered"
        });
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            messsage: "Password is too short"
        });
    } else {
        //check if user exist
        UserModel.find({ email }).then(result => {
            if (result.length) {
                //user already exist
                res.json({
                    status: "FAILED",
                    messsage: "User whit te provided email already exist"
                });
            } else {
                //try to create new user

                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new UserModel({
                        name,
                        email,
                        password: hashedPassword
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCSESS",
                            messsage: "Singup successful",
                            data: result
                        });
                    }).catch(err => {
                        res.json({
                            status: "FAILED",
                            messsage: "An error ocurred while saving user acount"
                        });
                    })

                }).catch(err => {
                    res.json({
                        status: "FAILED",
                        messsage: "An error ocurred while hashing passwort"
                    });
                })

            }

        }).catch(err => {
            console.log(err)
            res.json({
                status: "FAILED",
                messsage: "an error ocurred while checking for existing user"
            });
        })
    }
})


//sign in
router.post('/signup', (req, res) => {
    
})

module.exports = router;