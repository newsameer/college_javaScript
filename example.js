const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const minInput = document.getElementById('min-input');
const maxInput = document.getElementById('max-input');

// Update the input fields when the slider values change
minRange.addEventListener('input', function() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);
  
  if (minVal >= maxVal) {
    minRange.value = maxVal - 1;
    minVal = maxVal - 1;
  }
  
  minInput.value = minVal;
});

maxRange.addEventListener('input', function() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);
  
  if (maxVal <= minVal) {
    maxRange.value = minVal + 1;
    maxVal = minVal + 1;
  }
  
  maxInput.value = maxVal;
});

// Update the slider values when the input fields change
minInput.addEventListener('input', function() {
  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  if (minVal >= maxVal) {
    minInput.value = maxVal - 1;
    minVal = maxVal - 1;
  }
  
  minRange.value = minVal;
});

maxInput.addEventListener('input', function() {
  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  if (maxVal <= minVal) {
    maxInput.value = minVal + 1;
    maxVal = minVal + 1;
  }
  
  maxRange.value = maxVal;
});
