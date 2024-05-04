---
sidebar_position: 1
---

# Resize by width

Asynchronously resizes an image to a specified width.

This feature resizes also the height of the image proportionally, without distorting it.

## Syntax

```jsx
resizeByWidth(image, widthPx)
```

## Parameters

- **image** : `HTMLImageElement` <br/>
The image element to resize.

- **widthPx** : `number` <br/>
The new width, in pixels, to resize the image to.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the resized image element.

## Throws

- `Error` <br/>
Thrown if the specified width is negative or if there are errors during the resizing process.

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