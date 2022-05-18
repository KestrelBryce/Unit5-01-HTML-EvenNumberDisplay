  /* This function gets the user's Dairy Queen order and calculates the cost. 
*/

function displayGreeting () {

    // user input
  let minNum = parseInt((document.getElementById("min-Number-Here").value));
    
  let maxNum = parseInt((document.getElementById("max-Number-Here").value));


    // initializing counter
  let counter = minNum


    // initializing numbers
  let numbers = ""

  
    // loop code
  while  (counter <= maxNum)  {
    // building string of numbers with line break
    numbers = numbers + counter + "<br>"
    // add to the counter
    counter = counter + 1
  }


  // return string
  document.getElementById("greeting").innerHTML = numbers
    
}