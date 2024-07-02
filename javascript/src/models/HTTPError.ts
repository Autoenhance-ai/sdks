/* tslint:disable */
/* eslint-disable */
/**
 * Autoenhance API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HTTPError
 */
export interface HTTPError {
    /**
     * 
     * @type {object}
     * @memberof HTTPError
     */
    detail?: object;
    /**
     * 
     * @type {string}
     * @memberof HTTPError
     */
    message?: string;
}

/**
 * Check if a given object implements the HTTPError interface.
 */
export function instanceOfHTTPError(value: object): value is HTTPError {
    return true;
}

export function HTTPErrorFromJSON(json: any): HTTPError {
    return HTTPErrorFromJSONTyped(json, false);
}

export function HTTPErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): HTTPError {
    if (json == null) {
        return json;
    }
    return {
        
        'detail': json['detail'] == null ? undefined : json['detail'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function HTTPErrorToJSON(value?: HTTPError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'detail': value['detail'],
        'message': value['message'],
    };
}

