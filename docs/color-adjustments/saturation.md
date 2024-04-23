---
sidebar_position: 1
---

# Saturation
Function that, given an image, changes its saturation.

## Syntax

```jsx
changeSaturation(image, factor)
```

## Parameters

- image: RGB image to saturate
- factor: factor by which to increase or decrease the saturation. Its value ranges from -100 to 100, where:
    - factor > 0 : the saturation gets increased by the factor
    - factor < 0: the saturation gets decreased by the factor
    - factor = 0: the image does not change

## Return

- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the RGB image saturated by a factor alpha

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