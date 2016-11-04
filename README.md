# `hero-patterns.js`

Easily set background images from [Hero Patterns](http://heropatterns.com) with JavaScript.

# Usage

### Install

```js
npm install --save hero-patterns
```

### Set `background-image` to "Tic Tac Toe" pattern

Each pattern is represented as a function taking two arguments, one for fill color and the other for fill opacity.

```js
import {ticTacToe} from 'hero-patterns'

let el = document.querySelector('header')
el.style.backgroundImage = ticTacToe('red', 0.9)
