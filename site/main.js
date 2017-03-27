import Vue from 'vue'
import combo from 'random-a11y-combo'
import * as hero from '../'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const roundTo = (increment, number) => Math.round(number / increment) * increment
const genAlpha = () => {
  // using 102 instead of 100 for the upper range
  // gives us a slightly larger chance of returning 1
  // the same holds true for using 23 for the lower range
  let num = roundTo(5, random(23, 102))
  return num === 100 ? 1 : parseFloat(`0.${num}`)
}
const setColor = obj => {
  let colors = combo()
  obj.colorOne = colors[0]
  obj.colorTwo = colors[1]
  obj.opacity = genAlpha()
}

const patterns = []
for (let item in hero) {
  let pattern = {}
  setColor(pattern)
  pattern.fn = hero[item]

  patterns.push(pattern)
}

Vue.component('hero', {
  props: ['c1', 'c2', 'alpha', 'fn'],
  data () {
    return {
      colorOne: this.c1,
      colorTwo: this.c2,
      opacity: this.alpha
    }
  },
  computed: {
    style () {
      return {
        backgroundPosition: 'center',
        backgroundColor: this.colorOne,
        backgroundImage: this.fn(this.colorTwo, this.opacity)
      }
    },
    name () {
      return this.fn.name.replace(/([A-Z])/g, ' $1')
    },
    ident () {
      return this.fn.name.replace(/([A-Z])/g, '-$1').toLowerCase()
    },
    func () {
      return `${this.fn.name}('${this.colorTwo}', ${this.opacity})`
    }
  },
  methods: {
    changeColor () {
      setColor(this)
    }
  },
  template: `
    <div class="hero w-100 w-50-ns w-third-m w-25-l fl" :id="ident">
      <div class="hide-child aspect-ratio aspect-ratio--16x9" :style="style">
        <div class="child absolute absolute--fill bg-black-70 flex flex-column items-center justify-center pa3" @click.self="changeColor">
          <h3 class="white f5 f4-ns f3-l fw4 ttu tracked tc mt0 mb2">{{ name }}</h3>
          <code class="mt2 pv2 ph3 ba b--white br2 code white f5">{{ func }}</code>
        </div>
      </div>
    </div>`
})

new Vue({ // eslint-disable-line
  el: '#app',
  data: { patterns },
  template: `<div class="cf heroes"><hero v-for="item in patterns" :key="item.fn.name" :c1="item.colorOne" :c2="item.colorTwo" :alpha="item.opacity" :fn="item.fn"></hero></div>`
})
