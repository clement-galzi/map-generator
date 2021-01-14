class Hex {
    constructor(column, row, s) {
        this.column = column;
        this.row = row;
        this.s = s;
        if (Math.round(column + row + s) !== 0)
            throw "q + r + s must be 0";
    }
    add(b) {
        return new Hex(this.column + b.column, this.row + b.row, this.s + b.s);
    }
    subtract(b) {
        return new Hex(this.column - b.column, this.row - b.row, this.s - b.s);
    }
    scale(k) {
        return new Hex(this.column * k, this.row * k, this.s * k);
    }
    rotateLeft() {
        return new Hex(-this.s, -this.column, -this.row);
    }
    rotateRight() {
        return new Hex(-this.row, -this.s, -this.column);
    }
    static direction(direction) {
        return Hex.directions[direction];
    }
    neighbor(direction) {
        return this.add(Hex.direction(direction));
    }
    diagonalNeighbor(direction) {
        return this.add(Hex.diagonals[direction]);
    }
    len() {
        return (Math.abs(this.column) + Math.abs(this.row) + Math.abs(this.s)) / 2;
    }
    distance(b) {
        return this.subtract(b).len();
    }
    round() {
        var columni = Math.round(this.column);
        var rowi = Math.round(this.row);
        var si = Math.round(this.s);
        var q_diff = Math.abs(columni - this.column);
        var r_diff = Math.abs(rowi - this.row);
        var s_diff = Math.abs(si - this.s);
        if (q_diff > r_diff && q_diff > s_diff) {
            columni = -rowi - si;
        }
        else if (r_diff > s_diff) {
            rowi = -columni - si;
        }
        else {
            si = -columni - rowi;
        }
        return new Hex(columni, rowi, si);
    }
    lerp(b, t) {
        return new Hex(this.column * (1.0 - t) + b.column * t, this.row * (1.0 - t) + b.row * t, this.s * (1.0 - t) + b.s * t);
    }
    linedraw(b) {
        var N = this.distance(b);
        var a_nudge = new Hex(this.column + 1e-06, this.row + 1e-06, this.s - 2e-06);
        var b_nudge = new Hex(b.column + 1e-06, b.row + 1e-06, b.s - 2e-06);
        var results = [];
        var step = 1.0 / Math.max(N, 1);
        for (var i = 0; i <= N; i++) {
            results.push(a_nudge.lerp(b_nudge, step * i).round());
        }
        return results;
    }
}