//Business logic

//Define Error Message
let error = 'Please enter a number'

//Function to count up to the number, adding in our fizzes and pops.
let fizzPop = function(number) {
  let result = []
  for(let i = 1; i <= number; i++) {
    if (i % 3 === 0 ) {
      result.push('FIZZ')
    } else if (i % 3 != 0) {
      result.push(i)
    } else {
      console.log(result)
    }
  }
  console.log(result);
}

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
      fizzPop(userNumber);
      console.log(parseInt(userNumber))
    }
  })
})
