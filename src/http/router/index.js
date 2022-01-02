/*external modules*/
import express from 'express'
/*client routes*/
import broadcastRoute from './broadcastRoute.js'
import settingsRoute from './settingsRoute.js'
import navigateRoute from './navigateRoute.js'

export function getApiRouter() {
    const router = express.Router();

    router.use('/broadcast', broadcastRoute);
    router.use('/settings', settingsRoute);

    return router;
}

export function getNavigateRouter() {
    const router = express.Router();

    router.use('/', navigateRoute);

    return router;
}