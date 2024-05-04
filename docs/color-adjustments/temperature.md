---
sidebar_position: 2
---

# Temperature
This method asynchronously changes the temperature of the specified image element by applying a temperature adjustment factor.

## Syntax

```jsx
changeTemperature(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the temperature of.

- **factor** : `number` <br/>
The temperature adjustment factor (-100 to 100):
    - factor > 0: the image towards warmer tones.
    - factor < 0: the image towards cooler tones.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted temperature.

## Throws

- `Error` <br/>
 Thrown if the specified temperature factor is outside the valid range.

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