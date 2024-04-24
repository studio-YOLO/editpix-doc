---
sidebar_position: 3
---

# RGB to HSL

A function to convert to the HSL color space from RGB.

## Syntax

```jsx
rgbToHsl(r, g, b)
```

## Parameters

- r: the red value contained in [0, 255]
- g: the green value contained in [0, 255]
- b: the blue value contained in [0, 255]

## Return

Returns a Object with `h, s, l` values

```json
{
	h: value,
	s: value,
	l: valu
}
```

## Examples

```jsx
const editpix = new EditPix();

const blackRgb = { r: 0, g: 0, b: 0 }
console.log(editpix.rgbToHsl(blackRgb.r, blackRgb.g, blackRgb.b))

//convert directly
console.log(editpix.rgbToHsl(255, 255, 255))    //white
console.log(editpix.rgbToHsl(255, 0, 0))    //red
  
```