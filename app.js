
const container = document.querySelector('.container');

const grid = document.querySelector(".grid");
grid.style.transition = '200ms ease 50ms';


let currentInk = "black";
let isRainbow = false;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "x " + slider.value;

//update the current slider value
slider.oninput = function() {
  output.innerHTML = this.value + "x " + this.value;
  createGrid()
}

//Add 16x16 grid at he beginning
function createGrid() {
    grid.innerHTML = ''; 
    const gridSize = slider.value; 
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 

    let mouseClicked = false;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');

            div.addEventListener("mousedown", function () {
                mouseClicked = true;
                if (isRainbow) {
                    currentInk = generateRandomColor();
                    ink(div);
                } else {
                    ink(div);
                }
            })
            div.addEventListener("mouseover", function () {
                if (mouseClicked) {
                    if (isRainbow) {
                        currentInk = generateRandomColor();
                        ink(div);
                    } else {
                        ink(div);
                    }
                }
            })
            grid.appendChild(div);
        }
    }
    addEventListener("mousedown", function () {
        mouseClicked = true;
    });

    addEventListener("mouseup", function () {
        mouseClicked = false;
    })
}


function ink(item) {
    item.style.backgroundColor = currentInk;
}

function reset() {
    grid.innerHTML = "";
    createGrid();
}

function setRainbow() {
    isRainbow = true;
}

function setWhite() {
    isRainbow = false;
    currentInk = "white";
}

function setBlack() {
    isRainbow = false;
    currentInk = "black";
}

/this method generates a random color in the RGB space
 and returns it/
function generateRandomColor() {
    var color1 = Math.floor(Math.random() * 255) + 1;
    var color2 = Math.floor(Math.random() * 255) + 1;
    var color3 = Math.floor(Math.random() * 255) + 1;

    return 'rgb(' + color1
        + ',' + color2
        + ',' + color3 + ')';
}


createGrid();




