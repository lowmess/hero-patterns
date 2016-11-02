# `hero-patterns.js`

Easily set background images from [Hero Patterns](http://heropatterns.com) with `JavaScript`.

# Usage

## `set()`

```js
set(element, pattern, fill, opacity)
```

#### `element`

The element to attach the background to.

#### `pattern`

Should be the **name** of a function that returns a `data-url` string describing an SVG, taking two arguments for fill and opacity. [View the `diagonalStripes()` function for an example](/_patterns.js#L63-65).

#### `fill`

Hex string (minus the octothorpe) for the fill color the pattern should take.

#### `opacity`

Number between 0 & 1 representing the fill opacity the pattern should take.

```js
import {set, bubbles} from 'hero-patterns'

let el = document.querySelector('header')
set(el, bubbles, 'c0ffee', 0.5)
```

## setRandom(el, fill, opacity)
