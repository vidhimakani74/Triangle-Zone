var sides = document.querySelectorAll(".input-a");
var calculateBtn = document.querySelector(".calculate-btn");
var result = document.querySelector(".result");

function calculateArea() {
    if (Number(sides[0].value) > 0 && Number(sides[1].value) > 0) {
        const area = (0.5 * Number(sides[0].value) * Number(sides[1].value));
        result.innerText = "Area of triangle: " + area + "cm²";
        result.style.color = "green";
    }
    else {
        result.innerText = "Please enter values above 0";
        result.style.color = "red";
    }
}

calculateBtn.addEventListener("click", calculateArea);