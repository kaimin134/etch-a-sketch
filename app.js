
const container = document.querySelector("div");
const button = document.querySelector("button")
let num = 66;
function createGrid (x) {

for (i = 0; i < x * x; i++) {
    let square = document.createElement('div');
    square.setAttribute("id", "grid");
    square.style.height = `${1000 / x}px`;
    square.style.width = `${1000 / x}px`;
    container.appendChild(square);
}
}
createGrid(66);

function removeGrid (x) {

    for (i = 0; i < x * x; i++) {
  
        container.removeChild(container.lastElementChild);
    }
};

function setSquare () {
    removeGrid(num);
    num = prompt("How many squares per side? (Enter from 1 - 100)");
    console.log("Hello");
    createGrid(num);
}

button.addEventListener('click', setSquare);


const grids = document.querySelectorAll("#grid");
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    });
});

function random() {
    return Math.floor(Math.random() * 256);
}

console.log(random());

