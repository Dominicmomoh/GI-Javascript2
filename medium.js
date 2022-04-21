// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
const testing = Number(prompt("Choose 1-12"))
if(testing === 1){
    console.log("January")
} else if(testing === 2){
    console.log("Febuary")
}  else if(testing === 3){
    console.log("March")
}  else if(testing === 4){
    console.log("April")
} else if(testing === 5){
    console.log("May")
} else if(testing === 6){
    console.log("June")
} else if(testing === 7){
    console.log("July")
} else if(testing === 8){
    console.log("August")
} else if(testing === 9){
    console.log("September")
} else if(testing === 10){
    console.log("October")
} else if(testing === 11){
    console.log("November")
} else if(testing === 12){
    console.log("December")
} else alert(`Choose between 1-12`)
