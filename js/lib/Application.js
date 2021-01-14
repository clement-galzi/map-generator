class Application {
    constructor(title, renderer, noiseGenerator) {
        this.title = title
        this.renderer = renderer
        this.world = new World(noiseGenerator)

    }
    drawMap() {
        this.world.draw()
    }
}