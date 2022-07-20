
const container = document.querySelector("div");
for (i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.setAttribute("id", "grid");
    container.appendChild(square);
}

const grids = document.querySelectorAll("#grid");
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    });
    grid.addEventListener("mouseout", () => {
        grid.style.backgroundColor = 'bisque';
    });

});

function random() {
    return Math.floor(Math.random() * 256);
}

console.log(random());

