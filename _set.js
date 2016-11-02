import * as hero from './_patterns.js'

export function set (el, pattern, fill = hero.defaultFill, opacity = hero.defaultOpacity) {
  el.style.backgroundImage = pattern(fill, opacity)
  el.style.backgroundPosition = 'center'
}

export function setRandom (el, fill = hero.defaultFill, opacity = hero.defaultOpacity, arr = hero.patterns) {
  let rand = Math.floor(Math.random() * arr.length)
  let background = arr[rand]
  set(el, background, fill, opacity)
}
