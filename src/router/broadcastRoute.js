/*external modules*/
import express from 'express'
/*DB*/

const router = express.Router();

router.get('/:userId', (req, res) => {
    console.info('GET /broadcast/')
    console.info('RENDER index.ejs')

    return res.render('index.ejs', {
        port: process.env.PORT,
    })
})

export default router;