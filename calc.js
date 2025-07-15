function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
        default:
            result = "Invalid operator!";
    }

    document.getElementById("result").innerText = `Result: ${result}`;
    document.querySelector(".home-btn").style.display = "block"; // Show Home button
}

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").innerText = "";
    document.querySelector(".home-btn").style.display = "none"; // Hide Home button
}