const express = require('express')
const router = new express.Router();
const Questions = require('../database/models/Questions');
const Result = require('../database/models/resultScehma');
const { question, answer } = require('../database/data');
// questions api route
// get all questions
router.get('/questions/:type', async (req, res) => {
    try {
        const question = await Questions.find({ type: req.params.type });
        res.send(question);
    } catch (error) {
        res.status(500).send('unknown error')
    }
})

// insert all questions
router.post('/questions', async (req, res) => {
    try {
        // console.log(req.body);
        const questions = Questions.insertMany({ questions: req.body.questions, type: req.body.courseType }, (err, data) => {
            res.send({ msg: "data added successfully", data });
            console.log(data);
        });

    } catch (error) {
        res.status(500).send({ error })
    }
})

// delet the quesitons
router.delete('/questions', async (req, res) => {
    try {
        const data = await Questions.deleteMany();
        res.send(data)
    } catch (error) {
        res.status(500).send('unknown error')
    }
})

//  get the result
router.get('/result/:id', async (req, res) => {
    try {
        const data = await Result.find({ userId: req.params.id });
        res.send(data);
    } catch (error) {
        res.status(500).send('unknown error')
    }
})
//  store the result
router.post('/result', async (req, res) => {
    try {

        const { userId, check, attempts, points, achieved } = req.body;
        if (!userId && !check) {
            throw new Error('data not provided');
        }
        const data = await Result.create({
            userId, check, attempts, points, achieved
        })
        // const dataJson = await data.toJSON();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
})
//  delte the result
router.delete('/result', async (req, res) => {
    try {
        const deleteData = await Result.deleteMany();
        res.send(deleteData);
    } catch (error) {
        res.status(500).send('unknown error')
    }
})
module.exports = router;