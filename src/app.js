/*extended modules*/
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
/*router*/
import router from './router/index.js'
/*logger*/
import logger from './logger.js'
/*utils*/
import getIp from './utils/getIp.js'

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// def app
const app = express();

app.set('port', process.env.PORT)
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router)

app.use((err, req, res, next) => {
    console.error(err.stack);

    return res
        .status(500)
        .send({
            error: err
        });
});

const server = app.listen(
    app.get('port'),
    async () => {
        logger.info(`Express server listening on port ${app.get('port')} (ip = ${getIp()})`);
    }
);

// exit
process.on('SIGINT', () => {
    console.log('') // alias for "/n"
    console.info('-- SIGINT signal received --');
    console.info('-- EXIT --')

    process.exit()
})