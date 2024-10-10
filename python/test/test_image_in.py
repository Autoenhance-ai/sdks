# coding: utf-8

"""
    Autoenhance API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: v3
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from autoenhance.models.image_in import ImageIn

class TestImageIn(unittest.TestCase):
    """ImageIn unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ImageIn:
        """Test ImageIn
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ImageIn`
        """
        model = ImageIn()
        if include_optional:
            return ImageIn(
                ai_version = '',
                brightness_boost = 'NONE',
                brightness_boost_external = 'NONE',
                brightness_boost_internal = 'NONE',
                clarity_level = 'NONE',
                cloud_type = 'CLEAR',
                content_type = '',
                contrast_boost = 'NONE',
                contrast_boost_external = 'NONE',
                contrast_boost_internal = 'NONE',
                denoise_level = 'NONE',
                enhance = True,
                enhance_type = 'property',
                hdr = True,
                image_name = '',
                lens_correction = True,
                order_id = '',
                privacy = True,
                rating = 0,
                saturation_level = 'NONE',
                sharpen_level = 'NONE',
                sky_replacement = True,
                threesixty = True,
                vertical_correction = True,
                window_pull = True
            )
        else:
            return ImageIn(
                image_name = '',
        )
        """

    def testImageIn(self):
        """Test ImageIn"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
