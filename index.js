import * as patterns from ('./src/_patterns.js')
import debounce from ('lodash-es/debounce.js')

export function set (el, pattern, fill = 000000, opacity = 1) {
  let background = patterns.heroes[Math.floor(Math.random() * patterns.heroes.length)]
  el.classList.add(newBg)
}

export function setRandom (el, fill = 000000, opacity = 1) {
  let background = patterns.heroes[Math.floor(Math.random() * patterns.heroes.length)]
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
