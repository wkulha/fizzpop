//Business logic

//Define Error Message
let error = 'Please enter a number'

//Function to count up to the number, adding in our fizzes and pops.
let fizzPop = function(number) {
  let result = []
  for(let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push('FIZZ-POP')
    } else if (i % 3 === 0 ) {
      result.push('fizz')
    } else if (i % 5 === 0) {
      result.push('pop');
    } else if (i % 3 != 0 || i % 5 != 0) {
      result.push(i)
    }
  }
  return result.join(", ");
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
      let results = fizzPop(userNumber);
      console.log(results);
      $('.fizz_pop_output').empty();
      $('.fizz_pop_output').text(results);
    }
  })
})
