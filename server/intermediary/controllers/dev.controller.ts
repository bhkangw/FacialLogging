
// DEPENDENCIES
import * as mongoose from 'mongoose';
import * as express from 'express';
import * as HttpClient from 'request';

// BACKEND INTERFACES
import { ServerMessage, IServerMessage } from './../json-formats/backend-interfaces/server-message.backend';
import { IUser, User } from '../json-formats/backend-interfaces/user.backend';
import { IImageContainer, ImageContainer } from '../json-formats/backend-interfaces/image-container.backend';

// MONGO INTERFACES
import { IUserModel } from '../json-formats/mongo-interfaces/user.mongo';


// wraps all currently used models in a quick lookup object
const models = {
    User: mongoose.model<IUserModel>('user')
};


export const DevController = {

    /**
     * FOR DEVELOPMENT USE ONLY. This route will automatically log any
     * requests into an account, or create one occordingly
     */
    login: (req: express.Request, res: express.Response) => {
        models.User.findOne({ name: req.body.name }, (err, user) => {
            if (err) {
                throw err;
            } else {
                if (user) {
                    req.session._id = user._id;
                    delete user.modelYML;
                    res.json(new ServerMessage(true, user));
                } else {
                    const newUser = new models.User(req.body);
                    newUser.save((err, product) => {
                        if (err) {
                            throw err;
                        } else {
                            res.json(new ServerMessage(true, product));
                        }
                    });
                }
            }
        });
    }
};
