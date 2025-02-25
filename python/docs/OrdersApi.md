# autoenhance.OrdersApi

All URIs are relative to *https://dev.api.autoenhance.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order**](OrdersApi.md#create_order) | **POST** /v3/orders/ | Create Order
[**delete_order**](OrdersApi.md#delete_order) | **DELETE** /v3/orders/{id} | Delete Order
[**list_orders**](OrdersApi.md#list_orders) | **GET** /v3/orders/ | List Orders
[**merge_hdr**](OrdersApi.md#merge_hdr) | **POST** /v3/orders/{id}/merge | Merge HDR
[**retrieve_order**](OrdersApi.md#retrieve_order) | **GET** /v3/orders/{id} | Retrieve Order
[**update_order**](OrdersApi.md#update_order) | **PATCH** /v3/orders/{id} | Update Order
[**v3_orders_order_id_brackets_get**](OrdersApi.md#v3_orders_order_id_brackets_get) | **GET** /v3/orders/{order_id}/brackets | Retrieve Order


# **create_order**
> object create_order(order_in=order_in)

Create Order

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.order_in import OrderIn
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    order_in = autoenhance.OrderIn() # OrderIn |  (optional)

    try:
        # Create Order
        api_response = api_instance.create_order(order_in=order_in)
        print("The response of OrdersApi->create_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_in** | [**OrderIn**](OrderIn.md)|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Authentication error |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_order**
> delete_order(id)

Delete Order

Deletes the specific order.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete Order
        api_instance.delete_order(id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_orders**
> OrdersOut list_orders(offset=offset, per_page=per_page)

List Orders

Lists the orders for the current user.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.orders_out import OrdersOut
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    offset = 'offset_example' # str | The offset token used to indicate which page of results to use. (optional)
    per_page = 5 # int | The amount of items to be loaded per page of results. The final response may have a smaller number than requested if too large. (optional) (default to 5)

    try:
        # List Orders
        api_response = api_instance.list_orders(offset=offset, per_page=per_page)
        print("The response of OrdersApi->list_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->list_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **str**| The offset token used to indicate which page of results to use. | [optional] 
 **per_page** | **int**| The amount of items to be loaded per page of results. The final response may have a smaller number than requested if too large. | [optional] [default to 5]

### Return type

[**OrdersOut**](OrdersOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Authentication error |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **merge_hdr**
> object merge_hdr(id, order_hdr_merge=order_hdr_merge)

Merge HDR

Trigger merging of the brackets in the order.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.order_hdr_merge import OrderHDRMerge
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    id = 'id_example' # str | 
    order_hdr_merge = autoenhance.OrderHDRMerge() # OrderHDRMerge |  (optional)

    try:
        # Merge HDR
        api_response = api_instance.merge_hdr(id, order_hdr_merge=order_hdr_merge)
        print("The response of OrdersApi->merge_hdr:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->merge_hdr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **order_hdr_merge** | [**OrderHDRMerge**](OrderHDRMerge.md)|  | [optional] 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_order**
> OrderOut retrieve_order(id)

Retrieve Order

Retrieve a specific order.

### Example


```python
import autoenhance
from autoenhance.models.order_out import OrderOut
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)


# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieve Order
        api_response = api_instance.retrieve_order(id)
        print("The response of OrdersApi->retrieve_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->retrieve_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**OrderOut**](OrderOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_order**
> OrderOut update_order(id, order_in=order_in)

Update Order

Updates the details for the specific order.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.order_in import OrderIn
from autoenhance.models.order_out import OrderOut
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    id = 'id_example' # str | 
    order_in = autoenhance.OrderIn() # OrderIn |  (optional)

    try:
        # Update Order
        api_response = api_instance.update_order(id, order_in=order_in)
        print("The response of OrdersApi->update_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **order_in** | [**OrderIn**](OrderIn.md)|  | [optional] 

### Return type

[**OrderOut**](OrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_orders_order_id_brackets_get**
> OrderBracketsOut v3_orders_order_id_brackets_get(order_id)

Retrieve Order

Retrieve a specific order.

### Example


```python
import autoenhance
from autoenhance.models.order_brackets_out import OrderBracketsOut
from autoenhance.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.api.autoenhance.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = autoenhance.Configuration(
    host = "https://dev.api.autoenhance.ai"
)


# Enter a context with an instance of the API client
with autoenhance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = autoenhance.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 

    try:
        # Retrieve Order
        api_response = api_instance.v3_orders_order_id_brackets_get(order_id)
        print("The response of OrdersApi->v3_orders_order_id_brackets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->v3_orders_order_id_brackets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

### Return type

[**OrderBracketsOut**](OrderBracketsOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

