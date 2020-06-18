const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find({})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const user = req.body.user;
    const status = req.body.status;
    const newTask = new Task({title, user, status});
    newTask.save()
        .then(() => res.json('Task added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').patch((req, res) => {
    const title = req.body.title;
    const user = req.body.user;
    const status = req.body.status;
    const newTask = new Task({title, user, status});
    newTask.findOneAndUpdate()
        .then(() => res.json('Task updated'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete((req, res) => {
    const title = req.body.title;
    const user = req.body.user;
    const status = req.body.status;
    const newTask = new Task({title, user, status});
    newTask.findByIdAndDelete()
        .then(() => res.json('Task updated'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;