
// DEPENDENCIES
import * as express from 'express';
import * as path from 'path';

// CONTROLLERS
import { LoginRegController } from './../controllers/login-reg.controller';
import { TestController } from '../controllers/test.controller';
import { ITester } from '../json-formats/express-interfaces/test.express';

import * as mongoose from 'mongoose';
import * as multer from 'multer';
import * as GridFsStorage from 'multer-gridfs-storage';
import * as Grid from 'gridfs-stream';
import { mongo } from 'mongoose';


var db = new mongo.Db('test', new mongo.Server("127.0.0.1", 27017));
var gfs = Grid(db, mongo);

const storage = require('multer-gridfs-storage')({
    gfs: gfs,
    url: 'mongodb://localhost:27017/test'
 });
 

//multer settings for single upload
const upload = multer({
    storage: storage,
});
// const sUpload = upload.single('img');



// object routes contains the master route paths for the app
export const routes = (app: express.Express) => {

    // User Login and Registration Routes
    app.get('/api/exp/is-logged', (req, res) => LoginRegController.checkSessionFor(req, res, '_id'));
    app.post('/api/exp/add-user', (req, res) => LoginRegController.addUser(req, res));
    app.post('/api/exp/ml/verify', (req, res) => LoginRegController.verifyUser(req, res));
    app.get('/api/exp/logout', (req, res) => LoginRegController.clearSessionFor(req, res, '_id'));

    app.post('/test/img', upload.single('img'), (req: ITester, res) => TestController.uploadImg(req, res));

    // Base route and serves frontend
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../client/WebApp/dist/index.html')));
};
