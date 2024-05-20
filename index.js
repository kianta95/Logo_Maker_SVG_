const fs = require('fs');

// Dynamic import of inquirer module
import('inquirer').then(({ default: inquirer }) => {
    // Import shape classes
    const Circle = require('./library/circle.js');
    const Square = require('./library/square.js');
    const Triangle = require('./library/triangle.js');

    // Function to create Circle
    function makeCircle(answers) {
        const circle = new Circle(answers.name, answers.text, answers.shapeColor);
        return circle.render();
    }

    // Function to create Square
    function makeSquare(answers) {
        const square = new Square(answers.name, answers.text, answers.shapeColor);
        return square.render();
    }

    // Function to create Triangle
    function makeTriangle(answers) {
        const triangle = new Triangle(answers.name, answers.text, answers.shapeColor);
        return triangle.render();
    }

    // Function to initialize the app
    function init() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What 3 letters are you using for your logo?"
                },
                {
                    type: "input",
                    name: "text",
                    message: "What color are you wanting for text?",
                },
                {
                    type: "list",
                    name: "shape",
                    message: "Which shape would you like the logo to be in?",
                    choices: ['circle', 'triangle', 'square']
                },
                {
                    type: "input",
                    name: "shapeColor",
                    message: "What color would you like the shape to be?",
                }
            ])
            .then((answers) => {
                let shapeRender;
                switch (answers.shape) {
                    case "circle":
                        shapeRender = makeCircle(answers);
                        break;
                    case "square":
                        shapeRender = makeSquare(answers);
                        break;
                    case "triangle":
                        shapeRender = makeTriangle(answers);
                        break;
                    default:
                        console.error('Invalid shape type');
                        return;
                }

                fs.writeFile('logo.svg', shapeRender, (err) =>
                    err ? console.log(err) : console.log('logo.svg created'));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Call the init function to start the process
    init();
}).catch((error) => {
    console.error('Error importing inquirer:', error);
});
