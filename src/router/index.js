/*external modules*/
import express from 'express'
/*routes*/
import broadcastRoute from './broadcastRoute.js'
import settingsRoute from './settingsRoute.js'

const router = express.Router();

router.use('/broadcast', broadcastRoute);
router.use('/settings', settingsRoute);

export default router