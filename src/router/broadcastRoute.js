/*external modules*/
import express from 'express'
import screenshot from 'screenshot-desktop'
/*utils*/
import getIp from '../utils/getIp.js'
/*DB*/

const router = express.Router();

router.get('/screen-page', async (req, res) => {
    console.info('GET /broadcast/screen-page')
    console.info('RENDER screen.ejs')

    const screenshotBuffer = await screenshot();

    return res.render('screen.ejs', {
        imageData: screenshotBuffer.toString('base64')
    })
})

router.get('/stream-page', async (req, res) => {
    console.info('GET /broadcast/stream-page')
    console.info('RENDER stream.ejs')

    const ip = getIp();
    console.debug('ip => ', ip)

    return res.render('stream.ejs', {
        ip: ip,
        port: process.env.PORT
    })
})

router.get('/screen', async (req, res) => {
    console.info('GET /broadcast/screen')

    const screenshotBuffer = await screenshot();

    return res.send({
        imageData: screenshotBuffer.toString('base64')
    })
})

export default router;