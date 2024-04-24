---
sidebar_position: 2
---

# Resize by height

Resize the image by height. 

This feature resizes also the width of the image proportionally, without distorting it.

## Syntax

```jsx
resizeByHeight(image, heightPx)
```

## Parameters

- image: the image that needs to be resized
- heightPx: the new height expressed in pixels (px)

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
    // resize image by height
    editpix.resizeByHeight(image, 100)
        .then(resizedImage => {
            // render modified image
            document.body.appendChild(resizedImage)
        })
        .catch(error => { console.log(error) })
};
```