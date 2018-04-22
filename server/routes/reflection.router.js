const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET function to retrieve all reflection data from reflection_board database
router.get('/', (req, res)=> {
    const queryText = `SELECT * FROM reflection`;
    pool.query(queryText).then((result) => {
        console.log('reflection router GET success', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR - reflection router GET', error);
        res.sendStatus(500);
    }) // end poolQuery
}) // end router GET

module.exports = router;