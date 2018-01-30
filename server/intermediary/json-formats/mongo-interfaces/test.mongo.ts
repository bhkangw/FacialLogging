import { ITest } from "../backend-interfaces/test.backend";

import * as mongoose from 'mongoose';

export interface ITestModel extends ITest, mongoose.Document {
    
}