# OrderBracketsOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brackets** | [**List[BracketOut]**](BracketOut.md) |  | [optional] 

## Example

```python
from autoenhance.models.order_brackets_out import OrderBracketsOut

# TODO update the JSON string below
json = "{}"
# create an instance of OrderBracketsOut from a JSON string
order_brackets_out_instance = OrderBracketsOut.from_json(json)
# print the JSON string representation of the object
print(OrderBracketsOut.to_json())

# convert the object into a dict
order_brackets_out_dict = order_brackets_out_instance.to_dict()
# create an instance of OrderBracketsOut from a dict
order_brackets_out_from_dict = OrderBracketsOut.from_dict(order_brackets_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


