/*external modules*/
import express from 'express'
import screenshot from 'screenshot-desktop'
/*utils*/
import getIp from '../../utils/getIp.js'
/*DB*/
/*logger*/
import logger from '../../logger.js'

const router = express.Router();

router.get('/screen', async (req, res) => {
    logger.info('GET /broadcast/screen')

    const screenshotBuffer = await screenshot();

    return res.send({
        imageData: screenshotBuffer.toString('base64')
    })
})

export default router;