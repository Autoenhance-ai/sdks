/* tslint:disable */
/* eslint-disable */

import { Configuration } from './runtime' 
import * as apis from './apis';

export default class Autoenhance {

    private configuration: Configuration;

    constructor(apiKey: string, options: MyApiOptions = {}) {
        const { baseURL = 'https://dev.api.autoenhance.ai' } = options;

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