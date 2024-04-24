---
sidebar_position: 4
---

# HSL to RGB

A function to convert to the RGB color space from HSL.

## Syntax

```jsx
hslToRgb(h, s, l)
```

## Parameters

- h: the Hue value contained in [0, 360]
- s: the Saturation value contained in [0, 100]
- l: the Luminance value contained in [0, 100]

## Return

- Returns a Object with `r, g, b` values

```json
{
	r: value,
	g: value,
	b: valu
}
```

## Examples

```jsx
const editpix = new EditPix();

const blackHsl = { h: 0, s: 0, l: 0 }
console.log(editpix.hslToRgb(blackHsl.h, blackHsl.s, blackHsl.l))

//convert directly
console.log(editpix.hslToRgb(0, 0, 100))    //white
console.log(editpix.hslToRgb(0, 100, 50))    //red   //red
  
```