---
sidebar_position: 2
---

# HEX to RGB

A function to convert to the RGB color space from HEX.

## Syntax

```jsx
hexToRgb(hexColor)
```

## Parameters

- hexColor: the String representing the color to be converted, it can be either in the normal format `#ff00ff` or in the short format `#f0f`

## Return

- Returns a Object contain the `r, g, b` values

```json
{
	r: value,
	g: value,
	b: value,
}
```

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