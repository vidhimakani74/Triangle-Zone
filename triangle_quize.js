var formQuize = document.querySelector(".quize-form");
var submitBtn = document.querySelector(".submit-btn");
var output = document.querySelector(".output");

const answers = ['55°', "Isosceles", " 4 cm", "BF = CE"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(formQuize);
    for (let value of formResult.values()) {
        if (value === answers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "your score is " + score + "/4"
}

submitBtn.addEventListener("click", calculateScore);
