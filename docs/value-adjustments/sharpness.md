---
sidebar_position: 7
---

# Sharpness

Function that, given an RGB image and a factor, returns an RGB image sharpened by the factor.

## Syntax

```jsx
changeSharpness(image, factor)
```

## Parameters

- image: the image to modify
- factor: factor of sharpness change (from -100 to 100)
    - factor > 0 : the image gets sharpened by the factor
    - factor < 0: the image gets dulled by the factor
    - factor = 0: the image does not change

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the RGB image modified  by the highlight factor

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
    editpix.changeSharpness(image, 43)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```