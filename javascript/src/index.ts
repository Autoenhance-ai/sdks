/* tslint:disable */
/* eslint-disable */

import { Configuration } from './runtime' 
import * as apis from './apis';
import * as custom from './custom'

export default class Autoenhance {

    private configuration: Configuration;

    constructor(apiKey: string, options: { baseURL?: string } = {}) {
        const { baseURL = 'https://dev.api.autoenhance.ai' } = options;

        this.configuration = new Configuration({
        basePath: baseURL,
        middleware: [],
        apiKey: () => apiKey,
        });
    }

    get ImagesApi(): custom.Image {
        return new custom.Image(this.configuration)
    }

    get OrdersApi(): apis.OrdersApi {
        return new apis.OrdersApi(this.configuration)
    }
}