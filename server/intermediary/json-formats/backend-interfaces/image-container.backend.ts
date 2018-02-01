
/**
 * base implementation of IImageContainer
 */
export interface IImageContainer {
    images: Array<String>;
}

/**
 * class implementation of IImageContainer
 */
export class ImageContainer implements IImageContainer {
    images: Array<String>;
    constructor(images: Array<String>) {
        this.images = images;
    }
}