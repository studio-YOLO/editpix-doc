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

- image: the image to modify
- factor: factor of contrast (from -100 to 100)
    - factor > 0 : the image contrast gets increased by the factor
    - factor < 0: the image contrast gets decreased by the factor
    - factor = 0: the image does not change

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the RGB image modified  by the factor of contrast

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
    editpix.setContrast(image, 2)
        .then(resultImage => {
		        // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```