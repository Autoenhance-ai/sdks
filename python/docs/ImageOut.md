# ImageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_version** | **str** | The version of the AI model to use for enhancing the image. Versions ending in an .x will use the latest minor version as soon as it&#39;s published. | [optional] 
**brightness_boost** | **str** | The amount of brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**brightness_boost_external** | **str** | The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**brightness_boost_internal** | **str** | The amount of external brightness boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**clarity_level** | **str** | The amount of clarity to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**cloud_type** | **str** | The type of clouds in the new sky to replace the original sky with. Options include: CLEAR, LOW_CLOUD, HIGH_CLOUD | [optional] 
**contrast_boost** | **str** | The amount of contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**contrast_boost_external** | **str** | The amount of external contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**contrast_boost_internal** | **str** | The amount of internal contrast boost to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**date_added** | **int** | The date the image was registered with Autoenhance. | [optional] 
**denoise_level** | **str** | The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**downloaded** | **bool** | Whether image has been already downloaded and paid for. | [optional] 
**enhance** | **bool** | Whether to enhance the image. | [optional] [default to True]
**enhance_type** | **str** | The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version &lt; 4.0, for &gt;&#x3D; 4.0 use WARM, NEUTRAL, or AUTHENTIC. | [optional] 
**image_id** | **str** |  | [optional] 
**image_name** | **str** |  | [optional] 
**image_type** | **str** | The image type for the image. | [optional] 
**is_threesixty** | **object** | Whether the image is a 360° image | [optional] [readonly] 
**lens_correction** | **bool** | Correct any lens distortion in the image. | [optional] [default to True]
**metadata** | **object** | Metadata for the image. | [optional] 
**order_id** | **str** |  | [optional] 
**privacy** | **bool** | Whether to blur any faces or license plates in the image. | [optional] 
**rating** | **int** | A rating between 0 and 5 on how good the image enhancmeent. Higher is better. | [optional] 
**saturation_level** | **str** | The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**scene** | **str** | The detected scene of the image i.e garden, patio, kitchen, etc. | [optional] 
**sharpen_level** | **str** | The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**sky_replacement** | **bool** | Whether the sky replacement feature was enabled for the image. | [optional] 
**status** | **str** | The status of the order. | [optional] [readonly] 
**status_reason** | **object** | Reason for the image&#39;s current status | [optional] [readonly] 
**user_id** | **str** | The user ID of the user who uploaded (owns) the image. | [optional] 
**vertical_correction** | **bool** | Whether the vertical correction feature was enabled for the image. | [optional] 
**window_pull** | **bool** | Whether to pull the windows in the image (used with AI version &gt;&#x3D; 4.0). | [optional] 

## Example

```python
from autoenhance.models.image_out import ImageOut

# TODO update the JSON string below
json = "{}"
# create an instance of ImageOut from a JSON string
image_out_instance = ImageOut.from_json(json)
# print the JSON string representation of the object
print(ImageOut.to_json())

# convert the object into a dict
image_out_dict = image_out_instance.to_dict()
# create an instance of ImageOut from a dict
image_out_from_dict = ImageOut.from_dict(image_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


