---
sidebar_position: 1
---

# RGB to HEX

A function to convert to the HEX color space from RGB.

## Syntax

```jsx
rgbToHex(r, g, b)
```

## Parameters

- r: the red value contained in [0, 255]
- g: the green value contained in [0, 255]
- b: the blue value contained in [0, 255]

## Return

- Returns the HEX value of the color in string format

## Examples

```jsx
const editpix = new EditPix()

const blackRgb = { r: 0, g: 0, b: 0 }
console.log(editpix.rgbToHex(blackRgb.r, blackRgb.g, blackRgb.b))

// convert directly
console.log(editpix.rgbToHex(255, 255, 255))    //white

// array example
const rgbColorsArray = [{ r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }]
rgbColorsArray.forEach(color => {
    console.log(editpix.rgbToHex(color.r, color.g, color.b))
});
```