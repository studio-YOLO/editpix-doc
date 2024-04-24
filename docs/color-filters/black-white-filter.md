---
sidebar_position: 2
---

# Black and white

Function for transforming an RGB image to black and white.

## Syntax

```jsx
toBlackWhite(image)
```

## Parameters

- image: the image to be converted to black and white

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the Black and White image

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
    // convert image to black and white
    editpix.toBlackWhite(image)
        .then(blackWhiteImage => {
            // render modified image
            document.body.appendChild(blackWhiteImage);
        })
        .catch(error => { console.log(error) })
};
```