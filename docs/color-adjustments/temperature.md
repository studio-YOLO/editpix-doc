---
sidebar_position: 2
---

# Temperature
Function that, given an image, changes the temperature.

## Syntax

```jsx
changeTemperature(image, factor)
```

## Parameters

- image: image whose temperature needs to be changed
- factor: factor by which to increase or decrease the image temperature. Its value ranges from -100 to 100, where:
    - factor > 0 : the image is heated
    - factor < 0: the image is cooled
    - factor = 0: the image does not change

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the image with the temperature changed by a factor

## Examples

```jsx
const editpix = new EditPix();

// image url
const url = "images/img.jpg";

// create image
var image = new Image();
image.src = url;

// waiting image load
image.onload = () => {
    // change image temperature
    editpix.adjustTemperature(image, 20)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```