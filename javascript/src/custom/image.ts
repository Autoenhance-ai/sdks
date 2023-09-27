import { ImagesApi } from "../apis";
import { ImageIn } from "../models";

export class Image extends ImagesApi {
    async uploadImageS3(imageProperties: ImageIn, image: Blob) {
        const { s3PutObjectUrl } = await this.createImage({
            imageIn: { ...imageProperties, contentType: "image/jpeg" },
        });
        if (s3PutObjectUrl) {
            await fetch(s3PutObjectUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "image/jpeg",
                },
                body: image,
            });
        }
    }
}
