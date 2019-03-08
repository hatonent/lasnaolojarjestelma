const express = require('express');
const router = express.Router();

let dbConfig = require("../config.json");
let Database = require("../dbPromise.js");
let database = new Database(dbConfig);

router.post('/:area/presence', async (req, res) => {
    console.log('Area: ' + req.params.area);
    console.log('Content:' + req.body.tags);

    if(!req.body.tags) {
        res.status(400).send({error: 'Mandatory attribute tags missing'});
        return;
    }
    
    
    let results = await database.query(
        "SELECT id FROM area WHERE code = ? ",
        [req.params.area]
    );
    
    let areaId;

    if(results && results.length > 0) {
        areaId = results[0].id;
    }
    else {
        res.status(400).send({error: "Invalid area"});
        return;
    }

   
    //console.log(areaId);

    let personId = [];
    console.log(req.body.tags);
    for(let i = 0; i < req.body.tags.length; i++) {
        try {
            results = await database.query(
                "SELECT id FROM person WHERE tagId = ?",
                [req.body.tags[i]]
            );
            if(results && results.length > 0) {
                personId.push(results[0].id);
            } else {
                console.log("aaaaaa")
            }
        }
        catch(error) {
            console.log("error: " + error);
        }
    }
    
    console.log(personId);

    for(let i = 0; i < personId.length; i++) {
        try {
            results = await database.query(
                "INSERT INTO presence (person, area) VALUES (?, ?)",
                [personId[i], areaId]
            ); 
        } catch (error) {
            console.log("Error: " + error);
        }
        
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