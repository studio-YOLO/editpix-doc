---
sidebar_position: 4
---

# Opacity
This method asynchronously changes the opacity of the specified image element by setting the alpha channel (transparency) to a specified value for all pixels. 

## Syntax

```jsx
changeOpacity(image, alpha)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the opacity of.

- **alpha** : `number` <br/>
The new alpha value (opacity) to set for all pixels (0 to 255).
    - alpha = 255: the image is completely transparent.
    - alpha = 0: the image is completely opaque.


## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted opacity.

## Throws

- `Error` <br/>
 Thrown if the specified opacity factor is outside the valid range.

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
    // change image opacity
    editpix.changeOpacity(image, 128)
        .then(resultImage => {
            // render modified image
            document.body.appendChild(resultImage);
        })
        .catch(error => { console.log(error) })
};
```