// @ts-ignore -- file available in the SDK after generation
import { ImagesApi as Image } from "../apis";
// @ts-ignore -- file available in the SDK after generation
import { ImageIn } from "../models";

export class ImagesApi extends Image {
    async uploadImageS3(imageProperties: ImageIn, image: Blob) {
        // @ts-ignore -- file available in the SDK after generation
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
