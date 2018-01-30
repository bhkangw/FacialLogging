
// DEPENDENCIES
import * as mongoose from 'mongoose';
import * as express from 'express';

// BACKEND INTERFACES
import { ServerMessage, IServerMessage } from './../json-formats/backend-interfaces/server-message.backend';
import { IUser, User } from '../json-formats/backend-interfaces/user.backend';

// MONGO INTERFACES
import { IUserModel } from '../json-formats/mongo-interfaces/user.mongo';
import { ITestModel } from '../json-formats/mongo-interfaces/test.mongo';
import { ITester } from '../json-formats/express-interfaces/test.express';
// import * as multer from 'multer';
// import * as GridFsStorage from 'multer-gridfs-storage';
// import * as Grid from 'gridfs-stream';
// import { mongo } from 'mongoose';


// const storage = new GridFsStorage({
//     url: 'mongodb://localhost:27017/test',
// });

// //multer settings for single upload
// const upload = multer({
//     storage: storage
// });
// const sUpload = upload.single('img');


const models = {
    testModel: mongoose.model<ITestModel>('user')
}


export const TestController = {
    uploadImg: (req: ITester, res: express.Response) => {
        console.log(req.file);
        // sUpload(req, res, (err) => {
        //     if (err) {
        //         res.json({ error_code: 1, err_desc: err });
        //         return;
        //     }
        //     res.json({ error_code: 0, err_desc: null });
        // });
    }
};
