---
sidebar_position: 2
---

# HEX to RGB

This method converts the specified hexadecimal color representation to RGB color values. 

## Syntax

```jsx
hexToRgb(hexColor)
```

## Parameters

- **hexColor** : `string` <br/>
The String representing the color to be converted, it can be either in the normal format `#ff00ff` or in the short format `#f0f`.

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

- `Error`  <br/>
Thrown if the input hexadecimal color representation is invalid.

## Examples

```jsx
const editpix = new EditPix()

const blackHex = "#000000";
console.log(editpix.hexToRgb(blackHex))

const whiteHex = "#fff";
console.log(editpix.hexToRgb(whiteHex))

const hexColorsArray = ["#000", "#ffffff", "#ff0000"]
hexColorsArray.forEach(color => {
    console.log(editpix.hexToRgb(color))
});
```