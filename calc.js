// Get the input field (display box)
let input = document.getElementById('inputBox');

// Select all calculator buttons
let buttons = document.querySelectorAll('button');

// Initialize expression string
let string = "";

// Convert NodeList to Array
let arr = Array.from(buttons);

// Add click listener to each button
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        // Handle Equal '='
        if (value === '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        }

        // Handle All Clear 'AC'
        else if (value === 'AC') {
            string = "";
            input.value = string;
        }

        // Handle Delete 'DEL'
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // Handle normal number/operator input
        else {
            string += value;
            input.value = string;
        }
    });
});
