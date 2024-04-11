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
import type { ValidationErrorDetail } from './ValidationErrorDetail';
import {
    ValidationErrorDetailFromJSON,
    ValidationErrorDetailFromJSONTyped,
    ValidationErrorDetailToJSON,
} from './ValidationErrorDetail';

/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {ValidationErrorDetail}
     * @memberof ValidationError
     */
    detail?: ValidationErrorDetail;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    message?: string;
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    return true;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if (json == null) {
        return json;
    }
    return {
        
        'detail': json['detail'] == null ? undefined : ValidationErrorDetailFromJSON(json['detail']),
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ValidationErrorToJSON(value?: ValidationError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'detail': ValidationErrorDetailToJSON(value['detail']),
        'message': value['message'],
    };
}

