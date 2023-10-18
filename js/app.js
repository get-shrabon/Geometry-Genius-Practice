/* Alternite Function */
function getIDByValu(element) {
  const field = document.getElementById(element);
  const fieldString = field.value;
  const fieldValue = parseFloat(fieldString);
  field.value = "";
  return fieldValue;
}

document.getElementById("Triangle_btn").addEventListener("click", function () {
  const base = getIDByValu("base_field");
  const height = getIDByValu("height_field");
  const areatext = document.getElementById("area");
  const area = areatext.innerText;

  const calculateValue = 0.5 * base * height;
  areatext.innerText = calculateValue;
  console.log(area);
});

document.getElementById("lenght_btn").addEventListener("click", function () {
  const width = getIDByValu("width");
  const lenght = getIDByValu("lenght");
  const lenghtCalculate = width * lenght;
  const lenghtArea = document.getElementById("lenght_area");
  lenghtArea.innerText = lenghtCalculate;
});

document.getElementById("base_btn").addEventListener("click", function () {
  const baseTwo = getIDByValu("baseTwo");
  const heightTwo = getIDByValu("heightTwo");
  const totalCalculate = baseTwo * heightTwo;
  const heightArea = document.getElementById("heightArea");
  heightArea.innerText = totalCalculate;
});
