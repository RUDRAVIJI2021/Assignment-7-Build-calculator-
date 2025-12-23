function calculate(operation) {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let resultText = "";

            switch (operation) {
                case 'add':
                    resultText = `Result: ${num1 + num2}`;
                    break;
                case 'subtract':
                    resultText = `Result: ${num1 - num2}`;
                    break;
                case 'multiply':
                    resultText = `Result: ${num1 * num2}`;
                    break;
                case 'divide':
                    resultText = num2 !== 0 ? `Result: ${num1 / num2}` : "Error: Division by zero";
                    break;
                case 'square':
                    resultText = `Square of ${num1}: ${num1 * num1}<br>Square of ${num2}: ${num2 * num2}`;
                    break;
                case 'cube':
                    resultText = `Cube of ${num1}: ${num1 ** 3}<br>Cube of ${num2}: ${num2 ** 3}`;
                    break;
            }

            document.getElementById("result").innerHTML = resultText;
        }

        function clearFields() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("result").innerHTML = "";
        }