
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

/**
 * master login and registration controller
 */
export const DevController = {
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
