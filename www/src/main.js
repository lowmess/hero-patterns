import { version } from 'package.json'
import * as hero from 'hero-patterns'
import colors from './colors'

import 'tachyons'
import './main.css'

// Add version number to header
document.querySelector('.version').innerHTML = `v${version}`

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const roundTo = (increment, number) => Math.round(number / increment) * increment
const genAlpha = () => {
  // using 102 instead of 100 for the upper range
  // gives us a slightly larger chance of returning 1
  // the same holds true for using 23 for the lower range
  return roundTo(5, random(23, 102)) / 100
}

const markup = name => {
  // generate random color combination and opacity value
  let [c1, c2] = colors[random(1, colors.length) - 1]
  if (random(1, 2) === 1) [c1, c2] = [c2, c1]
  const alpha = genAlpha()

  // create strings from function name
  const id = name.replace(/([A-Z])/g, '-$1').toLowerCase()
  const formatName = name.replace(/([A-Z])/g, ' $1')

  // generate code example
  const params = alpha === 1 ? `'${c2}'` : `'${c2}', ${alpha}`
  const functionCode = `${name}(${params})`

  // generate actual markup
  const style = `background-position: center; background-color: ${c1}; background-image: ${hero[name](c2, alpha)}`
  const html = `
    <div class="hero" id="${id}" role="presentation">
      <div class="hide-child aspect-ratio aspect-ratio--16x9" style="${style}">
        <div class="child aspect-ratio--object bg-black-70 flex flex-column items-center justify-center pa3">
          <span class="white f5 f4-ns f3-l fw4 ttu tracked tc mt0 mb2">${formatName}</span>
          <code class="mt2 pv2 ph3 ba b--white br2 code white f6 f5-ns">${functionCode}</code>
        </div>
      </div>
    </div>`
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstElementChild
}

const heroes = document.querySelector('.heroes')
for (const pattern in hero) {
  heroes.appendChild(markup(pattern))
}
