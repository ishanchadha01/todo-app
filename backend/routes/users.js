const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const uid = req.body.uid;
    const username = req.body.username;
    const newUser = new User({uid, username});
    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').patch((req, res) => {
    const uid = req.body.uid;
    const username = req.body.username;
    const newUser = new User({uid, username});
    newUser.findOneAndUpdate()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete((req, res) => {
    const uid = req.body.uid;
    const username = req.body.username;
    const newUser = new User({uid, username});
    newUser.findByIdAndDelete()
        .then(() => res.json('Task updated'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;