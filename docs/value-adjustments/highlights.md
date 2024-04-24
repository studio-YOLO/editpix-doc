---
sidebar_position: 6
---

# Highlights

Function that, given an RGB image and a factor, returns an RGB image with the highlights progressively brightened or darkened by the factor, proportionally to their pre-edit lightness.

## Syntax

```jsx
changeHighlights(image, factor)
```

## Parameters

- image: the image to modify
- factor: factor of highlight change (from -100 to 100)
    - factor > 0 : the image highlights get brightened by the factor
    - factor < 0: the image highlights get darkened by the factor
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
    editpix.changeHighlights(image, 15)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```