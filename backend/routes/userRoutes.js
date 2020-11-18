import express from 'express';
const router = express.Router();
import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';
import { secret } from '../config/db.js';
import bcrypt from 'bcryptjs';


import { user, addUser, comparePassword, getUserbByEmail } from '../models/userModel.js';

// Register route

router.post('/register', (req, res) => {

    console.log(req);

    let newUser = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        Hospital: req.body.Hospital,
        contactInfo: req.body.contactInfo,
        isAdmin: req.body.isAdmin


    });
    addUser(newUser, (err) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user, Invalid input' });

        }
        else {
            res.json({ success: true, msg: 'User Registered' });
        }
    });
});
// Authenticate/Login
router.post('/authenticate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    getUserbByEmail(email, (err, user) => {
        if (err) {
            throw err;
        }
        comparePassword(password, user.password, (err, isMatch) => {

            if (err) res.json({ success: false, msg: 'Invalid Credentials' });
            if (isMatch) {
                const token = jsonwebtoken.sign({ data: user }, secret, {
                    expiresIn: 10800
                });

                res.json({
                    success: true,
                    token: "JWT " + token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        Hospital: user.Hospital,
                        contactInfo: user.contactInfo,
                        isAdmin: user.isAdmin
                    }
                });
            }
            else {
                return res.json({ success: false, msg: 'Invalid Credentials' });
            }
        });
    });
});


router.route('/id').post((req, res) => {
    user.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user._id);
        }
    });
});

//update by ID route
router.route('/update/account/:id').post((req, res) => {
    user.findById({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.json(err);
        }
        else {
            user.updateOne(req.body).then(user => {
                res.status(200).json({ 'user': 'updated successfully' });
            }).catch(err => {
                res.status(400).send('Failed to update user');
            })
        }
    });
});

function encryptPass(pass = any)
{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body, salt, (err, hash) => {

            if (err) throw err;
            pass = hash;
            return pass;

        })
    })
}

router.route('/update/password/:id').post((req, res) => {
    user.findById({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.json(err);
        }
        else {
            user.updateOne({ $set: { "password": encryptPass(req.body) } }).then(user => {
                res.status(200).json({ 'password': 'updated successfully' });
            })
        }
    })
});
//Profile

router.get('/account', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user })
});

export default router;