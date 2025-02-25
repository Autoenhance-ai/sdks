/* tslint:disable */
/* eslint-disable */

import { Configuration } from './runtime' 
import * as models from './models';
import * as apis from './apis';
import * as runtime from './runtime';

const VERSION = "1.2.21"
const API_VERSION = "2025-01-01"


export default class Autoenhance {
    private configuration: Configuration;
    private _ImagesApi: apis.ImagesApi;
    private _OrdersApi: apis.OrdersApi;
    
    [key: string]: any;

    constructor(apiKey: string, options: { baseURL?: string } = {}) {
        const { baseURL = 'https://api.autoenhance.ai' } = options;

        this.configuration = new Configuration({
            basePath: baseURL,
            middleware: [],
            apiKey: () => apiKey,
            headers: {
                'x-api-version': API_VERSION
            }
        });

        this._ImagesApi = new apis.ImagesApi(this.configuration);
        this.injectApiMethods(this._ImagesApi)

        this._OrdersApi = new apis.OrdersApi(this.configuration);
        this.injectApiMethods(this._OrdersApi)

    }

    private injectApiMethods(apiInstance: any): void {
        const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(apiInstance))
            .filter((name) => typeof apiInstance[name] === 'function' && name !== 'constructor');

        for (const methodName of methodNames) {
            // Bind each method to the API instance and add it to this Client
            this[methodName] = apiInstance[methodName].bind(apiInstance);
        }
    }

    // Older clients needed to construct a reference to the class which
    // handled communication with a certain collection of endpoints, we 
    // handle backwards compatibility here.
    //
    get ImagesApi() {
        return this._ImagesApi;
    }

    get OrdersApi() {
        return this._OrdersApi;
    }


    downloadEnhancedImageURL(requestParameters: apis.DownloadEnhancedImageRequest): string {
        
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling downloadEnhancedImageURL().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['quality'] != null) {
            queryParameters['quality'] = requestParameters['quality'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['preview'] != null) {
            queryParameters['preview'] = requestParameters['preview'];
        }

        if (requestParameters['watermark'] != null) {
            queryParameters['watermark'] = requestParameters['watermark'];
        }

        if (requestParameters['maxWidth'] != null) {
            queryParameters['max_width'] = requestParameters['maxWidth'];
        }

        if (requestParameters['scale'] != null) {
            queryParameters['scale'] = requestParameters['scale'];
        }

        return `{{this.configuration.basePath}/v3/images/{id}/enhanced`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])))
    }

    downloadOriginalImageURL(requestParameters: apis.DownloadEnhancedImageRequest): string {
        
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling downloadOriginalImageURL().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['quality'] != null) {
            queryParameters['quality'] = requestParameters['quality'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['preview'] != null) {
            queryParameters['preview'] = requestParameters['preview'];
        }

        if (requestParameters['watermark'] != null) {
            queryParameters['watermark'] = requestParameters['watermark'];
        }

        if (requestParameters['maxWidth'] != null) {
            queryParameters['max_width'] = requestParameters['maxWidth'];
        }

        if (requestParameters['scale'] != null) {
            queryParameters['scale'] = requestParameters['scale'];
        }

        return `${this.configuration.baseURL}/v3/images/${encodeURIComponent(String(requestParameters['id']))}/original`;
    }

    async uploadImage(imageProperties: models.ImageIn, image: Blob) {
        
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

    // In previous SDKs this method was called uploadImageS3, so we have this
    // alias as backwards compatibility.
    // 
    uploadImageS3 = this.uploadImage
}

