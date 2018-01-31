
// DEPENDENCIES
import * as mongoose from 'mongoose';
import * as express from 'express';

// BACKEND INTERFACES
import { ServerMessage, IServerMessage } from './../json-formats/backend-interfaces/server-message.backend';
import { IUser, User } from '../json-formats/backend-interfaces/user.backend';

// MONGO INTERFACES
import { IUserModel } from '../json-formats/mongo-interfaces/user.mongo';


import * as jquery from 'jquery';
import { IImageContainer } from '../json-formats/backend-interfaces/image-container.backend';

// wraps all currently used models in a quick lookup object
const models = {
    User: mongoose.model<IUserModel>('user')
}

/**
 * master login and registration controller
 */
export const LoginRegController = {

    /**
     * checks the database to find if a given key value pair exists in the collection User
     * @param key the key to use to find if exists
     * @param value the value to use to find if use exits in the database
     */
    hasType: (key: string, value: any, callback: (success: boolean) => void) => {

        // initalize an empty object to build a key value pair
        const keyValue = {};
        keyValue[key] = value;
        models.User.findOne(keyValue, (err, res) => {
            if (!res) {
                callback(false);
            } else {
                callback(true);
            }
        });
    },

    findUser: (req: express.Request, res: express.Response) => {
        models.User.findOne({ name: req.params.name }, (err, user) => {
            if (user) {
                res.json(new ServerMessage(true, user));
            } else {
                res.json(new ServerMessage(false, user));
            }
        });
    },

    /**
     * checks session for a given values
     * @param value value to check
     */
    checkSessionFor: (req: express.Request, res: express.Response, value: string) => {
        if (req.session[value]) {
            res.json(new ServerMessage(true, { message: `${value} exists in session` }));
        } else {
            res.json(new ServerMessage(false, { message: `${value} does not exist in session` }));
        }
    },

    /**
     * registers a user
     */
    addUser: (req: express.Request, res: express.Response) => {
        const container: IImageContainer = req.body.images;
        jquery.ajax({
            type: 'POST',
            url: 'localhost:5555/api/ml/build',
            data: container,
            success: (model) => {
                const newUser = new models.User({ modelYML: model, name: req.body.name });
                newUser.save((err, product) => {
                    if (err) {
                        res.json(new ServerMessage(false, err));
                        throw err;
                    } else {
                        res.json(new ServerMessage(true, product));
                    }
                });
            }
        });
    },

    verifyUser: (req: express.Request, res: express.Response) => {
        const attemptsContainer: IImageContainer = req.body.images;
        models.User.findOne({ name: req.params.name }, (err, user) => {
            jquery.ajax({
                type: 'POST',
                url: 'localhost:5555/api/ml/verify',
                data: { modelYML: user.modelYML, attempts: attemptsContainer },
                success: (bool) => {
                    res.json(new ServerMessage(bool.success, null));
                }
            });
        })
    },

    /**
     * clears session for a given value
     * @param value what to clear session for
     */
    clearSessionFor: (req: express.Request, res: express.Response, value: string) => {
        if (req.session[value]) {
            delete req.session[value];
            res.json(new ServerMessage(true, { message: 'session cleared successfully' }));
        } else {
            res.json(new ServerMessage(false, { message: 'value is does not exist in session' }))
        }
    },
};
