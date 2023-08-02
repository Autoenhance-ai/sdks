/* tslint:disable */
/* eslint-disable */
/**
 * Autoenhance API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ImageOut
 */
export interface ImageOut {
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    imageId?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    imageName?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    imageType?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageOut
     */
    dateAdded?: number;
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    enhanceType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImageOut
     */
    skyReplacement?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImageOut
     */
    verticalCorrection?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    scene?: string;
    /**
     * The status of the order.
     * @type {string}
     * @memberof ImageOut
     */
    readonly status?: ImageOutStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImageOut
     */
    enhanced?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImageOut
     */
    error?: boolean;
}


/**
 * @export
 */
export const ImageOutStatusEnum = {
    Waiting: 'waiting',
    Processing: 'processing',
    Processed: 'processed',
    Error: 'error'
} as const;
export type ImageOutStatusEnum = typeof ImageOutStatusEnum[keyof typeof ImageOutStatusEnum];


/**
 * Check if a given object implements the ImageOut interface.
 */
export function instanceOfImageOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageOutFromJSON(json: any): ImageOut {
    return ImageOutFromJSONTyped(json, false);
}

export function ImageOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageId': !exists(json, 'image_id') ? undefined : json['image_id'],
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'imageName': !exists(json, 'image_name') ? undefined : json['image_name'],
        'imageType': !exists(json, 'image_type') ? undefined : json['image_type'],
        'dateAdded': !exists(json, 'date_added') ? undefined : json['date_added'],
        'enhanceType': !exists(json, 'enhance_type') ? undefined : json['enhance_type'],
        'skyReplacement': !exists(json, 'sky_replacement') ? undefined : json['sky_replacement'],
        'verticalCorrection': !exists(json, 'vertical_correction') ? undefined : json['vertical_correction'],
        'scene': !exists(json, 'scene') ? undefined : json['scene'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'enhanced': !exists(json, 'enhanced') ? undefined : json['enhanced'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function ImageOutToJSON(value?: ImageOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image_id': value.imageId,
        'order_id': value.orderId,
        'image_name': value.imageName,
        'image_type': value.imageType,
        'date_added': value.dateAdded,
        'enhance_type': value.enhanceType,
        'sky_replacement': value.skyReplacement,
        'vertical_correction': value.verticalCorrection,
        'scene': value.scene,
        'enhanced': value.enhanced,
        'error': value.error,
    };
}

