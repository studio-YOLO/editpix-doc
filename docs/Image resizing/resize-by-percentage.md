---
sidebar_position: 3
---

# Resize by percentage

Asynchronously resizes an image by a specified percentage.

This feature resizes the height and width of the image based on the percentage value you enter.

## Syntax

```jsx
resizeByPercentage(image, percentage)
```

## Parameters

- **image** : `HTMLImageElement` <br/>
The image element to resize.

- **percentage** : `number` <br/>
The percentage by which to resize the image. Positive values enlarge the image, while negative values shrink it.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the resized image element.

## Throws

- `Error` <br/>
Thrown if there are errors during the resizing process.

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