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
 * @interface ImageCreatedOut
 */
export interface ImageCreatedOut {
    /**
     * The version of the AI model to use for enhancing the image. Versions ending in an .x will use the latest minor version as soon as it's published.
     * @type {string}
     * @memberof ImageCreatedOut
     */
    aiVersion?: string;
    /**
     * The amount of brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    brightnessBoost?: ImageCreatedOutBrightnessBoostEnum | null;
    /**
     * The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    brightnessBoostExternal?: ImageCreatedOutBrightnessBoostExternalEnum | null;
    /**
     * The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    brightnessBoostInternal?: ImageCreatedOutBrightnessBoostInternalEnum | null;
    /**
     * The amount of clarity to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    clarityLevel?: ImageCreatedOutClarityLevelEnum | null;
    /**
     * The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, HIGH_CLOUD
     * @type {string}
     * @memberof ImageCreatedOut
     */
    cloudType?: ImageCreatedOutCloudTypeEnum | null;
    /**
     * The amount of contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    contrastBoost?: ImageCreatedOutContrastBoostEnum | null;
    /**
     * The amount of external contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    contrastBoostExternal?: ImageCreatedOutContrastBoostExternalEnum | null;
    /**
     * The amount of internal contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    contrastBoostInternal?: ImageCreatedOutContrastBoostInternalEnum | null;
    /**
     * The date the image was registered with Autoenhance.
     * @type {number}
     * @memberof ImageCreatedOut
     */
    dateAdded?: number;
    /**
     * The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    denoiseLevel?: ImageCreatedOutDenoiseLevelEnum | null;
    /**
     * Whether image has been already downloaded and paid for.
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    downloaded?: boolean;
    /**
     * Whether to enhance the image.
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    enhance?: boolean;
    /**
     * The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version < 4.0, for >= 4.0 use WARM, NEUTRAL, or AUTHENTIC.
     * @type {string}
     * @memberof ImageCreatedOut
     */
    enhanceType?: ImageCreatedOutEnhanceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ImageCreatedOut
     */
    imageId?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageCreatedOut
     */
    imageName?: string;
    /**
     * The image type for the image.
     * @type {string}
     * @memberof ImageCreatedOut
     */
    imageType?: string;
    /**
     * Whether the image is a 360° image
     * @type {any}
     * @memberof ImageCreatedOut
     */
    readonly isThreesixty?: any | null;
    /**
     * Correct any lens distortion in the image.
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    lensCorrection?: boolean;
    /**
     * Metadata for the image.
     * @type {object}
     * @memberof ImageCreatedOut
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof ImageCreatedOut
     */
    orderId?: string;
    /**
     * Whether to blur any faces or license plates in the image.
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    privacy?: boolean | null;
    /**
     * A rating between 0 and 5 on how good the image enhancmeent. Higher is better.
     * @type {number}
     * @memberof ImageCreatedOut
     */
    rating?: number;
    /**
     * The signed AWS S3 URL for the image to be uploaded to.
     * @type {any}
     * @memberof ImageCreatedOut
     */
    readonly s3PutObjectUrl?: any | null;
    /**
     * The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    saturationLevel?: ImageCreatedOutSaturationLevelEnum | null;
    /**
     * The detected scene of the image i.e garden, patio, kitchen, etc.
     * @type {string}
     * @memberof ImageCreatedOut
     */
    scene?: string;
    /**
     * The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH
     * @type {string}
     * @memberof ImageCreatedOut
     */
    sharpenLevel?: ImageCreatedOutSharpenLevelEnum | null;
    /**
     * Whether the sky replacement feature was enabled for the image.
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    skyReplacement?: boolean;
    /**
     * The status of the order.
     * @type {string}
     * @memberof ImageCreatedOut
     */
    readonly status?: ImageCreatedOutStatusEnum;
    /**
     * Reason for the image's current status
     * @type {any}
     * @memberof ImageCreatedOut
     */
    readonly statusReason?: any | null;
    /**
     * The user ID of the user who uploaded (owns) the image.
     * @type {string}
     * @memberof ImageCreatedOut
     */
    userId?: string;
    /**
     * Whether the vertical correction feature was enabled for the image.
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    verticalCorrection?: boolean;
    /**
     * Whether to pull the windows in the image (used with AI version >= 4.0).
     * @type {boolean}
     * @memberof ImageCreatedOut
     */
    windowPull?: boolean | null;
}


/**
 * @export
 */
export const ImageCreatedOutBrightnessBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutBrightnessBoostEnum = typeof ImageCreatedOutBrightnessBoostEnum[keyof typeof ImageCreatedOutBrightnessBoostEnum];

/**
 * @export
 */
export const ImageCreatedOutBrightnessBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutBrightnessBoostExternalEnum = typeof ImageCreatedOutBrightnessBoostExternalEnum[keyof typeof ImageCreatedOutBrightnessBoostExternalEnum];

/**
 * @export
 */
export const ImageCreatedOutBrightnessBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutBrightnessBoostInternalEnum = typeof ImageCreatedOutBrightnessBoostInternalEnum[keyof typeof ImageCreatedOutBrightnessBoostInternalEnum];

/**
 * @export
 */
export const ImageCreatedOutClarityLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutClarityLevelEnum = typeof ImageCreatedOutClarityLevelEnum[keyof typeof ImageCreatedOutClarityLevelEnum];

/**
 * @export
 */
export const ImageCreatedOutCloudTypeEnum = {
    Clear: 'CLEAR',
    LowCloud: 'LOW_CLOUD',
    HighCloud: 'HIGH_CLOUD',
    Null: 'null'
} as const;
export type ImageCreatedOutCloudTypeEnum = typeof ImageCreatedOutCloudTypeEnum[keyof typeof ImageCreatedOutCloudTypeEnum];

/**
 * @export
 */
export const ImageCreatedOutContrastBoostEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutContrastBoostEnum = typeof ImageCreatedOutContrastBoostEnum[keyof typeof ImageCreatedOutContrastBoostEnum];

/**
 * @export
 */
export const ImageCreatedOutContrastBoostExternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutContrastBoostExternalEnum = typeof ImageCreatedOutContrastBoostExternalEnum[keyof typeof ImageCreatedOutContrastBoostExternalEnum];

/**
 * @export
 */
export const ImageCreatedOutContrastBoostInternalEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutContrastBoostInternalEnum = typeof ImageCreatedOutContrastBoostInternalEnum[keyof typeof ImageCreatedOutContrastBoostInternalEnum];

/**
 * @export
 */
export const ImageCreatedOutDenoiseLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutDenoiseLevelEnum = typeof ImageCreatedOutDenoiseLevelEnum[keyof typeof ImageCreatedOutDenoiseLevelEnum];

/**
 * @export
 */
export const ImageCreatedOutEnhanceTypeEnum = {
    Property: 'property',
    PropertyUsa: 'property_usa',
    Warm: 'warm',
    Neutral: 'neutral',
    Authentic: 'authentic'
} as const;
export type ImageCreatedOutEnhanceTypeEnum = typeof ImageCreatedOutEnhanceTypeEnum[keyof typeof ImageCreatedOutEnhanceTypeEnum];

/**
 * @export
 */
export const ImageCreatedOutSaturationLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutSaturationLevelEnum = typeof ImageCreatedOutSaturationLevelEnum[keyof typeof ImageCreatedOutSaturationLevelEnum];

/**
 * @export
 */
export const ImageCreatedOutSharpenLevelEnum = {
    None: 'NONE',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Null: 'null'
} as const;
export type ImageCreatedOutSharpenLevelEnum = typeof ImageCreatedOutSharpenLevelEnum[keyof typeof ImageCreatedOutSharpenLevelEnum];

/**
 * @export
 */
export const ImageCreatedOutStatusEnum = {
    Waiting: 'waiting',
    Processing: 'processing',
    Processed: 'processed',
    Error: 'error',
    Expired: 'expired'
} as const;
export type ImageCreatedOutStatusEnum = typeof ImageCreatedOutStatusEnum[keyof typeof ImageCreatedOutStatusEnum];


/**
 * Check if a given object implements the ImageCreatedOut interface.
 */
export function instanceOfImageCreatedOut(value: object): value is ImageCreatedOut {
    return true;
}

export function ImageCreatedOutFromJSON(json: any): ImageCreatedOut {
    return ImageCreatedOutFromJSONTyped(json, false);
}

export function ImageCreatedOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageCreatedOut {
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
        'imageId': json['image_id'] == null ? undefined : json['image_id'],
        'imageName': json['image_name'] == null ? undefined : json['image_name'],
        'imageType': json['image_type'] == null ? undefined : json['image_type'],
        'isThreesixty': json['is_threesixty'] == null ? undefined : json['is_threesixty'],
        'lensCorrection': json['lens_correction'] == null ? undefined : json['lens_correction'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'orderId': json['order_id'] == null ? undefined : json['order_id'],
        'privacy': json['privacy'] == null ? undefined : json['privacy'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        's3PutObjectUrl': json['s3PutObjectUrl'] == null ? undefined : json['s3PutObjectUrl'],
        'saturationLevel': json['saturation_level'] == null ? undefined : json['saturation_level'],
        'scene': json['scene'] == null ? undefined : json['scene'],
        'sharpenLevel': json['sharpen_level'] == null ? undefined : json['sharpen_level'],
        'skyReplacement': json['sky_replacement'] == null ? undefined : json['sky_replacement'],
        'status': json['status'] == null ? undefined : json['status'],
        'statusReason': json['status_reason'] == null ? undefined : json['status_reason'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'verticalCorrection': json['vertical_correction'] == null ? undefined : json['vertical_correction'],
        'windowPull': json['window_pull'] == null ? undefined : json['window_pull'],
    };
}

export function ImageCreatedOutToJSON(value?: Omit<ImageCreatedOut, 'is_threesixty'|'s3PutObjectUrl'|'status'|'status_reason'> | null): any {
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
        'image_id': value['imageId'],
        'image_name': value['imageName'],
        'image_type': value['imageType'],
        'lens_correction': value['lensCorrection'],
        'metadata': value['metadata'],
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

