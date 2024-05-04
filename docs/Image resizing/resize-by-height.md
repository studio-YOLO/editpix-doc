---
sidebar_position: 2
---

# Resize by height

Asynchronously resizes an image to a specified height.

This feature resizes also the width of the image proportionally, without distorting it.

## Syntax

```jsx
resizeByHeight(image, heightPx)
```

## Parameters

- **image** : `HTMLImageElement` <br/>
The image element to resize.

- **heightPx** : `number` <br/>
The new height, in pixels, to resize the image to.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the resized image element.

## Throws

- `Error` <br/>
Thrown if the specified height is negative or if there are errors during the resizing process.

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