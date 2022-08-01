const number = document.getElementById("number");
const generateBtn = document.getElementById("generateBtn");
let box = document.getElementById("randomizer_prize");

const randomNumberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.textContent = randomNumber;

  if (number.textContent === "21") {
    box.style.backgroundColor = "lightgreen";
  } else {
    box.style.backgroundColor = "white";
  }
};

generateBtn.addEventListener("click", randomNumberGenerator);

randomNumberGenerator();
