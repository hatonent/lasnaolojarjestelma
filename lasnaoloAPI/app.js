const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api.yaml');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

app.post('/areas/:area/presence', (req, res) => {
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

app.listen(3000);