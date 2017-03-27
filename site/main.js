import Vue from 'vue'
import fetch from 'unfetch'
import * as hero from '../'

const patterns = []
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// Could do this per-pattern but it felt wrong making 84 requests straight off the get-go
fetch(`https://randoma11y.com/combos?page=${random(69, 420)}&per_page=${Object.keys(hero).length}`)
  .then(r => r.json())
  .then(json => {
    let count = 0
    for (let item in hero) {
      let pattern = {}
      pattern.colorOne = json[count].color_one
      pattern.colorTwo = json[count].color_two
      pattern.fn = hero[item]

      patterns.push(pattern)
      count++
    }
  })

Vue.component('hero', {
  props: ['c1', 'c2', 'fn'],
  data () {
    return {
      colorOne: this.c1,
      colorTwo: this.c2
    }
  },
  computed: {
    style () {
      return {
        backgroundPosition: 'center',
        backgroundColor: this.colorOne,
        backgroundImage: this.fn(this.colorTwo, 1)
      }
    },
    name () {
      return this.fn.name.replace(/([A-Z])/g, ' $1')
    },
    ident () {
      return this.fn.name.replace(/([A-Z])/g, '-$1').toLowerCase()
    },
    func () {
      return `${this.fn.name}('${this.colorTwo}', 1)`
    }
  },
  methods: {
    changeColor () {
      let self = this
      fetch(`https://randoma11y.com/combos?page=${random(69, 420)}&per_page=1`)
        .then(r => r.json())
        .then(json => {
          self.colorOne = json[0].color_one
          self.colorTwo = json[0].color_two
        })
    }
  },
  template: `
    <div class="hero w-100 w-50-ns w-third-m w-25-l fl" :id="ident" @click="changeColor">
      <div class="hide-child aspect-ratio aspect-ratio--16x9" :style="style">
        <div class="child absolute absolute--fill bg-black-70 flex flex-column items-center justify-center pa3">
          <h3 class="white f5 f4-ns f3-l fw4 ttu tracked tc mt0 mb2">{{ name }}</h3>
          <code class="mt2 pv2 ph3 ba b--white br2 code white f5">{{ func }}</code>
        </div>
      </div>
    </div>`
})

new Vue({ // eslint-disable-line
  el: '#app',
  data: { patterns },
  template: `<div class="cf heroes"><hero v-for="item in patterns" :key="item.fn.name" :c1="item.colorOne" :c2="item.colorTwo" :fn="item.fn"></hero></div>`
})
