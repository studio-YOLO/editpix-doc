---
sidebar_position: 1
---

# Resize by width

Resize the image by width. 

This feature resizes also the height of the image proportionally, without distorting it.

## Syntax

```jsx
resizeByWidth(image, widthPx)
```

## Parameters

- image: the image that needs to be resized
- widthPx: the new width expressed in pixels (px)

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
    // resize image by width
    editpix.resizeByWidth(image, 100)
        .then(resizedImage => {
            // render modified image
            document.body.appendChild(resizedImage)
        })
        .catch(error => { console.log(error) })
};
```