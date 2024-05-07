---
sidebar_position: 3
---

# RGB to HSL

This method converts the specified RGB color values to HSL (Hue, Saturation, Lightness) color representation. 

## Syntax

```jsx
rgbToHsl(r, g, b)
```

## Parameters

- **r** : `number` <br/>
The red channel value (0-255).

- **g** : `number` <br/>
The green channel value (0-255).

- **b** : `number` <br/>
The blue channel value (0-255).

## Return

- `object` <br/>
An object containing the HSL representation:

```json
{
	h: number,
	s: number,
	l: number
}
```

## Throws

- `Error` <br/>
Thrown if the input RGB color values are invalid.

## Examples

```jsx
const editpix = new EditPix();

const blackRgb = { r: 0, g: 0, b: 0 }
console.log(editpix.rgbToHsl(blackRgb.r, blackRgb.g, blackRgb.b))

//convert directly
console.log(editpix.rgbToHsl(255, 255, 255))    //white
console.log(editpix.rgbToHsl(255, 0, 0))    //red
  
```