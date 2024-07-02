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
 * @interface Pagination
 */
export interface Pagination {
    /**
     * The amount of items per page of results.
     * @type {number}
     * @memberof Pagination
     */
    perPage?: number;
    /**
     * The offset token for the next page of results or null if it is the last page. Pass this to the `offset` parameter when loading the next page.
     * @type {string}
     * @memberof Pagination
     */
    nextOffset?: string;
}

/**
 * Check if a given object implements the Pagination interface.
 */
export function instanceOfPagination(value: object): value is Pagination {
    return true;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if (json == null) {
        return json;
    }
    return {
        
        'perPage': json['per_page'] == null ? undefined : json['per_page'],
        'nextOffset': json['next_offset'] == null ? undefined : json['next_offset'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'per_page': value['perPage'],
        'next_offset': value['nextOffset'],
    };
}

