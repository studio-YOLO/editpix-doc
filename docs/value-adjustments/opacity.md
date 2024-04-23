---
sidebar_position: 4
---

# Opacity
Function that, given an image, changes its opacity by a given alpha factor.

## Syntax

```jsx
changeOpacity(image, alpha)
```

## Parameters

- image: the image to be modified
- alpha: opacity factor, it must be a integer value fro 0 to 255
    - alpha = 0: the image is completely transparent.
    - alpha = 255: the image is completely opaque.

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the RGB image with the opacity changed by alpha

## Examples

```jsx
const editpix = new EditPix();

// image url
const url = "images/img.jpg";

// create image
var image = new Image();
image.src = url;

//waiting image load
image.onload = () => {
    // change image opacity
    editpix.changeOpacity(image, 128)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
};
```