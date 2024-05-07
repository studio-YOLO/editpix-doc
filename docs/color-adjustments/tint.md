---
sidebar_position: 3
---

# Tint
This method asynchronously changes the tint of the specified image element by adjusting the green channel (G) value based on the specified tint adjustment factor. 

## Syntax

```jsx
changeTint(image, factor)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to change the tint of.

- **factor** : `number` <br/>
The tint adjustment factor (-100 to 100):
    - factor > 0: increases the green channel (making the image more green).
    - factor < 0: decreases the green channel (making the image more red).
    - factor = 0: the image does not change.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the image element with adjusted tint.

## Throws

- `Error` <br/>
 Thrown if the specified tint factor is outside the valid range.

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