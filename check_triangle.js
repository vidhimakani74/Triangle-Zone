var angles = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector(".is-triangle-btn");
var output = document.querySelector(".output");

function isTriangle() {
  var sumOfAngles = calculateSumOfAngles(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );
  if (
    Number(angles[0].value) > 0 &&
    Number(angles[1].value) > 0 &&
    Number(angles[2].value) > 0
  ) {
    if (sumOfAngles === 180) {
      output.innerText = "it's triangle 👍";
      output.style.color = "green";
    } else {
      output.innerText = "it's NOT triangle 👎";
      output.style.color = "red";
    }
  } else {
    output.innerText = "Please Enter valid positive angles value 📢";
    output.style.color = "red";
  }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  var sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

isTriangleBtn.addEventListener("click", isTriangle);
