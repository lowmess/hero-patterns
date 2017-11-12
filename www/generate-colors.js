const fs = require('fs-extra')
const randomColor = require('randomcolor')
const combo = require('random-a11y-combo')
const hero = require('../dist/hero-patterns.cjs.js')

// create 'public', should always fire
if (!fs.existsSync('public')) fs.mkdirSync('public')
// pre-generate color combinations
// this can make the build hang but speeds up the site tremendously
const combos = []
const num = process.env.NODE_ENV === 'production' ? Object.keys(hero).length * 10 : 69
const colors = randomColor({ count: num })
for (const color of colors) {
  combos.push(combo(color))
}
fs.outputJsonSync('./public/colors.json', combos)
