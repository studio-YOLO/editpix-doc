---
sidebar_position: 5
---

# Shadows

Function that, given an RGB image and a factor, returns an RGB image with the shadows progressively brightened or darkened by the factor, proportionally to their pre-edit darkness.

## Syntax

```jsx
changeShadows(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the shadows of.

- **factor** : `number` <br/>
The shadow adjustment factor (-100 to 100):
    - factor > 0: the image shadows get brightened by the factor.
    - factor < 0: the image shadows get darkened by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted shadows.

## Throws

- `Error` <br/>
 Thrown if the specified shadow factor is outside the valid range.

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
    // change image shadows
    editpix.changeShadows(image, -30)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```