import * as patterns from ('./src/_patterns.js')
import debounce from ('lodash-es/debounce.js')

export function set (el, pattern, fill = 000000, opacity = 1) {
  el.style.backgroundImage = pattern
  el.style.backgroundPosition = 'center'
}

export function setRandom (el, fill = 000000, opacity = 1) {
  let rand = Math.floor(Math.random() * patterns.heroes.length)
  let background = patterns.heroes[rand](fill, opacity)
  set(el, background, fill, opacity)
}

export function marble (el, time = 250, fill = 000000, opacity = 1) {
  setRandom(el, fill, opacity)
  el.addEventListener('mousemove', debounce(function () {
    setRandom(el, fill, opacity)
  }, time))
}

export function flash (el, time = 250, fill = 000000, opacity = 1) {
  setRandom(el, fill, opacity)
  window.setInterval(function () {
    setRandom(el, fill, opacity)
  }, time)
}

patterns.heroes.foreach {
  // get function name
  // convert camelCase to dashes
  // find elements with [data-hero-pattern] that matches the string
  // set styles on those elements
}
