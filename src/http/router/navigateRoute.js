/*external modules*/
import express from 'express'
import screenshot from 'screenshot-desktop'
/*utils*/
import getIp from '../../utils/getIp.js'
/*DB*/
/*logger*/
import logger from '../../logger.js'

const router = express.Router();

router.get('/', async (req, res) => {
    logger.info('GET /')
    logger.info('RENDER index.ejs')

    return res.render('index.ejs')
})


router.get('/screen', async (req, res) => {
    logger.info('GET /screen')
    logger.info('RENDER screen.ejs')

    const screenshotBuffer = await screenshot();

    return res.render('screen.ejs', {
        imageData: screenshotBuffer.toString('base64')
    })
})

router.get('/image-stream', async (req, res) => {
    logger.info('GET /image-stream')
    logger.info('RENDER stream.ejs')

    const ip = getIp();
    logger.debug('ip: ', ip)

    return res.render('stream.ejs', {
        ip: ip,
        port: process.env.PORT
    })
})

export default router;