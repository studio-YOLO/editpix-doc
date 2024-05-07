---
sidebar_position: 2
---

# Black and white

This method asynchronously converts the specified image element to black and white.

## Syntax

```jsx
toBlackWhite(image)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to convert to black and white.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the black and white image element.

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
    // convert image to black and white
    editpix.toBlackWhite(image)
        .then(blackWhiteImage => {
            // render modified image
            document.body.appendChild(blackWhiteImage);
        })
        .catch(error => { console.log(error) })
};
```