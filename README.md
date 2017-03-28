# `hero-patterns.js`

Easily set background images from [Hero Patterns](http://heropatterns.com) with JavaScript.

Each pattern from [Hero Patterns](http://heropatterns.com) has its own function. Each function returns the SVG data as a string wrapped in a `url()` function. The functions take two parameters: one for setting the fill color, the other for setting the fill opacity.

# Usage

### Install

```sh
yarn add hero-patterns
```

### Set `background-image` to "Tic Tac Toe" pattern

```js
import {ticTacToe} from 'hero-patterns'

let el = document.querySelector('header')
el.style.backgroundImage = ticTacToe('red', 0.9)
```

### Set multiple backgrounds

```js
import * as hero from 'hero-patterns'

// set fill & opacity
document.querySelector('.tech').style.backgroundImage = hero.circuitBoard('#bada55', 0.5)

// use default opacity (0.8)
document.querySelector('.milkshake').style.backgroundImage = hero.iLikeFood('#c0ff33')

// use default fill (#000) & opacity (0.8)
document.querySelector('.dark-side').style.backgroundImage = hero.deathStar()
```

For (slightly) more advanced usage, see [the code I used to generate the previews on the demo page](./site/main.js).
