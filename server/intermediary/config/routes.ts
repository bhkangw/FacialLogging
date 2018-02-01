
// DEPENDENCIES
import * as express from 'express';
import * as path from 'path';

// CONTROLLERS
import { LoginRegController } from './../controllers/login-reg.controller';
import { DevController } from '../controllers/dev.controller';



// object routes contains the master route paths for the app
export const routes = (app: express.Express) => {

    // User Login and Registration Routes
    app.get('/api/exp/is-logged', (req, res) => LoginRegController.checkSessionFor(req, res, '_id'));
    app.get('/api/exp/find-user/:name', (req, res) => LoginRegController.findUser(req, res));
    app.post('/api/exp/add-user', (req, res) => LoginRegController.addUser(req, res));
    app.post('/api/exp/verify', (req, res) => LoginRegController.verifyUser(req, res));
    app.get('/api/exp/logout', (req, res) => LoginRegController.clearSessionFor(req, res, '_id'));

    // Dev Routes
    app.post('/api/exp/dev/login', (req, res) => DevController.login(req, res));

    // Base route and serves frontend
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../../client/WebApp/dist/index.html')));
};
