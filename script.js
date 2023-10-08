function calculateBMI() {
  var weightInput = document.getElementById("w").value;
  var heightInput = document.getElementById("h").value;

  // Memeriksa apakah input adalah angka
  if (isNaN(weightInput) || isNaN(heightInput)) {
    alert("Please enter valid weight and height.");
    return;
  }

  var weight = parseFloat(weightInput);
  var height = parseFloat(heightInput);

  // Memeriksa apakah input kosong atau tidak valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height.");
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
