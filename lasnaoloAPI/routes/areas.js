const express = require('express');
const router = express.Router();

router.post('/:area/presence', (req, res) => {
    console.log('Area: ' + req.params.area);
    console.log('Content:' + req.body);

    if(!req.body.tags) {
        res.status(400).send({error: 'Mandatory attribute tags missing'});
    }

    //tarkista pyyntö
    //- onko area laillinen
    // -onko tag lista olemassa
    //jos ei oikein, palauta 400 ja virheteksti

    //kirjoita tiedot tietokantaan
    //jos ei onnistu palauta 500

    res.sendStatus(201);
});

module.exports = router;