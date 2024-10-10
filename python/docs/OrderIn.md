# OrderIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name for the order. | [optional] 
**order_id** | **str** | The ID for the order. | [optional] 

## Example

```python
from autoenhance.models.order_in import OrderIn

# TODO update the JSON string below
json = "{}"
# create an instance of OrderIn from a JSON string
order_in_instance = OrderIn.from_json(json)
# print the JSON string representation of the object
print(OrderIn.to_json())

# convert the object into a dict
order_in_dict = order_in_instance.to_dict()
# create an instance of OrderIn from a dict
order_in_from_dict = OrderIn.from_dict(order_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


