const Shape = require('./shapes')

class Square extends Shape {
    constructor(text, color, shapeColor){
        super(text, color, shapeColor);
    }
    render(){
     return   `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    
    <rect width="100%" height="100%" fill="${this.shapeColor}" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle"  fill="${this.color}">${this.text}</text>
    
    </svg>`;

    }
}
module.exports =Square;