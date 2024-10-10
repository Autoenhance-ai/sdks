# coding: utf-8

"""
    Autoenhance API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: v3
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class ImageIn(BaseModel):
    """
    ImageIn
    """ # noqa: E501
    ai_version: Optional[StrictStr] = Field(default=None, description="The version of the AI model to use for enhancing the image. Versions ending in an .x will use the latest minor version as soon as it's published.")
    brightness_boost: Optional[StrictStr] = Field(default=None, description="The amount of brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    brightness_boost_external: Optional[StrictStr] = Field(default=None, description="The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    brightness_boost_internal: Optional[StrictStr] = Field(default=None, description="The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    clarity_level: Optional[StrictStr] = Field(default=None, description="The amount of clarity to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    cloud_type: Optional[StrictStr] = Field(default=None, description="The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, HIGH_CLOUD")
    content_type: Optional[StrictStr] = Field(default=None, description="The MIME type of the image i.e. image/jpeg, image/png, etc.")
    contrast_boost: Optional[StrictStr] = Field(default=None, description="The amount of contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    contrast_boost_external: Optional[StrictStr] = Field(default=None, description="The amount of external contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    contrast_boost_internal: Optional[StrictStr] = Field(default=None, description="The amount of internal contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    denoise_level: Optional[StrictStr] = Field(default=None, description="The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    enhance: Optional[StrictBool] = Field(default=True, description="Whether to enhance the image.")
    enhance_type: Optional[StrictStr] = Field(default=None, description="The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version < 4.0, for >= 4.0 use WARM, NEUTRAL, or AUTHENTIC.")
    hdr: Optional[StrictBool] = Field(default=None, description="Whether the image is a HDR bracket. An order_id must be provided when this is set to true.")
    image_name: StrictStr
    lens_correction: Optional[StrictBool] = Field(default=True, description="Correct any lens distortion in the image.")
    order_id: Optional[StrictStr] = None
    privacy: Optional[StrictBool] = Field(default=None, description="Whether to blur any faces or license plates in the image.")
    rating: Optional[Annotated[int, Field(le=5, strict=True, ge=0)]] = Field(default=None, description="A rating between 0 and 5 on how good the image enhancmeent. Higher is better.")
    saturation_level: Optional[StrictStr] = Field(default=None, description="The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    sharpen_level: Optional[StrictStr] = Field(default=None, description="The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH")
    sky_replacement: Optional[StrictBool] = Field(default=None, description="Enable the replacement of the original sky for a summer sky.")
    threesixty: Optional[StrictBool] = Field(default=None, description="Whether the image is a 360 image.")
    vertical_correction: Optional[StrictBool] = Field(default=True, description="Correct any vertical distortion in the image so that it appears straight.")
    window_pull: Optional[StrictBool] = Field(default=None, description="Whether to pull the windows in the image (used with AI version >= 4.0).")
    __properties: ClassVar[List[str]] = ["ai_version", "brightness_boost", "brightness_boost_external", "brightness_boost_internal", "clarity_level", "cloud_type", "content_type", "contrast_boost", "contrast_boost_external", "contrast_boost_internal", "denoise_level", "enhance", "enhance_type", "hdr", "image_name", "lens_correction", "order_id", "privacy", "rating", "saturation_level", "sharpen_level", "sky_replacement", "threesixty", "vertical_correction", "window_pull"]

    @field_validator('brightness_boost')
    def brightness_boost_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('brightness_boost_external')
    def brightness_boost_external_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('brightness_boost_internal')
    def brightness_boost_internal_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('clarity_level')
    def clarity_level_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('cloud_type')
    def cloud_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['CLEAR', 'LOW_CLOUD', 'HIGH_CLOUD', 'null']):
            raise ValueError("must be one of enum values ('CLEAR', 'LOW_CLOUD', 'HIGH_CLOUD', 'null')")
        return value

    @field_validator('contrast_boost')
    def contrast_boost_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('contrast_boost_external')
    def contrast_boost_external_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('contrast_boost_internal')
    def contrast_boost_internal_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('denoise_level')
    def denoise_level_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('enhance_type')
    def enhance_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['property', 'property_usa', 'warm', 'neutral', 'authentic']):
            raise ValueError("must be one of enum values ('property', 'property_usa', 'warm', 'neutral', 'authentic')")
        return value

    @field_validator('saturation_level')
    def saturation_level_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    @field_validator('sharpen_level')
    def sharpen_level_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'null']):
            raise ValueError("must be one of enum values ('NONE', 'LOW', 'MEDIUM', 'HIGH', 'null')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ImageIn from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # set to None if brightness_boost (nullable) is None
        # and model_fields_set contains the field
        if self.brightness_boost is None and "brightness_boost" in self.model_fields_set:
            _dict['brightness_boost'] = None

        # set to None if brightness_boost_external (nullable) is None
        # and model_fields_set contains the field
        if self.brightness_boost_external is None and "brightness_boost_external" in self.model_fields_set:
            _dict['brightness_boost_external'] = None

        # set to None if brightness_boost_internal (nullable) is None
        # and model_fields_set contains the field
        if self.brightness_boost_internal is None and "brightness_boost_internal" in self.model_fields_set:
            _dict['brightness_boost_internal'] = None

        # set to None if clarity_level (nullable) is None
        # and model_fields_set contains the field
        if self.clarity_level is None and "clarity_level" in self.model_fields_set:
            _dict['clarity_level'] = None

        # set to None if cloud_type (nullable) is None
        # and model_fields_set contains the field
        if self.cloud_type is None and "cloud_type" in self.model_fields_set:
            _dict['cloud_type'] = None

        # set to None if contrast_boost (nullable) is None
        # and model_fields_set contains the field
        if self.contrast_boost is None and "contrast_boost" in self.model_fields_set:
            _dict['contrast_boost'] = None

        # set to None if contrast_boost_external (nullable) is None
        # and model_fields_set contains the field
        if self.contrast_boost_external is None and "contrast_boost_external" in self.model_fields_set:
            _dict['contrast_boost_external'] = None

        # set to None if contrast_boost_internal (nullable) is None
        # and model_fields_set contains the field
        if self.contrast_boost_internal is None and "contrast_boost_internal" in self.model_fields_set:
            _dict['contrast_boost_internal'] = None

        # set to None if denoise_level (nullable) is None
        # and model_fields_set contains the field
        if self.denoise_level is None and "denoise_level" in self.model_fields_set:
            _dict['denoise_level'] = None

        # set to None if privacy (nullable) is None
        # and model_fields_set contains the field
        if self.privacy is None and "privacy" in self.model_fields_set:
            _dict['privacy'] = None

        # set to None if saturation_level (nullable) is None
        # and model_fields_set contains the field
        if self.saturation_level is None and "saturation_level" in self.model_fields_set:
            _dict['saturation_level'] = None

        # set to None if sharpen_level (nullable) is None
        # and model_fields_set contains the field
        if self.sharpen_level is None and "sharpen_level" in self.model_fields_set:
            _dict['sharpen_level'] = None

        # set to None if window_pull (nullable) is None
        # and model_fields_set contains the field
        if self.window_pull is None and "window_pull" in self.model_fields_set:
            _dict['window_pull'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ImageIn from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "ai_version": obj.get("ai_version"),
            "brightness_boost": obj.get("brightness_boost"),
            "brightness_boost_external": obj.get("brightness_boost_external"),
            "brightness_boost_internal": obj.get("brightness_boost_internal"),
            "clarity_level": obj.get("clarity_level"),
            "cloud_type": obj.get("cloud_type"),
            "content_type": obj.get("content_type"),
            "contrast_boost": obj.get("contrast_boost"),
            "contrast_boost_external": obj.get("contrast_boost_external"),
            "contrast_boost_internal": obj.get("contrast_boost_internal"),
            "denoise_level": obj.get("denoise_level"),
            "enhance": obj.get("enhance") if obj.get("enhance") is not None else True,
            "enhance_type": obj.get("enhance_type"),
            "hdr": obj.get("hdr"),
            "image_name": obj.get("image_name"),
            "lens_correction": obj.get("lens_correction") if obj.get("lens_correction") is not None else True,
            "order_id": obj.get("order_id"),
            "privacy": obj.get("privacy"),
            "rating": obj.get("rating"),
            "saturation_level": obj.get("saturation_level"),
            "sharpen_level": obj.get("sharpen_level"),
            "sky_replacement": obj.get("sky_replacement"),
            "threesixty": obj.get("threesixty"),
            "vertical_correction": obj.get("vertical_correction") if obj.get("vertical_correction") is not None else True,
            "window_pull": obj.get("window_pull")
        })
        return _obj


