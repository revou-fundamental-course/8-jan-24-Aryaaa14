const squareForm = document.getElementById("square-form");
const sideLength = document.getElementById("side-length");
const squareResult = document.getElementById("square-result");

squareForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const length = parseFloat(sideLength.value);
    const luas = length * length;
    const keliling = length * 4;
    squareResult.textContent = `Luas: ${luas} Cm, Keliling: ${keliling} Cm`;
});