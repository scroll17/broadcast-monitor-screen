/*extended modules*/
import dgram from 'dgram';
/*logger*/
import logger from '../logger.js'

export async function startupUdpServer() {
    const PORT = 41234
    const server = dgram.createSocket('udp4');

    server.on('message', (msg, rinfo) => {
        console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });

    server.on('listening', () => {
        const address = server.address();
        console.log(`server listening ${address.address}:${address.port}`);
    });

    server.on('error', (err) => {
        console.log(`server error:\n${err.stack}`);
        server.close();
    });

    server.bind(PORT, () => logger.info(`UDP server listening on port ${PORT}`));

    return server;
}