---
sidebar_position: 1
---

# Saturation
This method asynchronously changes the saturation of the specified image element by applying a saturation adjustment factor. 

## Syntax

```jsx
changeSaturation(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the saturation of.

- **factor** : `number` <br/>
The saturation adjustment factor (-100 to 100):
    - factor > 0: the saturation gets increased by the factor.
    - factor < 0: the saturation gets decreased by the factor.
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted saturation.

## Throws

- `Error` <br/>
 Thrown if the specified saturation factor is outside the valid range.

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
    // change image saturation
    editpix.changeSaturation(image, 20)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```