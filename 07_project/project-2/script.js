const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Validation
    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please enter a valid height';
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please enter a valid weight';
        return;
    }

    // BMI Calculation
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    // Result Category
    if (bmi < 18.6) {
        results.innerHTML = `Underweight (${bmi}) – Please gain some weight`;
    } 
    else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `Normal range (${bmi}) – Perfect 👍`;
    } 
    else {
        results.innerHTML = `Overweight (${bmi}) – Please lose some weight`;
    }
});
