function generateLogo(data) {
    const { text, textColor, shape, shapeColor } = data;
    
    let svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <!-- Text element -->
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    `;
    
    switch (shape) {
        case 'circle':
            svg += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svg += `<polygon points="100,10 50,90 150,90" fill="${shapeColor}" />`;
            break;
        case 'square':
            svg += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
        default:
            console.error('Invalid shape specified');
            break;
    }
    
    svg += '</svg>';
    
    return svg;
}

module.exports = generateLogo;