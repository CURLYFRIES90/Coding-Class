    // JavaScript code for form validation
       document.addEventListener('DOMContentLoaded', function() {
      // Retrieve the input field value
      let form = document.getElementById('myForm');
      let inputField = document.getElementById('inputField');

      //Event listner to form
      form.addEventListener('submit', function(event) {

      // Prevent form from submitting
      event.preventDefault();
     
      // Regular expression pattern for alphanumeric input
      let alphanumericRegex = /^[a-zA-Z0-9]*$/;

    
      // Check if the input value matches the pattern
        if (!alphanumericRegex.test(inputField)) {

        // Invalid input: display error message
           alert("Please enter alpanumeric characters.");
        } else {
           // Valid input: display confirmation and submit the form
        alert("Form Submitted!");
      }
      });
    })