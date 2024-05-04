---
sidebar_position: 4
---

# HSL to RGB

This method converts the specified HSL (Hue, Saturation, Lightness) color values to RGB color representation. 

## Syntax

```jsx
hslToRgb(h, s, l)
```

## Parameters

- **h** : `number` <br/>
The hue value (0-360).

- **s** : `number` <br/>
The saturation value (0-100).

- **l** : `number` <br/>
The lightness value (0-100).

## Return

- `object` <br/>
An object containing the RGB representation:

```json
{
	r: number,
	g: number,
	b: number
}
```

## Throws

- `Error` <br/>
Thrown if the input HSL color values are invalid.

## Examples

```jsx
const editpix = new EditPix();

const blackHsl = { h: 0, s: 0, l: 0 }
console.log(editpix.hslToRgb(blackHsl.h, blackHsl.s, blackHsl.l))

//convert directly
console.log(editpix.hslToRgb(0, 0, 100))    //white
console.log(editpix.hslToRgb(0, 100, 50))    //red
  
```