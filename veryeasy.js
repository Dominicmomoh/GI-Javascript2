// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(a,b){
if(a < b) {
    return a
} else if( a > b){
    return b
}
else{
    return ("equal")
}
}
console.log(min(5,8))
console.log(min(5,4))
console.log(min(8,8))