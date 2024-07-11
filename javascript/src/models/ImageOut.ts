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
 * @interface ImageOut
 */
export interface ImageOut {
    /**
     * The version of the AI model to use for enhancing the image.
     * @type {string}
     * @memberof ImageOut
     */
    aiVersion?: string;
    /**
     * The amount of brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    brightnessBoost?: ImageOutBrightnessBoostEnum | null;
    /**
     * The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    brightnessBoostExternal?: ImageOutBrightnessBoostExternalEnum | null;
    /**
     * The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    brightnessBoostInternal?: ImageOutBrightnessBoostInternalEnum | null;
    /**
     * The amount of clarity to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    clarityLevel?: ImageOutClarityLevelEnum | null;
    /**
     * The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, HIGH_CLOUD
     * @type {string}
     * @memberof ImageOut
     */
    cloudType?: ImageOutCloudTypeEnum | null;
    /**
     * The amount of contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    contrastBoost?: ImageOutContrastBoostEnum | null;
    /**
     * The amount of external contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    contrastBoostExternal?: ImageOutContrastBoostExternalEnum | null;
    /**
     * The amount of internal contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    contrastBoostInternal?: ImageOutContrastBoostInternalEnum | null;
    /**
     * The date the image was registered with Autoenhance.
     * @type {number}
     * @memberof ImageOut
     */
    dateAdded?: number;
    /**
     * The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    denoiseLevel?: ImageOutDenoiseLevelEnum | null;
    /**
     * Whether image has been already downloaded and paid for.
     * @type {boolean}
     * @memberof ImageOut
     */
    downloaded?: boolean;
    /**
     * Whether to enhance the image.
     * @type {boolean}
     * @memberof ImageOut
     */
    enhance?: boolean;
    /**
     * The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version < 4.0, for >= 4.0 use WARM, NEUTRAL, or AUTHENTIC.
     * @type {string}
     * @memberof ImageOut
     */
    enhanceType?: ImageOutEnhanceTypeEnum;
    /**
     * Whether the image has been enhanced.
     * @type {boolean}
     * @memberof ImageOut
     */
    enhanced?: boolean;
    /**
     * Whether the image has an error.
     * @type {boolean}
     * @memberof ImageOut
     */
    error?: boolean;
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
    imageName?: string;
    /**
     * The image type for the image.
     * @type {string}
     * @memberof ImageOut
     */
    imageType?: string;
    /**
     * Whether the image is a 360° image
     * @type {any}
     * @memberof ImageOut
     */
    readonly isThreesixty?: any | null;
    /**
     * Correct any lens distortion in the image.
     * @type {boolean}
     * @memberof ImageOut
     */
    lensCorrection?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImageOut
     */
    orderId?: string;
    /**
     * Whether to blur any faces or license plates in the image.
     * @type {boolean}
     * @memberof ImageOut
     */
    privacy?: boolean | null;
    /**
     * A rating between 0 and 5 on how good the image enhancmeent. Higher is better.
     * @type {number}
     * @memberof ImageOut
     */
    rating?: number;
    /**
     * The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    saturationLevel?: ImageOutSaturationLevelEnum | null;
    /**
     * The detected scene of the image i.e garden, patio, kitchen, etc.
     * @type {string}
     * @memberof ImageOut
     */
    scene?: string;
    /**
     * The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageOut
     */
    sharpenLevel?: ImageOutSharpenLevelEnum | null;
    /**
     * Whether the sky replacement feature was enabled for the image.
     * @type {boolean}
     * @memberof ImageOut
     */
    skyReplacement?: boolean;
    /**
     * The status of the order.
     * @type {string}
     * @memberof ImageOut
     */
    readonly status?: ImageOutStatusEnum;
    /**
     * The user ID of the user who uploaded (owns) the image.
     * @type {string}
     * @memberof ImageOut
     */
    userId?: string;
    /**
     * Whether the vertical correction feature was enabled for the image.
     * @type {boolean}
     * @memberof ImageOut
     */
    verticalCorrection?: boolean;
    /**
     * Whether to pull the windows in the image (used with AI version >= 4.0).
     * @type {boolean}
     * @memberof ImageOut
     */
    windowPull?: boolean | null;
}


/**
 * @export
 */
export const ImageOutBrightnessBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutBrightnessBoostEnum = typeof ImageOutBrightnessBoostEnum[keyof typeof ImageOutBrightnessBoostEnum];

/**
 * @export
 */
export const ImageOutBrightnessBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutBrightnessBoostExternalEnum = typeof ImageOutBrightnessBoostExternalEnum[keyof typeof ImageOutBrightnessBoostExternalEnum];

/**
 * @export
 */
export const ImageOutBrightnessBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutBrightnessBoostInternalEnum = typeof ImageOutBrightnessBoostInternalEnum[keyof typeof ImageOutBrightnessBoostInternalEnum];

/**
 * @export
 */
export const ImageOutClarityLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutClarityLevelEnum = typeof ImageOutClarityLevelEnum[keyof typeof ImageOutClarityLevelEnum];

/**
 * @export
 */
export const ImageOutCloudTypeEnum = {
    Clear: 'CLEAR',
    LowCloud: 'LOW_CLOUD',
    HighCloud: 'HIGH_CLOUD',
    Null: 'null'
} as const;
export type ImageOutCloudTypeEnum = typeof ImageOutCloudTypeEnum[keyof typeof ImageOutCloudTypeEnum];

/**
 * @export
 */
export const ImageOutContrastBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutContrastBoostEnum = typeof ImageOutContrastBoostEnum[keyof typeof ImageOutContrastBoostEnum];

/**
 * @export
 */
export const ImageOutContrastBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutContrastBoostExternalEnum = typeof ImageOutContrastBoostExternalEnum[keyof typeof ImageOutContrastBoostExternalEnum];

/**
 * @export
 */
export const ImageOutContrastBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutContrastBoostInternalEnum = typeof ImageOutContrastBoostInternalEnum[keyof typeof ImageOutContrastBoostInternalEnum];

/**
 * @export
 */
export const ImageOutDenoiseLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutDenoiseLevelEnum = typeof ImageOutDenoiseLevelEnum[keyof typeof ImageOutDenoiseLevelEnum];

/**
 * @export
 */
export const ImageOutEnhanceTypeEnum = {
    Property: 'property',
    PropertyUsa: 'property_usa',
    Warm: 'warm',
    Neutral: 'neutral',
    Authentic: 'authentic'
} as const;
export type ImageOutEnhanceTypeEnum = typeof ImageOutEnhanceTypeEnum[keyof typeof ImageOutEnhanceTypeEnum];

/**
 * @export
 */
export const ImageOutSaturationLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutSaturationLevelEnum = typeof ImageOutSaturationLevelEnum[keyof typeof ImageOutSaturationLevelEnum];

/**
 * @export
 */
export const ImageOutSharpenLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageOutSharpenLevelEnum = typeof ImageOutSharpenLevelEnum[keyof typeof ImageOutSharpenLevelEnum];

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
export function instanceOfImageOut(value: object): value is ImageOut {
    return true;
}

export function ImageOutFromJSON(json: any): ImageOut {
    return ImageOutFromJSONTyped(json, false);
}

export function ImageOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageOut {
    if (json == null) {
        return json;
    }
    return {
        
        'aiVersion': json['ai_version'] == null ? undefined : json['ai_version'],
        'brightnessBoost': json['brightness_boost'] == null ? undefined : json['brightness_boost'],
        'brightnessBoostExternal': json['brightness_boost_external'] == null ? undefined : json['brightness_boost_external'],
        'brightnessBoostInternal': json['brightness_boost_internal'] == null ? undefined : json['brightness_boost_internal'],
        'clarityLevel': json['clarity_level'] == null ? undefined : json['clarity_level'],
        'cloudType': json['cloud_type'] == null ? undefined : json['cloud_type'],
        'contrastBoost': json['contrast_boost'] == null ? undefined : json['contrast_boost'],
        'contrastBoostExternal': json['contrast_boost_external'] == null ? undefined : json['contrast_boost_external'],
        'contrastBoostInternal': json['contrast_boost_internal'] == null ? undefined : json['contrast_boost_internal'],
        'dateAdded': json['date_added'] == null ? undefined : json['date_added'],
        'denoiseLevel': json['denoise_level'] == null ? undefined : json['denoise_level'],
        'downloaded': json['downloaded'] == null ? undefined : json['downloaded'],
        'enhance': json['enhance'] == null ? undefined : json['enhance'],
        'enhanceType': json['enhance_type'] == null ? undefined : json['enhance_type'],
        'enhanced': json['enhanced'] == null ? undefined : json['enhanced'],
        'error': json['error'] == null ? undefined : json['error'],
        'imageId': json['image_id'] == null ? undefined : json['image_id'],
        'imageName': json['image_name'] == null ? undefined : json['image_name'],
        'imageType': json['image_type'] == null ? undefined : json['image_type'],
        'isThreesixty': json['is_threesixty'] == null ? undefined : json['is_threesixty'],
        'lensCorrection': json['lens_correction'] == null ? undefined : json['lens_correction'],
        'orderId': json['order_id'] == null ? undefined : json['order_id'],
        'privacy': json['privacy'] == null ? undefined : json['privacy'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'saturationLevel': json['saturation_level'] == null ? undefined : json['saturation_level'],
        'scene': json['scene'] == null ? undefined : json['scene'],
        'sharpenLevel': json['sharpen_level'] == null ? undefined : json['sharpen_level'],
        'skyReplacement': json['sky_replacement'] == null ? undefined : json['sky_replacement'],
        'status': json['status'] == null ? undefined : json['status'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'verticalCorrection': json['vertical_correction'] == null ? undefined : json['vertical_correction'],
        'windowPull': json['window_pull'] == null ? undefined : json['window_pull'],
    };
}

export function ImageOutToJSON(value?: Omit<ImageOut, 'is_threesixty'|'status'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ai_version': value['aiVersion'],
        'brightness_boost': value['brightnessBoost'],
        'brightness_boost_external': value['brightnessBoostExternal'],
        'brightness_boost_internal': value['brightnessBoostInternal'],
        'clarity_level': value['clarityLevel'],
        'cloud_type': value['cloudType'],
        'contrast_boost': value['contrastBoost'],
        'contrast_boost_external': value['contrastBoostExternal'],
        'contrast_boost_internal': value['contrastBoostInternal'],
        'date_added': value['dateAdded'],
        'denoise_level': value['denoiseLevel'],
        'downloaded': value['downloaded'],
        'enhance': value['enhance'],
        'enhance_type': value['enhanceType'],
        'enhanced': value['enhanced'],
        'error': value['error'],
        'image_id': value['imageId'],
        'image_name': value['imageName'],
        'image_type': value['imageType'],
        'lens_correction': value['lensCorrection'],
        'order_id': value['orderId'],
        'privacy': value['privacy'],
        'rating': value['rating'],
        'saturation_level': value['saturationLevel'],
        'scene': value['scene'],
        'sharpen_level': value['sharpenLevel'],
        'sky_replacement': value['skyReplacement'],
        'user_id': value['userId'],
        'vertical_correction': value['verticalCorrection'],
        'window_pull': value['windowPull'],
    };
}

