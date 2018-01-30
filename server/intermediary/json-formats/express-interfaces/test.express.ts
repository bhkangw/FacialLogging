import * as express from 'express';

export interface ITester extends express.Request {
    files: {
        file: any,
    }
}