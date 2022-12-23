const toggle = document.querySelector(".toggle");
const calc = document.querySelectorAll(".calc");
const input = document.querySelector(".input");
const reset = document.querySelectorAll(".word");
const lastNumber = document.querySelector(".number:last-child");

let currentPosition = 0;

function animatedToggle() {
  // ... set other properties for second_theme
  if (currentPosition === 0) {
    toggle.classList.add("active");
    currentPosition = 1;
    document.body.style.setProperty("--mainbackground", "hsl(0, 0%, 90%)");
    document.body.style.setProperty("--togglebackground", "hsl(0, 5%, 81%)");
    document.body.style.setProperty("--screenbackground", "hsl(0, 0%, 93%)");

    document.body.style.setProperty("--keybackground1", "hsl(185, 42%, 37%)");
    document.body.style.setProperty("--keyshadow1", "hsl(185, 58%, 25%)");

    document.body.style.setProperty("--keybackground2", "hsl(25, 98%, 40%)");
    document.body.style.setProperty("--keyshadow2", "hsl(25, 99%, 27%)");

    document.body.style.setProperty("--keybackground3", "hsl(45, 7%, 89%)");
    document.body.style.setProperty("--keyshadow3", "hsl(35, 11%, 61%)");

    document.body.style.setProperty("--numberColor", "hsl(60, 10%, 19%)");
    document.body.style.setProperty("--textColor", "hsl(0, 0%, 100%)");

    document.body.style.setProperty("--topColor", "hsl(60, 10%, 19%)");

    input.style.color = "hsl(60, 10%, 19%)"
    
  } else if (currentPosition === 1) {
    // ... set other properties for third_theme
    toggle.classList.remove("active");
    toggle.classList.add("active-2");
    currentPosition = 2;
    document.body.style.setProperty("--mainbackground", "hsl(268, 75%, 9%)");
    document.body.style.setProperty("--togglebackground", "hsl(268, 71%, 12%)");
    document.body.style.setProperty("--screenbackground", "hsl(268, 71%, 12%)");
    
    document.body.style.setProperty("--keybackground1", "hsl(281, 89%, 26%)");
    document.body.style.setProperty("--keyshadow1", "hsl(285, 91%, 52%)");

    document.body.style.setProperty("--keybackground2", "hsl(176, 100%, 44%)");
    document.body.style.setProperty("--keyshadow2", "hsl(177, 92%, 70%)");

    document.body.style.setProperty("--keybackground3", "hsl(268, 47%, 21%)");
    document.body.style.setProperty("--keyshadow3", "hsl(290, 70%, 36%)");

    document.body.style.setProperty("--numberColor", "hsl(52, 100%, 62%)");
    document.body.style.setProperty("--textColor", "hsl(0, 0%, 100%)");

    document.body.style.setProperty("--topColor", "hsl(52, 100%, 62%)");

    input.style.color = "hsl(52, 100%, 62%)"
    lastNumber.style.color = "hsl(198, 20%, 13%)";
  } else if (currentPosition === 2) {
    // ... set other properties for default theme
    toggle.classList.remove("active-2");
    currentPosition = 0;
    document.body.style.setProperty("--mainbackground", "hsl(222, 26%, 31%)");
    document.body.style.setProperty("--togglebackground", "hsl(223, 31%, 20%)");
    document.body.style.setProperty("--screenbackground", "hsl(224, 36%, 15%)");

    document.body.style.setProperty("--keybackground1", "hsl(225, 21%, 49%)");
    document.body.style.setProperty("--keyshadow1", "hsl(224, 28%, 35%)");

    document.body.style.setProperty("--keybackground2", "hsl(6, 63%, 50%)");
    document.body.style.setProperty("--keyshadow2", "hsl(6, 70%, 34%)");

    document.body.style.setProperty("--keybackground3", "hsl(30, 25%, 89%)");
    document.body.style.setProperty("--keyshadow3", "hsl(28, 16%, 65%)");

    document.body.style.setProperty("--numberColor", "hsl(221, 14%, 31%)");
    document.body.style.setProperty("--textColor", "hsl(0, 0%, 100%)");

    document.body.style.setProperty("--topColor", "hsl(0, 0%, 100%)");
    
    input.style.color = "hsl(0, 0%, 100%)"
  }
}

const inputDiv = document.querySelector('.input_div input');
const numberButtons = document.querySelectorAll('.number_button .number');

numberButtons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = event.target.dataset.value;
    if (buttonValue === 'DEL') {
      // Remove the last character from the input
      inputDiv.value = inputDiv.value.slice(0, -1);
    } else if (buttonValue === 'RESET') {
      // Clear the input
      inputDiv.value = '';
    } else if (buttonValue === '=') {
      // Evaluate the expression and display the result
      try {
        // Remove thousand separators from the input
        const input = inputDiv.value.replace(/,/g, '');
        // Evaluate the expression and format the result with thousand separators using the toLocaleString method
        inputDiv.value = eval(input).toLocaleString();
      } catch (error) {
        inputDiv.value = 'Error';
      }
    } else {
      // Check if the input is full
      if (inputDiv.value.length >= 14) {
        // If the input is full, start at a different direction
        inputDiv.value = inputDiv.value.slice(1) + buttonValue;
      } else {
        // If the input is not full, append the button value to the input
        inputDiv.value = inputDiv.value.concat(buttonValue);
      }
      // Set the cursor position to the very first number in the right
      inputDiv.selectionStart = inputDiv.value.length;
      inputDiv.selectionEnd = inputDiv.value.length;
    }
  });
});