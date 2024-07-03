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
 * @interface ReportIn
 */
export interface ReportIn {
    /**
     * A list of categories to be reported.
     * @type {Array<string>}
     * @memberof ReportIn
     */
    categories: Array<ReportInCategoriesEnum>;
    /**
     * A comment to be sent along with the report.
     * @type {string}
     * @memberof ReportIn
     */
    comment?: string;
    /**
     * A rating between 0 and 5 on how good the image enhancmeent. Higher is better.
     * @type {number}
     * @memberof ReportIn
     */
    score?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportIn
     */
    source?: ReportInSourceEnum;
}


/**
 * @export
 */
export const ReportInCategoriesEnum = {
    AutoPrivacy: 'AUTO_PRIVACY',
    Colour: 'COLOUR',
    Contrast: 'CONTRAST',
    Download: 'DOWNLOAD',
    DynamicRange: 'DYNAMIC_RANGE',
    Exposure: 'EXPOSURE',
    Hdr: 'HDR',
    ImageQuality: 'IMAGE_QUALITY',
    ItemRemoval: 'ITEM_REMOVAL',
    LensCorrection: 'LENS_CORRECTION',
    NoComplaints: 'NO_COMPLAINTS',
    Noise: 'NOISE',
    Other: 'OTHER',
    PerspectiveCorrection: 'PERSPECTIVE_CORRECTION',
    Processing: 'PROCESSING',
    Sharpness: 'SHARPNESS',
    SkyReplacement: 'SKY_REPLACEMENT',
    WhiteBalance: 'WHITE_BALANCE',
    WindowPull: 'WINDOW_PULL',
    Privacy: 'PRIVACY'
} as const;
export type ReportInCategoriesEnum = typeof ReportInCategoriesEnum[keyof typeof ReportInCategoriesEnum];

/**
 * @export
 */
export const ReportInSourceEnum = {
    Webapp: 'WEBAPP',
    Api: 'API'
} as const;
export type ReportInSourceEnum = typeof ReportInSourceEnum[keyof typeof ReportInSourceEnum];


/**
 * Check if a given object implements the ReportIn interface.
 */
export function instanceOfReportIn(value: object): value is ReportIn {
    if (!('categories' in value) || value['categories'] === undefined) return false;
    return true;
}

export function ReportInFromJSON(json: any): ReportIn {
    return ReportInFromJSONTyped(json, false);
}

export function ReportInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportIn {
    if (json == null) {
        return json;
    }
    return {
        
        'categories': json['categories'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'score': json['score'] == null ? undefined : json['score'],
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function ReportInToJSON(value?: ReportIn | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'categories': value['categories'],
        'comment': value['comment'],
        'score': value['score'],
        'source': value['source'],
    };
}

