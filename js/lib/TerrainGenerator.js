class TerrainGenerator {
    constructor(noiseGenerator) {
        this.noiseGenerator = noiseGenerator
        this.chunk = null
        this.configs = {
            octaves: 9,
            amplitude: 100,
            persistance: 0.7,
            smoothness: 250
        }
        this.noiseGenerator.setConfigs(this.configs)
    }

    generate(chunk) {
        this.chunk = chunk
        const heightMap = this.getHeightMap()
        const level = {
            [PixelType.Water]: 0.1,
            [PixelType.Sand]: 0.11,
            [PixelType.Grass]: 0.3,
            [PixelType.Dirt]: 0.7
        }
        for (var x = 0; x < CHUNK_SIZE; x+= 32) {
            for (var z = 0; z < CHUNK_SIZE; z+=32) {
                var h = heightMap[x][z]
                if (h < level[PixelType.Water]) {
                    chunk.setHex(x, z, PixelType.Water, h / level[PixelType.Water])
                } else if (h < level[PixelType.Sand]) {
                    chunk.setHex(x, z, PixelType.Sand, h / level[PixelType.Sand])
                } else if (h < level[PixelType.Grass]) {
                    chunk.setHex(x, z, PixelType.Grass, h / level[PixelType.Grass])
                } else if (h < level[PixelType.Dirt]) {
                    chunk.setHex(x, z, PixelType.Dirt, h / level[PixelType.Dirt])
                } else {
                    chunk.setHex(x, z, PixelType.Snow, h)
                }
            }
        }
    }

    getHeightAt(x, z) {
        const h = this.noiseGenerator.perlinNoise(this.chunk.position.x + x, this.chunk.position.z + z)
        return h / SNOW_LEVEL
    }

    getHeightIn(heights, xMin, zMin, xMax, zMax) {
        const bottomLeft = this.getHeightAt(xMin, zMin)
        const bottomRight = this.getHeightAt(xMax, zMin)
        const topLeft = this.getHeightAt(xMin, zMax)
        const topRight = this.getHeightAt(xMax, zMax)
        for (var x = xMin; x < xMax; x++) {
            for (var z = zMin; z < zMax; z++) {
                if (x === CHUNK_SIZE) continue
                if (z === CHUNK_SIZE) continue

                var h = Maths.smoothInterpolation(bottomLeft, topLeft, bottomRight, topRight, xMin, xMax, zMin, zMax, x, z)
                if (!heights[x]) {
                    heights[x] = []
                }
                heights[x][z] = h
            }
        }
    }

    getHeightMap() {
        const part = 2
        const PART_SIZE = CHUNK_SIZE / part
        var heights = []
        for (var zPart = 0; zPart < part; zPart++) {
            for (var xPart = 0; xPart < part; xPart++) {
                this.getHeightIn(
                    heights,
                    xPart * PART_SIZE,
                    zPart * PART_SIZE,
                    (xPart + 1) * PART_SIZE,
                    (zPart + 1) * PART_SIZE
                )
            }
        }

        return heights
    }
}