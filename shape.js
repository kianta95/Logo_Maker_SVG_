class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    getSVG() {
        let svg = '';
        switch (this.type) {
            case 'circle':
                svg = `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
                break;
            case 'triangle':
                svg = `<polygon points="50,10 10,90 90,90" fill="${this.color}" />`;
                break;
            case 'square':
                svg = `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
                break;
            default:
                svg = '';
        }
        return svg;
    }
}

module.exports = Shape;