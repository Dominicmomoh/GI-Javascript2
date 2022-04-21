// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const massTom = 8

const massJerry = 45

const Jerryheight = 10
const Tomheight = 9
const BmiTom = massTom / 9 * 9
const BmiJerry = massJerry / 10 * 10
console.log(BmiTom)
console.log(BmiJerry)
const isTomGtJerry = BmiTom > BmiJerry
console.log(`isTomGtJerry = ${isTomGtJerry}`)
if (isTomGtJerry) {
    console, log(`Tom has a higher BMI than Jerry`)
} else {
    console.log(`Jerry has a higher Bmi Than Tom`)
}