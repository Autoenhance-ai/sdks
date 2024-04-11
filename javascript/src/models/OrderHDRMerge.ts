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
 * @interface OrderHDRMerge
 */
export interface OrderHDRMerge {
    /**
     * 
     * @type {string}
     * @memberof OrderHDRMerge
     */
    aiVersion?: OrderHDRMergeAiVersionEnum;
    /**
     * The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version < 4.0, for >= 4.0 use WARM, NEUTRAL, or AUTHENTIC.
     * @type {string}
     * @memberof OrderHDRMerge
     */
    enhanceType?: OrderHDRMergeEnhanceTypeEnum;
    /**
     * Enable the replacement of the original sky for a summer sky.
     * @type {boolean}
     * @memberof OrderHDRMerge
     */
    skyReplacement?: boolean;
    /**
     * Correct any vertical distortion in the image so that it appears straight.
     * @type {boolean}
     * @memberof OrderHDRMerge
     */
    verticalCorrection?: boolean;
    /**
     * Correct any lens distortion in the image.
     * @type {boolean}
     * @memberof OrderHDRMerge
     */
    lensCorrection?: boolean;
    /**
     * The amount of contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    contrastBoost?: OrderHDRMergeContrastBoostEnum;
    /**
     * The amount of brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    brightnessBoost?: OrderHDRMergeBrightnessBoostEnum;
    /**
     * The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    saturationLevel?: OrderHDRMergeSaturationLevelEnum;
    /**
     * The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    sharpenLevel?: OrderHDRMergeSharpenLevelEnum;
    /**
     * The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    denoiseLevel?: OrderHDRMergeDenoiseLevelEnum;
    /**
     * The amount of clarity to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    clarityLevel?: OrderHDRMergeClarityLevelEnum;
    /**
     * Whether to blur any faces or license plates in the image.
     * @type {boolean}
     * @memberof OrderHDRMerge
     */
    privacy?: boolean;
    /**
     * Whether to pull the windows in the image (used with AI version >= 4.0).
     * @type {boolean}
     * @memberof OrderHDRMerge
     */
    windowPull?: boolean;
    /**
     * The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, HIGH_CLOUD
     * @type {string}
     * @memberof OrderHDRMerge
     */
    cloudType?: OrderHDRMergeCloudTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderHDRMerge
     */
    skySaturationLevel?: OrderHDRMergeSkySaturationLevelEnum;
    /**
     * The amount of internal contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    contrastBoostInternal?: OrderHDRMergeContrastBoostInternalEnum;
    /**
     * The amount of external contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    contrastBoostExternal?: OrderHDRMergeContrastBoostExternalEnum;
    /**
     * The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    brightnessBoostInternal?: OrderHDRMergeBrightnessBoostInternalEnum;
    /**
     * The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof OrderHDRMerge
     */
    brightnessBoostExternal?: OrderHDRMergeBrightnessBoostExternalEnum;
}


/**
 * @export
 */
export const OrderHDRMergeAiVersionEnum = {
    _11: '1.1',
    _30: '3.0',
    _31: '3.1',
    _32: '3.2',
    _33: '3.3',
    _40: '4.0',
    Null: 'null'
} as const;
export type OrderHDRMergeAiVersionEnum = typeof OrderHDRMergeAiVersionEnum[keyof typeof OrderHDRMergeAiVersionEnum];

/**
 * @export
 */
export const OrderHDRMergeEnhanceTypeEnum = {
    Property: 'property',
    PropertyUsa: 'property_usa',
    Warm: 'warm',
    Neutral: 'neutral',
    Authentic: 'authentic',
    Null: 'null'
} as const;
export type OrderHDRMergeEnhanceTypeEnum = typeof OrderHDRMergeEnhanceTypeEnum[keyof typeof OrderHDRMergeEnhanceTypeEnum];

/**
 * @export
 */
export const OrderHDRMergeContrastBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeContrastBoostEnum = typeof OrderHDRMergeContrastBoostEnum[keyof typeof OrderHDRMergeContrastBoostEnum];

/**
 * @export
 */
export const OrderHDRMergeBrightnessBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeBrightnessBoostEnum = typeof OrderHDRMergeBrightnessBoostEnum[keyof typeof OrderHDRMergeBrightnessBoostEnum];

/**
 * @export
 */
export const OrderHDRMergeSaturationLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeSaturationLevelEnum = typeof OrderHDRMergeSaturationLevelEnum[keyof typeof OrderHDRMergeSaturationLevelEnum];

/**
 * @export
 */
export const OrderHDRMergeSharpenLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeSharpenLevelEnum = typeof OrderHDRMergeSharpenLevelEnum[keyof typeof OrderHDRMergeSharpenLevelEnum];

/**
 * @export
 */
export const OrderHDRMergeDenoiseLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeDenoiseLevelEnum = typeof OrderHDRMergeDenoiseLevelEnum[keyof typeof OrderHDRMergeDenoiseLevelEnum];

/**
 * @export
 */
export const OrderHDRMergeClarityLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeClarityLevelEnum = typeof OrderHDRMergeClarityLevelEnum[keyof typeof OrderHDRMergeClarityLevelEnum];

/**
 * @export
 */
export const OrderHDRMergeCloudTypeEnum = {
    Clear: 'CLEAR',
    LowCloud: 'LOW_CLOUD',
    HighCloud: 'HIGH_CLOUD',
    Null: 'null'
} as const;
export type OrderHDRMergeCloudTypeEnum = typeof OrderHDRMergeCloudTypeEnum[keyof typeof OrderHDRMergeCloudTypeEnum];

/**
 * @export
 */
export const OrderHDRMergeSkySaturationLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeSkySaturationLevelEnum = typeof OrderHDRMergeSkySaturationLevelEnum[keyof typeof OrderHDRMergeSkySaturationLevelEnum];

/**
 * @export
 */
export const OrderHDRMergeContrastBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeContrastBoostInternalEnum = typeof OrderHDRMergeContrastBoostInternalEnum[keyof typeof OrderHDRMergeContrastBoostInternalEnum];

/**
 * @export
 */
export const OrderHDRMergeContrastBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeContrastBoostExternalEnum = typeof OrderHDRMergeContrastBoostExternalEnum[keyof typeof OrderHDRMergeContrastBoostExternalEnum];

/**
 * @export
 */
export const OrderHDRMergeBrightnessBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeBrightnessBoostInternalEnum = typeof OrderHDRMergeBrightnessBoostInternalEnum[keyof typeof OrderHDRMergeBrightnessBoostInternalEnum];

/**
 * @export
 */
export const OrderHDRMergeBrightnessBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type OrderHDRMergeBrightnessBoostExternalEnum = typeof OrderHDRMergeBrightnessBoostExternalEnum[keyof typeof OrderHDRMergeBrightnessBoostExternalEnum];


/**
 * Check if a given object implements the OrderHDRMerge interface.
 */
export function instanceOfOrderHDRMerge(value: object): boolean {
    return true;
}

export function OrderHDRMergeFromJSON(json: any): OrderHDRMerge {
    return OrderHDRMergeFromJSONTyped(json, false);
}

export function OrderHDRMergeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderHDRMerge {
    if (json == null) {
        return json;
    }
    return {
        
        'aiVersion': json['ai_version'] == null ? undefined : json['ai_version'],
        'enhanceType': json['enhance_type'] == null ? undefined : json['enhance_type'],
        'skyReplacement': json['sky_replacement'] == null ? undefined : json['sky_replacement'],
        'verticalCorrection': json['vertical_correction'] == null ? undefined : json['vertical_correction'],
        'lensCorrection': json['lens_correction'] == null ? undefined : json['lens_correction'],
        'contrastBoost': json['contrast_boost'] == null ? undefined : json['contrast_boost'],
        'brightnessBoost': json['brightness_boost'] == null ? undefined : json['brightness_boost'],
        'saturationLevel': json['saturation_level'] == null ? undefined : json['saturation_level'],
        'sharpenLevel': json['sharpen_level'] == null ? undefined : json['sharpen_level'],
        'denoiseLevel': json['denoise_level'] == null ? undefined : json['denoise_level'],
        'clarityLevel': json['clarity_level'] == null ? undefined : json['clarity_level'],
        'privacy': json['privacy'] == null ? undefined : json['privacy'],
        'windowPull': json['window_pull'] == null ? undefined : json['window_pull'],
        'cloudType': json['cloud_type'] == null ? undefined : json['cloud_type'],
        'skySaturationLevel': json['sky_saturation_level'] == null ? undefined : json['sky_saturation_level'],
        'contrastBoostInternal': json['contrast_boost_internal'] == null ? undefined : json['contrast_boost_internal'],
        'contrastBoostExternal': json['contrast_boost_external'] == null ? undefined : json['contrast_boost_external'],
        'brightnessBoostInternal': json['brightness_boost_internal'] == null ? undefined : json['brightness_boost_internal'],
        'brightnessBoostExternal': json['brightness_boost_external'] == null ? undefined : json['brightness_boost_external'],
    };
}

export function OrderHDRMergeToJSON(value?: OrderHDRMerge | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ai_version': value['aiVersion'],
        'enhance_type': value['enhanceType'],
        'sky_replacement': value['skyReplacement'],
        'vertical_correction': value['verticalCorrection'],
        'lens_correction': value['lensCorrection'],
        'contrast_boost': value['contrastBoost'],
        'brightness_boost': value['brightnessBoost'],
        'saturation_level': value['saturationLevel'],
        'sharpen_level': value['sharpenLevel'],
        'denoise_level': value['denoiseLevel'],
        'clarity_level': value['clarityLevel'],
        'privacy': value['privacy'],
        'window_pull': value['windowPull'],
        'cloud_type': value['cloudType'],
        'sky_saturation_level': value['skySaturationLevel'],
        'contrast_boost_internal': value['contrastBoostInternal'],
        'contrast_boost_external': value['contrastBoostExternal'],
        'brightness_boost_internal': value['brightnessBoostInternal'],
        'brightness_boost_external': value['brightnessBoostExternal'],
    };
}

