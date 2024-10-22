# OrderOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The creation date of the order. | [optional] 
**images** | [**List[ImageOut]**](ImageOut.md) |  | [optional] 
**is_deleted** | **bool** | The status of the order. | [optional] 
**is_merging** | **bool** | The processing status for the order | [optional] 
**is_processing** | **object** | The processing status for the order | [optional] [readonly] 
**last_updated_at** | **datetime** | The last updated date of the order. | [optional] 
**name** | **str** | The name for the order. | [optional] 
**order_id** | **str** | The ID for the order. | [optional] 
**status** | **str** | The status of the order. | [optional] [readonly] 

## Example

```python
from autoenhance.models.order_out import OrderOut

# TODO update the JSON string below
json = "{}"
# create an instance of OrderOut from a JSON string
order_out_instance = OrderOut.from_json(json)
# print the JSON string representation of the object
print(OrderOut.to_json())

# convert the object into a dict
order_out_dict = order_out_instance.to_dict()
# create an instance of OrderOut from a dict
order_out_from_dict = OrderOut.from_dict(order_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


