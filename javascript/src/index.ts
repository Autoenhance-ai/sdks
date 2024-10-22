/* tslint:disable */
/* eslint-disable */

import { Configuration } from './runtime' 
import * as custom from './custom';
import * as apis from './apis';

const apiVersion = "2024-10-01"

export default class Autoenhance {

    private configuration: Configuration;

    constructor(apiKey: string, options: { baseURL?: string } = {}) {
        const { baseURL = 'https://api.autoenhance.ai' } = options;

        this.configuration = new Configuration({
            basePath: baseURL,
            middleware: [],
            apiKey: () => apiKey,
            headers:{
                "x-api-version" : apiVersion
            }
        });
    }
    get ImagesApi(): custom.ImagesApi {
        return new custom.ImagesApi(this.configuration)
    }

    get OrdersApi(): apis.OrdersApi {
        return new apis.OrdersApi(this.configuration)
    }
}