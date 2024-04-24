---
sidebar_position: 3
---

# Resize by percentage

Resize the image in percentage.
This feature resizes the height and width of the image based on the percentage value you enter.

## Syntax

```jsx
resizeByPercentage(image, percentage)
```

## Parameters

- image: the image that needs to be resized
- percentage: a value from 0 to 100 that represents the percentage by which to reduce the size of the image

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the image resized

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
    // resize image by percentage
    editpix.resizeByPercentace(image, 40)
        .then(resizedImage => {
            // render modified image
            document.body.appendChild(resizedImage)
        })
        .catch(error => { console.log(error) })
};
```