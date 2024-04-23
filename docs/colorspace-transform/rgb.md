---
sidebar_position: 2
---

# RBG
A set of two functions to convert to the RGB color space from other color spaces.

## Syntax

```jsx
hexToRgb(hexColors)
hslToRgb(hslColors)
```

## Parameters

- hexColors: the original HEX image
- hslColors: the original HSL image

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the RGB image

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
		// convert image from HSL to RGB
    editpix.utils.hslToRgb(image)
        .then(rgbImage => {
		        // render modified image
            document.body.appendChild(rgbImage);
        })
        .catch(error => { console.log(error) })

        
    // convert image from HEX to RGB
    editpix.utils.hexToRgb(image)
        .then(rgbImage => {
		        // render modified image
            document.body.appendChild(rgbImage);
        })
        .catch(error => { console.log(error) })
};
```