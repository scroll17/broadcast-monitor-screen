/*extended modules*/
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
/*router*/
import { getNavigateRouter, getApiRouter } from './router/index.js'
/*errorHandlers*/
import { mainErrorHandler } from './errorHandlers/index.js'
/*logger*/
import logger from '../logger.js'
/*utils*/
import getIp from '../utils/getIp.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function startupHttpServer() {
    const PORT = process.env.PORT;
    const app = express();

    app.set('port', PORT)

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', getNavigateRouter())
    app.use('/api', getApiRouter());

    app.use(mainErrorHandler);

    const server = app.listen(
        PORT,
        () => {
            logger.info(`Express server listening on port ${PORT} (ip = ${getIp()})`);
        }
    );

    return {
        app,
        server
    }
}