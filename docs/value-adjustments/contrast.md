---
sidebar_position: 2
---

# Contrast
Function that,  given an RGB image and a factor, returns an RGB image with the contrast changed by the given factor along an S-Curve.

## Syntax

```jsx
changeContrast(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the contrast of.

- **factor** : `number` <br/>
The contrast adjustment factor (-100 to 100):
    - factor > 0: the image contrast gets increased by the factor.
    - factor < 0: the image contrast gets decreased by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted contrast.

## Throws

- `Error` <br/>
 Thrown if the specified contrast factor is outside the valid range.

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
    editpix.changeContrast(image, 2)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```