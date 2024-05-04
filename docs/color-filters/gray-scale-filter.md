---
sidebar_position: 1
---

# Gray Scale
This method asynchronously converts the specified image element to grayscale.

## Syntax

```jsx
toGrayScale(image)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to convert to grayscale.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the grayscale image element.

## Throws

- `Error` <br/>
Thrown if there are errors during the conversion process.

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
    // convert image to gray scale
    editpix.toGrayScale(image)
        .then(greyScaleImage => {
            // render modified image
            document.body.appendChild(greyScaleImage);
        })
        .catch(error => { console.log(error) })
};
```