---
sidebar_position: 3
---

# Exposure
This method asynchronously changes the exposure of the specified image element by applying an exposure adjustment factor to each RGB channel of every pixel. 

## Syntax

```jsx
changeExposure(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the exposure of.

- **factor** : `number` <br/>
The exposure adjustment factor (-100 to 100):
    - factor > 0: the image exposure gets increased by the factor.
    - factor < 0: the image exposure gets decreased by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted exposure.

## Throws

- `Error` <br/>
 Thrown if the specified exposure factor is outside the valid range.

## Examples

```jsx
const editpix = new EditPix();

// image url
const url = "images/img.jpg";

// crate image
var image = new Image();
image.src = url;

// waiting image load
image.onload = () => {
    // change image contrast
    editpix.changeExposure(image, 4)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```