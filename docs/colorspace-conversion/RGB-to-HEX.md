---
sidebar_position: 1
---

# RGB to HEX

This method converts the specified RGB color values to a hexadecimal color representation. 

## Syntax

```jsx
rgbToHex(r, g, b)
```

## Parameters

- **r** : `number` <br/>
The red channel value (0-255).
- **g** : `number` <br/>
The green channel value (0-255).
- **b** : `number` <br/>
The blue channel value (0-255).

## Return

- `String` <br/>
The hexadecimal representation of the RGB color with the format "#RRGGBB".

## Throws
- `Error` <br/>
Thrown if the input RGB color values are invalid.

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