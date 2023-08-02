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
import type { ImageOut } from './ImageOut';
import {
    ImageOutFromJSON,
    ImageOutFromJSONTyped,
    ImageOutToJSON,
} from './ImageOut';

/**
 * 
 * @export
 * @interface OrderOut
 */
export interface OrderOut {
    /**
     * The ID for the order.
     * @type {string}
     * @memberof OrderOut
     */
    orderId?: string;
    /**
     * The name for the order.
     * @type {string}
     * @memberof OrderOut
     */
    name?: string;
    /**
     * The creation date of the order.
     * @type {Date}
     * @memberof OrderOut
     */
    createdAt?: Date;
    /**
     * The last updated date of the order.
     * @type {Date}
     * @memberof OrderOut
     */
    lastUpdatedAt?: Date;
    /**
     * 
     * @type {Array<ImageOut>}
     * @memberof OrderOut
     */
    images?: Array<ImageOut>;
    /**
     * The status of the order.
     * @type {string}
     * @memberof OrderOut
     */
    readonly status?: OrderOutStatusEnum;
    /**
     * The processing status for the order
     * @type {any}
     * @memberof OrderOut
     */
    readonly isProcessing?: any | null;
    /**
     * The processing status for the order
     * @type {any}
     * @memberof OrderOut
     */
    readonly isMerging?: any | null;
}


/**
 * @export
 */
export const OrderOutStatusEnum = {
    Waiting: 'waiting',
    Processing: 'processing',
    Processed: 'processed',
    Error: 'error'
} as const;
export type OrderOutStatusEnum = typeof OrderOutStatusEnum[keyof typeof OrderOutStatusEnum];


/**
 * Check if a given object implements the OrderOut interface.
 */
export function instanceOfOrderOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderOutFromJSON(json: any): OrderOut {
    return OrderOutFromJSONTyped(json, false);
}

export function OrderOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'lastUpdatedAt': !exists(json, 'last_updated_at') ? undefined : (new Date(json['last_updated_at'])),
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(ImageOutFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'isProcessing': !exists(json, 'is_processing') ? undefined : json['is_processing'],
        'isMerging': !exists(json, 'is_merging') ? undefined : json['is_merging'],
    };
}

export function OrderOutToJSON(value?: OrderOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order_id': value.orderId,
        'name': value.name,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'last_updated_at': value.lastUpdatedAt === undefined ? undefined : (value.lastUpdatedAt.toISOString()),
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(ImageOutToJSON)),
    };
}

