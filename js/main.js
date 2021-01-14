const map = document.getElementById('map')
const context = map.getContext('2d')
const title = 'Noise map - Simulator'

context.canvas.width = WINDOW_WIDTH
context.canvas.height = WINDOW_HEIGHT

const seed = Math.random() * 10000
var noiseGenerator = new NoiseGenerator(seed)

var app = new Application(title, noiseGenerator)

app.drawMap()