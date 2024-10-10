# OrdersOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orders** | [**List[OrderOut]**](OrderOut.md) |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 

## Example

```python
from autoenhance.models.orders_out import OrdersOut

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersOut from a JSON string
orders_out_instance = OrdersOut.from_json(json)
# print the JSON string representation of the object
print(OrdersOut.to_json())

# convert the object into a dict
orders_out_dict = orders_out_instance.to_dict()
# create an instance of OrdersOut from a dict
orders_out_from_dict = OrdersOut.from_dict(orders_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


