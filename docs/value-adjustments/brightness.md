---
sidebar_position: 1
---

# Brightnes
his method asynchronously changes the brightness of the specified image element by applying a brightness adjustment factor. 

## Syntax

```jsx
changeBrightness(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the brightness of.

- **factor** : `number` <br/>
The brightness adjustment factor (-100 to 100):
    - factor > 0: the image luminance gets increased by the factor.
    - factor < 0: the image luminance gets decreased by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted brightness.

## Throws

- `Error` <br/>
 Thrown if the specified brightness factor is outside the valid range.

## Examples

```jsx
const editpix = new EditPix();

// image url
const url = "images/img.jpg";

// crate image
var image = new Image();
image.src = url;

//waiting image load
image.onload = () => {
    //change brightness of image
    editpix.changeBrightness(image, -90)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```