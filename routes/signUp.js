const express = require('express')
const router = express.Router()
const SignUp = require('../models/signUp.model');
const passport = require('../passport');

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    SignUp.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new SignUp({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
     '/user/login',
     passport.authenticate('local', { successRedirect: '/login',
                                   failureRedirect: 'http://localhost:3000/' }));/// bad look - send message to user that login is no good. Make sure it displays on front!!!
//     function (req, res, next) {
//         console.log('routes/user.js, login, req.body: ');
//         console.log(req.body)
//         next()
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('logged in', req.username);
    
//         var userInfo = {
//             username: req.user.username 
//         };
//         console.log(userInfo);
//         res.send(userInfo);
//     }
// )


router.get('/:username', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.params.username)
    if (req.user) {
        res.json({ username: req.username })
    } else {
        res.json({ username: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.username) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router