---
sidebar_position: 1
---

# Brightnes
Function that, given an image and a value, changes the brightness by the value.

## Syntax

```jsx
changeBrightness(image, factor)
```

## Parameters

- image: the image to modify
- factor: brightness change factor (from -100 to 100)
    - factor > 0 : the image luminance gets increased by the factor
    - factor < 0: the image luminance gets decreased by the factor
    - factor = 0: the image does not change

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the RGB image with the changed factor

## Examples

```jsx
const editpix = new EditPix();

// image url
const url = "images/img.jpg";

// crate image
var image = new Image();
image.src = url;

//waiting image load
image.onload = () => {
		//change brightness of image
    editpix.changeBrightness(image, -90)
        .then(resultImage => {
		        // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```