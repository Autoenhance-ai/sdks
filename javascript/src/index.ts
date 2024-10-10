/* tslint:disable */
/* eslint-disable */

# TODO: Adopt same Autoenhance.create_image type structure from python
# 

import { Configuration } from './runtime' 
import * as custom from './custom';
import * as apis from './apis';
export default class Autoenhance {

    private configuration: Configuration;

    constructor(apiKey: string, options: { baseURL?: string } = {}) {
        const { baseURL = 'https://api.autoenhance.ai' } = options;

        this.configuration = new Configuration({
        basePath: baseURL,
        middleware: [],
        apiKey: () => apiKey,
        });
    }
    get ImagesApi(): custom.ImagesApi {
        return new custom.ImagesApi(this.configuration)
    }

    get OrdersApi(): apis.OrdersApi {
        return new apis.OrdersApi(this.configuration)
    }
}