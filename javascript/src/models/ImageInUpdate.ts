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
/**
 * 
 * @export
 * @interface ImageInUpdate
 */
export interface ImageInUpdate {
    /**
     * A rating between 0 and 5 on how good the image enhancmeent. Higher is better.
     * @type {number}
     * @memberof ImageInUpdate
     */
    rating?: number;
    /**
     * The version of the AI to use.
     * @type {number}
     * @memberof ImageInUpdate
     */
    aiVersion?: ImageInUpdateAiVersionEnum;
    /**
     * Enable the replacement of the original sky for a summer sky.
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    skyReplacement?: boolean;
    /**
     * Correct any vertical distortion in the image so that it appears straight.
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    verticalCorrection?: boolean;
    /**
     * Correct any lens distortion in the image.
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    lensCorrection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    vibrant?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    enhanceType?: ImageInUpdateEnhanceTypeEnum;
    /**
     * The amount of contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageInUpdate
     */
    contrastBoost?: ImageInUpdateContrastBoostEnum;
    /**
     * The amount of brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageInUpdate
     */
    brightnessBoost?: ImageInUpdateBrightnessBoostEnum;
    /**
     * The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageInUpdate
     */
    saturationLevel?: ImageInUpdateSaturationLevelEnum;
    /**
     * The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageInUpdate
     */
    sharpenLevel?: ImageInUpdateSharpenLevelEnum;
    /**
     * The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageInUpdate
     */
    denoiseLevel?: ImageInUpdateDenoiseLevelEnum;
    /**
     * The amount of clarity to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageInUpdate
     */
    clarityLevel?: ImageInUpdateClarityLevelEnum;
    /**
     * Whether to blur any faces or license plates in the image.
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    privacy?: boolean;
    /**
     * The type of sky to replace the original sky with. Options include: UK_SUMMER, UK_WINTER, USA_SUMMER
     * @type {string}
     * @memberof ImageInUpdate
     */
    skyType?: ImageInUpdateSkyTypeEnum;
    /**
     * The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, LOW_CLOUD_LOW_SAT, HIGH_CLOUD, EHOUSE
     * @type {string}
     * @memberof ImageInUpdate
     */
    cloudType?: ImageInUpdateCloudTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    contrastBoostInternal?: ImageInUpdateContrastBoostInternalEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    contrastBoostExternal?: ImageInUpdateContrastBoostExternalEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    brightnessBoostInternal?: ImageInUpdateBrightnessBoostInternalEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    brightnessBoostExternal?: ImageInUpdateBrightnessBoostExternalEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    saturationBoostLevel?: ImageInUpdateSaturationBoostLevelEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    skySaturationLevel?: ImageInUpdateSkySaturationLevelEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    imageName?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageInUpdate
     */
    orderId?: string;
    /**
     * The MIME type of the image i.e. image/jpeg, image/png, etc.
     * @type {string}
     * @memberof ImageInUpdate
     */
    contentType?: string;
    /**
     * Whether the image is a 360 image.
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    threesixty?: boolean;
    /**
     * Whether the image is a HDR bracket. An order_id must be provided when this is set to true.
     * @type {boolean}
     * @memberof ImageInUpdate
     */
    hdr?: boolean;
}


/**
 * @export
 */
export const ImageInUpdateAiVersionEnum = {
    NUMBER_1_DOT_0: 1.0,
    NUMBER_1_DOT_1: 1.1,
    NUMBER_3_DOT_0: 3.0,
    NUMBER_3_DOT_1: 3.1,
    NUMBER_4_DOT_0: 4.0
} as const;
export type ImageInUpdateAiVersionEnum = typeof ImageInUpdateAiVersionEnum[keyof typeof ImageInUpdateAiVersionEnum];

/**
 * @export
 */
export const ImageInUpdateEnhanceTypeEnum = {
    Property: 'property',
    PropertyUsa: 'property_usa'
} as const;
export type ImageInUpdateEnhanceTypeEnum = typeof ImageInUpdateEnhanceTypeEnum[keyof typeof ImageInUpdateEnhanceTypeEnum];

/**
 * @export
 */
export const ImageInUpdateContrastBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateContrastBoostEnum = typeof ImageInUpdateContrastBoostEnum[keyof typeof ImageInUpdateContrastBoostEnum];

/**
 * @export
 */
export const ImageInUpdateBrightnessBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateBrightnessBoostEnum = typeof ImageInUpdateBrightnessBoostEnum[keyof typeof ImageInUpdateBrightnessBoostEnum];

/**
 * @export
 */
export const ImageInUpdateSaturationLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateSaturationLevelEnum = typeof ImageInUpdateSaturationLevelEnum[keyof typeof ImageInUpdateSaturationLevelEnum];

/**
 * @export
 */
export const ImageInUpdateSharpenLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateSharpenLevelEnum = typeof ImageInUpdateSharpenLevelEnum[keyof typeof ImageInUpdateSharpenLevelEnum];

/**
 * @export
 */
export const ImageInUpdateDenoiseLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateDenoiseLevelEnum = typeof ImageInUpdateDenoiseLevelEnum[keyof typeof ImageInUpdateDenoiseLevelEnum];

/**
 * @export
 */
export const ImageInUpdateClarityLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateClarityLevelEnum = typeof ImageInUpdateClarityLevelEnum[keyof typeof ImageInUpdateClarityLevelEnum];

/**
 * @export
 */
export const ImageInUpdateSkyTypeEnum = {
    UkSummer: 'UK_SUMMER',
    UkWinter: 'UK_WINTER',
    UsaSummer: 'USA_SUMMER'
} as const;
export type ImageInUpdateSkyTypeEnum = typeof ImageInUpdateSkyTypeEnum[keyof typeof ImageInUpdateSkyTypeEnum];

/**
 * @export
 */
export const ImageInUpdateCloudTypeEnum = {
    Clear: 'CLEAR',
    LowCloud: 'LOW_CLOUD',
    LowCloudLowSat: 'LOW_CLOUD_LOW_SAT',
    HighCloud: 'HIGH_CLOUD',
    Ehouse: 'EHOUSE'
} as const;
export type ImageInUpdateCloudTypeEnum = typeof ImageInUpdateCloudTypeEnum[keyof typeof ImageInUpdateCloudTypeEnum];

/**
 * @export
 */
export const ImageInUpdateContrastBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateContrastBoostInternalEnum = typeof ImageInUpdateContrastBoostInternalEnum[keyof typeof ImageInUpdateContrastBoostInternalEnum];

/**
 * @export
 */
export const ImageInUpdateContrastBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateContrastBoostExternalEnum = typeof ImageInUpdateContrastBoostExternalEnum[keyof typeof ImageInUpdateContrastBoostExternalEnum];

/**
 * @export
 */
export const ImageInUpdateBrightnessBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateBrightnessBoostInternalEnum = typeof ImageInUpdateBrightnessBoostInternalEnum[keyof typeof ImageInUpdateBrightnessBoostInternalEnum];

/**
 * @export
 */
export const ImageInUpdateBrightnessBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateBrightnessBoostExternalEnum = typeof ImageInUpdateBrightnessBoostExternalEnum[keyof typeof ImageInUpdateBrightnessBoostExternalEnum];

/**
 * @export
 */
export const ImageInUpdateSaturationBoostLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateSaturationBoostLevelEnum = typeof ImageInUpdateSaturationBoostLevelEnum[keyof typeof ImageInUpdateSaturationBoostLevelEnum];

/**
 * @export
 */
export const ImageInUpdateSkySaturationLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;
export type ImageInUpdateSkySaturationLevelEnum = typeof ImageInUpdateSkySaturationLevelEnum[keyof typeof ImageInUpdateSkySaturationLevelEnum];


/**
 * Check if a given object implements the ImageInUpdate interface.
 */
export function instanceOfImageInUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageInUpdateFromJSON(json: any): ImageInUpdate {
    return ImageInUpdateFromJSONTyped(json, false);
}

export function ImageInUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageInUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'aiVersion': !exists(json, 'ai_version') ? undefined : json['ai_version'],
        'skyReplacement': !exists(json, 'sky_replacement') ? undefined : json['sky_replacement'],
        'verticalCorrection': !exists(json, 'vertical_correction') ? undefined : json['vertical_correction'],
        'lensCorrection': !exists(json, 'lens_correction') ? undefined : json['lens_correction'],
        'vibrant': !exists(json, 'vibrant') ? undefined : json['vibrant'],
        'enhanceType': !exists(json, 'enhance_type') ? undefined : json['enhance_type'],
        'contrastBoost': !exists(json, 'contrast_boost') ? undefined : json['contrast_boost'],
        'brightnessBoost': !exists(json, 'brightness_boost') ? undefined : json['brightness_boost'],
        'saturationLevel': !exists(json, 'saturation_level') ? undefined : json['saturation_level'],
        'sharpenLevel': !exists(json, 'sharpen_level') ? undefined : json['sharpen_level'],
        'denoiseLevel': !exists(json, 'denoise_level') ? undefined : json['denoise_level'],
        'clarityLevel': !exists(json, 'clarity_level') ? undefined : json['clarity_level'],
        'privacy': !exists(json, 'privacy') ? undefined : json['privacy'],
        'skyType': !exists(json, 'sky_type') ? undefined : json['sky_type'],
        'cloudType': !exists(json, 'cloud_type') ? undefined : json['cloud_type'],
        'contrastBoostInternal': !exists(json, 'contrast_boost_internal') ? undefined : json['contrast_boost_internal'],
        'contrastBoostExternal': !exists(json, 'contrast_boost_external') ? undefined : json['contrast_boost_external'],
        'brightnessBoostInternal': !exists(json, 'brightness_boost_internal') ? undefined : json['brightness_boost_internal'],
        'brightnessBoostExternal': !exists(json, 'brightness_boost_external') ? undefined : json['brightness_boost_external'],
        'saturationBoostLevel': !exists(json, 'saturation_boost_level') ? undefined : json['saturation_boost_level'],
        'skySaturationLevel': !exists(json, 'sky_saturation_level') ? undefined : json['sky_saturation_level'],
        'imageName': !exists(json, 'image_name') ? undefined : json['image_name'],
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'contentType': !exists(json, 'content_type') ? undefined : json['content_type'],
        'threesixty': !exists(json, 'threesixty') ? undefined : json['threesixty'],
        'hdr': !exists(json, 'hdr') ? undefined : json['hdr'],
    };
}

export function ImageInUpdateToJSON(value?: ImageInUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rating': value.rating,
        'ai_version': value.aiVersion,
        'sky_replacement': value.skyReplacement,
        'vertical_correction': value.verticalCorrection,
        'lens_correction': value.lensCorrection,
        'vibrant': value.vibrant,
        'enhance_type': value.enhanceType,
        'contrast_boost': value.contrastBoost,
        'brightness_boost': value.brightnessBoost,
        'saturation_level': value.saturationLevel,
        'sharpen_level': value.sharpenLevel,
        'denoise_level': value.denoiseLevel,
        'clarity_level': value.clarityLevel,
        'privacy': value.privacy,
        'sky_type': value.skyType,
        'cloud_type': value.cloudType,
        'contrast_boost_internal': value.contrastBoostInternal,
        'contrast_boost_external': value.contrastBoostExternal,
        'brightness_boost_internal': value.brightnessBoostInternal,
        'brightness_boost_external': value.brightnessBoostExternal,
        'saturation_boost_level': value.saturationBoostLevel,
        'sky_saturation_level': value.skySaturationLevel,
        'image_name': value.imageName,
        'order_id': value.orderId,
        'content_type': value.contentType,
        'threesixty': value.threesixty,
        'hdr': value.hdr,
    };
}

