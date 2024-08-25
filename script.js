document.getElementById('generateButton').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultDiv = document.getElementById('result');

    // Validate the inputs
    if (isNaN(minValue) || isNaN(maxValue)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
    }

    if (minValue > maxValue) {
        resultDiv.textContent = 'Minimum value should be less than or equal to the maximum value.';
        return;
    }

    // Generate a random number between minValue and maxValue
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the result
    resultDiv.textContent = `Generated Random Number: ${randomNumber}`;
});