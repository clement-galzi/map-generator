class World {
    constructor(noiseGenerator) {
        this.Layout = new Layout(noiseGenerator)
    }

    drawGrid(layout, hexes) {
        var canvas = map;
        var ctx = context;
        var width = canvas.width;
        var height = canvas.height;

        if (hexes === undefined) {
            hexes = shapeRectangle(15, 15, permuteQRS);
        }

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
        ctx.translate(width/2, height/2);
        hexes.forEach(function(hex) {
            drawHex(ctx, layout, hex);
            if (withLabels) drawHexLabel(ctx, layout, hex);
        });
    }

}