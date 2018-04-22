const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res)=> {
    queryText = `SELECT * FROM reflection`;
    pool.query(queryText).then(result => {
        console.log('reflection router GET success', result);
        res.send(result.rows);
    }).catch(err => {
        console.log('ERROR - reflection router GET', err);
        res.sendStatus(500);
    }) // end poolQuery
}) // end router GET

module.exports = router;