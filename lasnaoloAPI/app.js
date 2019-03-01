const express = require('express');
const app = express();
const router = express.Router();

const baseURL = '/api/v1';

router.use(express.json());

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api.yaml');

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/areas', require('./routes/areas'));

app.use(baseURL, router);

app.listen(3000);