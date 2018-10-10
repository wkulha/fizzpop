//Business logic
let error = 'Please enter a number'


//User logic
$(document).ready(function() {
  $('#input_form').submit(function(event) {
    event.preventDefault();
    let userInput = $('#user_number').val();
    if (userInput.match(/[a-z]/i)) {
      $('.error_message').text(error)
    } else {
      $('.error_message').empty();
      let userNumber = parseInt(userInput);      
      console.log(parseInt(userNumber))
    }
  })
})
