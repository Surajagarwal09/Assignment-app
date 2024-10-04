// Task: Create a function named calculate that takes three arguments: num1, num2, and a callback function.
// Instructions:
// Inside calculate, call the callback function with num1 and num2 as arguments.
// Create separate functions for addition, subtraction, multiplication, and division.
// Use the calculate function to perform these operations using the different callback functions.

function calculate(num1, num2, callback) {
    return callback = num1,num2
}
function addition(a, b) {
    let result = a + b
    return result
}
function subtraction(a, b) {
    let result = a - b
    return result
}function multiplication(a, b) {
    let result = a * b
    return result
}function division(a, b) {
    let result = a / b
    return result
}
console.log("addition of " + calculate(10, 5,addition))
console.log("Subtraction of " + calculate(10, 5,subtraction))
console.log("multiplication of " + calculate(10, 5,multiplication))
console.log("Division of " + calculate(10, 5,division))
