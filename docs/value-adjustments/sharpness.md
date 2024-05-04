---
sidebar_position: 7
---

# Sharpness

This method asynchronously changes the sharpness of the specified image element.

## Syntax

```jsx
changeSharpness(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the sharpness of.

- **factor** : `number` <br/>
The sharpness adjustment factor (-100 to 100):
    - factor > 0: the image sharpness gets increased by the factor.
    - factor < 0: the image sharpness gets decreased by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted sharpness.

## Throws

- `Error` <br/>
 Thrown if the specified sharpness factor is outside the valid range.

## Examples

```jsx
const editpix = new EditPix();

// image url
const url = "images/img.jpg";

// crate image
var image = new Image();
image.src = url;

// waiting image load
image.onload = () => {
    // change image contrast
    editpix.changeSharpness(image, 43)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```