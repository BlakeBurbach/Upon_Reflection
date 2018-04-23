const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET function to retrieve all reflection data from reflection_board database
router.get('/', (req, res)=> {
    const queryText = `SELECT * FROM reflection ORDER BY id DESC`;
    pool.query(queryText).then((result) => {
        console.log('reflection router GET success', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR - reflection GET route', error);
        res.sendStatus(500);
    }) // end poolQuery
}) // end router GET

// POST function to send user's reflection data to database
router.post('/', (req, res)=> {
    const reflectionToSend = req.body;
    const queryText = `INSERT INTO reflection (topic, description) VALUES ($1, $2);`;
    pool.query(queryText, [reflectionToSend.topic, reflectionToSend.description])
        .then((result)=>{
            console.log('reflection router POST success', result);
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('ERROR - reflection POST route', error);
            res.sendStatus(500);
        }) // end poolQuery
}) // end router POST

// DELETE function to remove reflection from database
router.delete('/:id', (req, res)=> {
    const reflectionID = req.params.id;
    const queryText = `DELETE FROM reflection WHERE id = $1;`;
    pool.query(queryText, [reflectionID])
        .then((result)=>{
            console.log('reflection router DELETE success', result);
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('ERROR - reflection DELETE route', error);
            res.sendStatus(500);
        }) // end poolQuery
}) // end router DELETE

// UPDATE function to change reflection's bookmarked boolean value
router.put('/:id', (req, res)=>{
    const reflectionID = req.params.id;
    const queryText = `UPDATE reflection SET bookmarked = NOT bookmarked WHERE id = $1;`
    pool.query(queryText, [reflectionID])
        .then((result)=>{
            console.log('reflection router UPDATE success', result);
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('ERROR - reflection UPDATE route', error);
            res.sendStatus(500);
        }) // end poolQuery
}) // end router UPDATE

module.exports = router;