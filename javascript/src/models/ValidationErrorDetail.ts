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

import { exists, mapValues } from '../runtime';
import type { ValidationErrorDetailLocation } from './ValidationErrorDetailLocation';
import {
    ValidationErrorDetailLocationFromJSON,
    ValidationErrorDetailLocationFromJSONTyped,
    ValidationErrorDetailLocationToJSON,
} from './ValidationErrorDetailLocation';

/**
 * 
 * @export
 * @interface ValidationErrorDetail
 */
export interface ValidationErrorDetail {
    /**
     * 
     * @type {ValidationErrorDetailLocation}
     * @memberof ValidationErrorDetail
     */
    location?: ValidationErrorDetailLocation;
}

/**
 * Check if a given object implements the ValidationErrorDetail interface.
 */
export function instanceOfValidationErrorDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ValidationErrorDetailFromJSON(json: any): ValidationErrorDetail {
    return ValidationErrorDetailFromJSONTyped(json, false);
}

export function ValidationErrorDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': !exists(json, '&lt;location&gt;') ? undefined : ValidationErrorDetailLocationFromJSON(json['&lt;location&gt;']),
    };
}

export function ValidationErrorDetailToJSON(value?: ValidationErrorDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '&lt;location&gt;': ValidationErrorDetailLocationToJSON(value.location),
    };
}

