import os from 'os'

export default function getIp(internal = false) {
    const nets = os.networkInterfaces();
    const results = {}

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                results[name] = results[name] ?? []
                results[name].push(net.address);
            }
        }
    }

    const ip = Object
        .values(results)
        .flat()
        .find(ip => {
            if(internal) {
                return ip.startsWith('172')
            } else {
                return ip.startsWith('192')
            }
        })

    return ip;
}