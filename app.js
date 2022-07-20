
const container = document.querySelector("div");
for (i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add("grid");
    container.appendChild(square);
}
console.log("Hello");