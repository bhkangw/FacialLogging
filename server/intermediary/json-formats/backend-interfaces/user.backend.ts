
/**
 * base user class that implements base IUser
 */
export class User implements IUser {
    name: string;
}

/**
 * base implementation of IUser
 */
export interface IUser {
    name: string;
    modelYML?: string;
}
