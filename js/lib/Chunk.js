class Chunk {
    constructor(position) {
        this.hexs = new Array(CHUNK_SIZE * CHUNK_SIZE)
        this.mesh = new Mesh(position)
        this.isLoaded = false
        this.isBuffered = false
        this.position = position
    }

    load(generator) {
        if (!this.isLoaded) {
            generator.generate(this)
            this.isLoaded = true
        }
    }

    setHex(x, z, type, heightMap = 1) {
        if (!this.hexs[z * CHUNK_SIZE + x]) {
            this.hexs[z * CHUNK_SIZE + x] = new Hex()
        }
        this.hexs[z * CHUNK_SIZE + x].type = type
        this.hexs[z * CHUNK_SIZE + x].heightMap = heightMap
    }

    draw(renderer) {
        if (this.isBuffered) {
            renderer.drawChunk(this)
        }
    }

    addToBuffer() {
        if (!this.isBuffered) {
            this.mesh.add(this.hexs)
            this.isBuffered = true
            return true
        }
        return false
    }
}