## @autoenhance.ai/javascript

<p align="center">
  <img src="https://uploads-ssl.webflow.com/6151887923ecfa4ac66a9e69/65168cccea1c9f0fcb33652c_logo-adaptive.svg" alt="Autoenhance.ai logo" align="center">
</p>

<h1 align="center">Autoenhance.ai Javascript SDK</h1>

<p align="center">The AI photo editor that enhances your workflow now available with easy and quick Javascript SDK including Typescript support!</p>

## 👋 Navigation

* [Description](#description)
* [Requirements](#requirements)
* [Installation](#installation)
* [Configuration](#configuration)
* [Examples](#examples)

## <a id="description"></a>✨ Description

Our SDK will help you easily integrate Autoenhance.ai into your codebase in a matter of minutes. We've prepared methods for interacting with our API in all possible ways you might need.


## <a id="requirements"></a>⚠️ Requirements

* **Basic Javascript knowledge and a project set up**
* **Autoenhance.ai API key**
Don't have an API key ? Sign up in our [Webapp](https://www.app.autoenhance.ai/login), and you will find it on the [API page](https://app.autoenhance.ai/application-interface)!


## <a id="installation"></a>🔧 Installation

Install Autoenhance.ai SDK with a simple CLI command

With `npm`:
```bash
npm install @autoenhance.ai/javascript
```
With `yarn`:
```bash
yarn add @autoenhance.ai/javascript
```

## <a id="configuration"></a>⚙️ Configuration

Follow these simple steps in order to implement and configure our SDK

Import Autoenhance SDK package:
```bash
import Autoenhance from '@autoenhance.ai/javascript';
```
Create a constant, and add your [API key](#requirements)
```bash
const autoenhance = new Autoenhance('YOUR API KEY');
```

Boom, that's it! Now you can interact with our API in a matter of seconds.

## <a id="examples"></a>💎 Examples

`Uploading image`
```bash
  const uploadImage = async (imageProperties: ImageIn, image: Blob) => {
    const { s3PutObjectUrl } = await autoenhance.createImage({
      imageIn: {
        ...imageProperties
      }
    })

    await fetch(s3PutObjectUrl, {
      method: "PUT",
        headers: {
            "Content-Type": "image/jpeg",
        },
        body: image,
    });
    
  }
```

`Retrieving order`
```bash
  const getOrder = async (orderId:string) => {
    const order = await autoenhance.retrieveOrder({ id: orderId});
  };
```

`Retrieving list of orders`
```bash
  const getOrders = async () => {
    const response = await autoenhance.listOrders();
    const orders = response.orders;
  };
```

`Downloading enhanced image`
```bash
  const downloadImage = async (imageId) => {
    const imageUrl =
      await autoenhance.downloadEnhancedImageRaw({
          id: imageId,
          size: "large",
      }).then((res) => res.raw.url);
      
    return { url: imageUrl };
  };
```