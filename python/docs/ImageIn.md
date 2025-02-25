# ImageIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_version** | **str** | The version of the AI model to use for enhancing the image. Versions ending in an .x will use the latest minor version as soon as it&#39;s published. | [optional] 
**cloud_type** | **str** | The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, HIGH_CLOUD | [optional] 
**content_type** | **str** | The MIME type of the image i.e. image/jpeg, image/png, etc. | [optional] 
**enhance** | **bool** | Whether to enhance the image. | [optional] [default to True]
**enhance_type** | **str** | The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version &lt; 4.0, for &gt;&#x3D; 4.0 use WARM or NEUTRAL.. | [optional] 
**hdr** | **bool** | Whether the image is a HDR bracket. An order_id must be provided when this is set to true. | [optional] 
**image_name** | **str** |  | 
**lens_correction** | **bool** | Correct any lens distortion in the image. | [optional] [default to True]
**order_id** | **str** |  | [optional] 
**privacy** | **bool** | Whether to blur any faces or license plates in the image. | [optional] 
**rating** | **int** | A rating between 0 and 5 on how good the image enhancmeent. Higher is better. | [optional] 
**sky_replacement** | **bool** | Enable the replacement of the original sky for a summer sky. | [optional] 
**threesixty** | **bool** | Whether the image is a 360 image. | [optional] 
**upscale** | **bool** | Whether to upscale the image. | [optional] 
**vertical_correction** | **bool** | Correct any vertical distortion in the image so that it appears straight. | [optional] [default to True]
**window_pull** | **bool** | Whether to pull the windows in the image (used with AI version &gt;&#x3D; 4.0). | [optional] 

## Example

```python
from autoenhance.models.image_in import ImageIn

# TODO update the JSON string below
json = "{}"
# create an instance of ImageIn from a JSON string
image_in_instance = ImageIn.from_json(json)
# print the JSON string representation of the object
print(ImageIn.to_json())

# convert the object into a dict
image_in_dict = image_in_instance.to_dict()
# create an instance of ImageIn from a dict
image_in_from_dict = ImageIn.from_dict(image_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


