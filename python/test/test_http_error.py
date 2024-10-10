# coding: utf-8

"""
    Autoenhance API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: v3
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from autoenhance.models.http_error import HTTPError

class TestHTTPError(unittest.TestCase):
    """HTTPError unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> HTTPError:
        """Test HTTPError
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `HTTPError`
        """
        model = HTTPError()
        if include_optional:
            return HTTPError(
                detail = None,
                message = ''
            )
        else:
            return HTTPError(
        )
        """

    def testHTTPError(self):
        """Test HTTPError"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
