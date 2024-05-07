---
sidebar_position: 3
---

# Sepia
This method asynchronously converts the specified image element to sepia tone.

## Syntax

```jsx
toSepia(image)
```

## Parameters

- **image** : `HTMLImageElement` <br/> 
The image element to convert to sepia tone.

## Return

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) : `Promise<HTMLImageElement>` <br/>
A promise that resolves with the sepia-toned image element.

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
    // convert image to sepia
    editpix.toSepia(image)
        .then(sepiaImage => {
            // render modified image
            document.body.appendChild(sepiaImage);
        })
        .catch(error => { console.log(error) })
};
```