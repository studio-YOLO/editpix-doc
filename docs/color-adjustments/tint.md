---
sidebar_position: 3
---

# Tint
Function that, given an image, changes its tint.

## Syntax

```jsx
changeTint(image, factor)
```

## Parameters

- image: image whose temperature tint to be changed
- factor: factor by which to increase or decrease the image tint. Its value ranges from -100 to 100, where:
    - factor > 0 : the image shifts to green
    - factor < 0: the image shifts to red
    - factor = 0: the image does not change

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the image with the tint changed by a factor

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
    // change image tint
    editpix.changeTint(image, 80)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
}
```