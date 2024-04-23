---
sidebar_position: 3
---

# HSL
A function to convert to the HSL color space from RGB.

## Syntax

```jsx
rgbToHsl(rgbColors)

```

## Parameters

- rgbColors: the original RGB image

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the HSL image

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
    // convert image from RGB to HSL
    editpix.utils.rgbToHsl(image)
        .then(hslImage => {
		        // render modified image
            document.body.appendChild(hslImage);
        })
        .catch(error => { console.log(error) })
  
```