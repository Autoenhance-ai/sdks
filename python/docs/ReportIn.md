# ReportIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | A list of categories to be reported. | 
**comment** | **str** | A comment to be sent along with the report. | [optional] 
**score** | **int** | A rating between 0 and 5 on how good the image enhancmeent. Higher is better. | [optional] 
**source** | **str** |  | [optional] 

## Example

```python
from autoenhance.models.report_in import ReportIn

# TODO update the JSON string below
json = "{}"
# create an instance of ReportIn from a JSON string
report_in_instance = ReportIn.from_json(json)
# print the JSON string representation of the object
print(ReportIn.to_json())

# convert the object into a dict
report_in_dict = report_in_instance.to_dict()
# create an instance of ReportIn from a dict
report_in_from_dict = ReportIn.from_dict(report_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


