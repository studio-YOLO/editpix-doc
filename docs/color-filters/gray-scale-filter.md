---
sidebar_position: 1
---

# Gray Scale
Function that, given an image, returns it in gray scale.

## Syntax

```jsx
toGrayScale(image)
```

## Parameters

- image: the image to be converted to gray scale

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the gray scale image

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
    // convert image to gray scale
    editpix.toGrayScale(image)
        .then(greyScaleImage => {
            // render modified image
            document.body.appendChild(greyScaleImage);
        })
        .catch(error => { console.log(error) })
};
```