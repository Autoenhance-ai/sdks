/* tslint:disable */
/* eslint-disable */

import { Configuration } from './runtime' 
import * as custom from './custom';
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
    get ImagesApi(): apis.ImagesApi {
        return new apis.ImagesApi(this.configuration)
    }

    get OrdersApi(): apis.OrdersApi {
        return new apis.OrdersApi(this.configuration)
    }
}