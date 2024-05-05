const fs = require('fs');
const inquirer = require('inquirer');

function generateLogo(answers) {
    const text = answers.text;
    const textColor = answers.textColor;
    const shape = answers.shape;
    const shapeColor = answers.shapeColor;
    
    const svgContent = `<svg width="100" height="100">
        <text x="10" y="20" fill="${textColor}">${text}</text>
        <rect x="10" y="30" width="50" height="50" fill="${shapeColor}" />
    </svg>`;

    return svgContent;
}

function init() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal number):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal number):'
        }
    ];

    function writeSVG(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Generated logo.svg');
        });
    }

    inquirer.prompt(questions)
        .then(answers => {
            const svgContent = generateLogo(answers);
            writeSVG('logo.svg', svgContent);
        })
        .catch(error => {
            console.error(error);
        });
}

init();