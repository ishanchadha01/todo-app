const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;
    const date = req.body.date;
    const length = req.body.length;
    const status = req.body.status;
    const newTask = new Task({title, category, description, date, length, status});
    newTask.save()
        .then(() => res.json('Task added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;