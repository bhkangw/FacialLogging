
// DEPENDENCIES
import * as mongoose from 'mongoose';
import { IUser } from '../backend-interfaces/user.backend';

/**
 * interfaces for capturing and modifying user data recieved
 * from the mongoose
 */
export interface IUserModel extends mongoose.Document, IUser {

}
