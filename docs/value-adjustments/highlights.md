---
sidebar_position: 6
---

# Highlights

Function that, given an RGB image and a factor, returns an RGB image with the highlights progressively brightened or darkened by the factor, proportionally to their pre-edit lightness.

## Syntax

```jsx
changeHighlights(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the highlights of.

- **factor** : `number` <br/>
The highlights adjustment factor (-100 to 100):
    - factor > 0: the image highlights gets increased by the factor.
    - factor < 0: the image highlights gets decreased by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted highlights.

## Throws

- `Error` <br/>
 Thrown if the specified highlights factor is outside the valid range.

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
    editpix.changeHighlights(image, 15)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```