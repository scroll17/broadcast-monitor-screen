/*extended modules*/
import dotenv from 'dotenv'
/*servers*/
import { startupHttpServer } from './http/app.js'
import { startupUdpServer } from "./udp/app.js";
/*logger*/
import logger from './logger.js'

async function run() {
    // CONFIG
    dotenv.config();

    // HTTP
    await startupHttpServer();

    // UDP
    await startupUdpServer();
}

run();