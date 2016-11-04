# `hero-patterns.js`

Easily set background images from [Hero Patterns](http://heropatterns.com) with JavaScript.

Each pattern from [Hero Patterns](http://heropatterns.com) has its own function. Each function returns the SVG data as a string wrapped in a `url()` function. The functions take two parameters: one for setting the fill color, the other for setting the fill opacity.

# Usage

### Install

```js
npm install --save hero-patterns
```

### Set `background-image` to "Tic Tac Toe" pattern

```js
import {ticTacToe} from 'hero-patterns'

let el = document.querySelector('header')
el.style.backgroundImage = ticTacToe('red', 0.9)
