---
sidebar_position: 1
---

# Getting Started

## Installation

EditPix supports multiple different installation methods.


## Usage in the browser 
For use in the browser the library can be installed via [npm](#installing-from-npm) or loaded via [CDN](#loading-from-a-cdn).


### Installing from `npm` 

```bash
npm i editpix
```

In your HTML file, load the script as a module:

```html
<script type="module" src="example.js"></script>
```

In your JavaScript file, import the library and use it:

```jsx
import EditPix from './node_modules/editpix/src/editpix.js';

const editpix = new Editpix();

// use library
```
### Loading from a CDN

In your HTML file, load the script as a module:

```html
<script type="module" src="example.js"></script>
```

In your JavaScript file, import the library from the CDN and use it:

```jsx
import EditPix from 'https://cdn.jsdelivr.net/npm/editpix/+esm';

const editpix = new Editpix();

// use library
```


You can also choose the version of the library you prefer by specifying it in the URL:

```jsx
import EditPix from 'https://cdn.jsdelivr.net/npm/editpix@[version]/+esm';
```

## Usage in Vue.js

 Installing from `npm`

```bash
npm i editpix
```

Import and use in your component:

```jsx
<script setup>

import EditPix from "editpix"

const editpix = new EditPix()

//use library

</script>
```

If it is useful to you, at the [following link](https://github.com/studio-YOLO/editpix-vuejs-demo) you can find a small example on how you can use EditPix with Vue.js 3 and the Composition API.
