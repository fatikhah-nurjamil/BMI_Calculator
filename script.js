function calculateBMI() {
  var weight = document.getElementById("w").value;
  var height = document.getElementById("h").value;

  if (weight === "" || height === "") {
    alert("Please enter both weight and height.");
    return;
  }

  var bmi = calculateBMIScore(weight, height);
  var result = getBMIStatus(bmi);

  document.getElementById("result").innerHTML =
    "BMI: " + bmi.toFixed(2) + "<br>Status: " + result;
}

function calculateBMIScore(weight, height) {
  var heightInMeters = height / 100;
  return weight / Math.pow(heightInMeters, 2);
}

function getBMIStatus(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}
