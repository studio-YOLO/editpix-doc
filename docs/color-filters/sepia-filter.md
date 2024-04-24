---
sidebar_position: 3
---

# Sepia
Function that, given an image, returns it in sepia scale

## Syntax

```jsx
toSepia(image)
```

## Parameters

- image: the image to be converted to sepia

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the sepia image

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
    // convert image to sepia
    editpix.toSepia(image)
        .then(sepiaImage => {
            // render modified image
            document.body.appendChild(sepiaImage);
        })
        .catch(error => { console.log(error) })
};
```