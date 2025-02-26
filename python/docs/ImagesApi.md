# autoenhance.ImagesApi

All URIs are relative to *https://dev.api.autoenhance.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_image**](ImagesApi.md#create_image) | **POST** /v3/images/ | Create Image
[**delete_image**](ImagesApi.md#delete_image) | **DELETE** /v3/images/{id} | Delete Image
[**download_enhanced_image**](ImagesApi.md#download_enhanced_image) | **GET** /v3/images/{id}/enhanced | Download Enhanced Image
[**download_original_image**](ImagesApi.md#download_original_image) | **GET** /v3/images/{id}/original | Download Original Image
[**report_image**](ImagesApi.md#report_image) | **POST** /v3/images/{id}/report | Report Image
[**retrieve_image**](ImagesApi.md#retrieve_image) | **GET** /v3/images/{id} | Retrieve Image
[**v3_images_id_process_post**](ImagesApi.md#v3_images_id_process_post) | **POST** /v3/images/{id}/process | Process Image


# **create_image**
> ImageCreatedOut create_image(image_in=image_in)

Create Image

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.image_created_out import ImageCreatedOut
from autoenhance.models.image_in import ImageIn
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
    api_instance = autoenhance.ImagesApi(api_client)
    image_in = autoenhance.ImageIn() # ImageIn |  (optional)

    try:
        # Create Image
        api_response = api_instance.create_image(image_in=image_in)
        print("The response of ImagesApi->create_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->create_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_in** | [**ImageIn**](ImageIn.md)|  | [optional] 

### Return type

[**ImageCreatedOut**](ImageCreatedOut.md)

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

# **delete_image**
> delete_image(id)

Delete Image

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
    api_instance = autoenhance.ImagesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete Image
        api_instance.delete_image(id)
    except Exception as e:
        print("Exception when calling ImagesApi->delete_image: %s\n" % e)
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

# **download_enhanced_image**
> bytearray download_enhanced_image(id, quality=quality, format=format, preview=preview, watermark=watermark, max_width=max_width, scale=scale)

Download Enhanced Image

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
    api_instance = autoenhance.ImagesApi(api_client)
    id = 'id_example' # str | 
    quality = 56 # int | Quality of the image, must be between 1 and 90. (optional)
    format = 'format_example' # str | Format of the image, must be one of 'png', 'jpeg', or 'webp'. (optional)
    preview = True # bool | Whether to show a lower quality preview version. (optional)
    watermark = True # bool | Whether to apply a watermark to the image. (optional)
    max_width = 56 # int | Maximum width of the image in pixels. Must be a positive integer. (optional)
    scale = 3.4 # float | Scale factor for the image, must be between 0.0 and 1.0. (optional)

    try:
        # Download Enhanced Image
        api_response = api_instance.download_enhanced_image(id, quality=quality, format=format, preview=preview, watermark=watermark, max_width=max_width, scale=scale)
        print("The response of ImagesApi->download_enhanced_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->download_enhanced_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **quality** | **int**| Quality of the image, must be between 1 and 90. | [optional] 
 **format** | **str**| Format of the image, must be one of &#39;png&#39;, &#39;jpeg&#39;, or &#39;webp&#39;. | [optional] 
 **preview** | **bool**| Whether to show a lower quality preview version. | [optional] 
 **watermark** | **bool**| Whether to apply a watermark to the image. | [optional] 
 **max_width** | **int**| Maximum width of the image in pixels. Must be a positive integer. | [optional] 
 **scale** | **float**| Scale factor for the image, must be between 0.0 and 1.0. | [optional] 

### Return type

**bytearray**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_original_image**
> bytearray download_original_image(id, quality=quality, format=format, preview=preview, watermark=watermark, max_width=max_width, scale=scale)

Download Original Image

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
    api_instance = autoenhance.ImagesApi(api_client)
    id = 'id_example' # str | 
    quality = 56 # int | Quality of the image, must be between 1 and 90. (optional)
    format = 'format_example' # str | Format of the image, must be one of 'png', 'jpeg', or 'webp'. (optional)
    preview = True # bool | Whether to show a lower quality preview version. (optional)
    watermark = True # bool | Whether to apply a watermark to the image. (optional)
    max_width = 56 # int | Maximum width of the image in pixels. Must be a positive integer. (optional)
    scale = 3.4 # float | Scale factor for the image, must be between 0.0 and 1.0. (optional)

    try:
        # Download Original Image
        api_response = api_instance.download_original_image(id, quality=quality, format=format, preview=preview, watermark=watermark, max_width=max_width, scale=scale)
        print("The response of ImagesApi->download_original_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->download_original_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **quality** | **int**| Quality of the image, must be between 1 and 90. | [optional] 
 **format** | **str**| Format of the image, must be one of &#39;png&#39;, &#39;jpeg&#39;, or &#39;webp&#39;. | [optional] 
 **preview** | **bool**| Whether to show a lower quality preview version. | [optional] 
 **watermark** | **bool**| Whether to apply a watermark to the image. | [optional] 
 **max_width** | **int**| Maximum width of the image in pixels. Must be a positive integer. | [optional] 
 **scale** | **float**| Scale factor for the image, must be between 0.0 and 1.0. | [optional] 

### Return type

**bytearray**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_image**
> object report_image(id, report_in=report_in)

Report Image

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.report_in import ReportIn
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
    api_instance = autoenhance.ImagesApi(api_client)
    id = 'id_example' # str | 
    report_in = autoenhance.ReportIn() # ReportIn |  (optional)

    try:
        # Report Image
        api_response = api_instance.report_image(id, report_in=report_in)
        print("The response of ImagesApi->report_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->report_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **report_in** | [**ReportIn**](ReportIn.md)|  | [optional] 

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

# **retrieve_image**
> ImageOut retrieve_image(id)

Retrieve Image

### Example


```python
import autoenhance
from autoenhance.models.image_out import ImageOut
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
    api_instance = autoenhance.ImagesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieve Image
        api_response = api_instance.retrieve_image(id)
        print("The response of ImagesApi->retrieve_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->retrieve_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ImageOut**](ImageOut.md)

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

# **v3_images_id_process_post**
> ImageOut v3_images_id_process_post(id, image_in_update=image_in_update)

Process Image

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import autoenhance
from autoenhance.models.image_in_update import ImageInUpdate
from autoenhance.models.image_out import ImageOut
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
    api_instance = autoenhance.ImagesApi(api_client)
    id = 'id_example' # str | 
    image_in_update = autoenhance.ImageInUpdate() # ImageInUpdate |  (optional)

    try:
        # Process Image
        api_response = api_instance.v3_images_id_process_post(id, image_in_update=image_in_update)
        print("The response of ImagesApi->v3_images_id_process_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->v3_images_id_process_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **image_in_update** | [**ImageInUpdate**](ImageInUpdate.md)|  | [optional] 

### Return type

[**ImageOut**](ImageOut.md)

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

