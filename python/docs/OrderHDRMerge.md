# OrderHDRMerge


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
**denoise_level** | **str** | The amount of denoising to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**enhance** | **bool** | Whether to enhance the image. | [optional] [default to True]
**enhance_type** | **str** | The type of enhancement to apply to the image. PROPERTY or PROPERTY_USA is used with AI version &lt; 4.0, for &gt;&#x3D; 4.0 use WARM, NEUTRAL, or AUTHENTIC. | [optional] 
**lens_correction** | **bool** | Correct any lens distortion in the image. | [optional] [default to True]
**number_of_brackets_per_image** | **int** | If provided then group into an image after every specified number of brackets, if  not provided or set to 0 then we automatically group based on visual analysis. | [optional] 
**privacy** | **bool** | Whether to blur any faces or license plates in the image. | [optional] 
**saturation_level** | **str** | The amount of saturation to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**sharpen_level** | **str** | The amount of sharpening to apply to the image. Options include: NONE, LOW, MEDIUM, HIGH | [optional] 
**sky_replacement** | **bool** | Enable the replacement of the original sky for a summer sky. | [optional] 
**vertical_correction** | **bool** | Correct any vertical distortion in the image so that it appears straight. | [optional] [default to True]
**window_pull** | **bool** | Whether to pull the windows in the image (used with AI version &gt;&#x3D; 4.0). | [optional] 

## Example

```python
from autoenhance.models.order_hdr_merge import OrderHDRMerge

# TODO update the JSON string below
json = "{}"
# create an instance of OrderHDRMerge from a JSON string
order_hdr_merge_instance = OrderHDRMerge.from_json(json)
# print the JSON string representation of the object
print(OrderHDRMerge.to_json())

# convert the object into a dict
order_hdr_merge_dict = order_hdr_merge_instance.to_dict()
# create an instance of OrderHDRMerge from a dict
order_hdr_merge_from_dict = OrderHDRMerge.from_dict(order_hdr_merge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


