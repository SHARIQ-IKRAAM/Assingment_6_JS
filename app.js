// *******************Assignment # 35-38 JAVASCRIPT***************
// 1.)
function displayCurrentDateTime() {
    var now = new Date();
    console.log("Current Date and Time: " + now.toString());
}
displayCurrentDateTime();
        
// 2.)
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "! Welcome!");
}
greetUser("John", "Doe");

// 3.)
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    var sum = num1 + num2;
    return sum;
}

var result = addNumbers();

if (typeof result === "number") {
    console.log("The sum of the two numbers is: " + result);
}

// 4.)
function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Division by zero is not allowed.";
            }
            break;
        default:
            return "Invalid operator. Please use +, -, *, or /.";
    }

    return result;
}

var num1 = parseFloat(prompt("Enter the first number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var num2 = parseFloat(prompt("Enter the second number:"));

var calculationResult = calculator(num1, num2, operator);

if (typeof calculationResult === "number") {
    console.log("Result: " + calculationResult);
} else {
    console.error(calculationResult);
}

// 5.)
function squareNumber(number) {
    var result = number * number;
    return result;
}

var inputNumber = parseFloat(prompt("Enter a number:"));
var squaredResult = squareNumber(inputNumber);

console.log("The square of " + inputNumber + " is: " + squaredResult);
// 6.)
function factorialRecursive(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorialRecursive(number - 1);
    }
}

var inputNumber = parseInt(prompt("Enter a non-negative integer:"));
var result = factorialRecursive(inputNumber);
console.log("The factorial of " + inputNumber + " is: " + result);

// 7.)
function displayCounting(start, end) {
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            console.log(i);
        }
    } else {
        for (var i = start; i >= end; i--) {
            console.log(i);
        }
    }
}
var startNumber = parseInt(prompt("Enter the start number:"));
var endNumber = parseInt(prompt("Enter the end number:"));

console.log("Counting from " + startNumber + " to " + endNumber + ":");
displayCounting(startNumber, endNumber);

// 9.)
function computeHypotenuse(base, perpendicular) {
    function square(number) {
        return number * number;
    }

    var hypotenuseSquared = square(base) + square(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}
var base = parseFloat(prompt("Enter the length of the base:"));
var perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));

var result = computeHypotenuse(base, perpendicular);
console.log("The hypotenuse of the right triangle is: " + result);


// 11.)
function computeHypotenuse(base, perpendicular) {
    function square(number) {
        return number * number;
    }

    function calculateHypotenuse() {
        var baseSquared = square(base);
        var perpendicularSquared = square(perpendicular);
        var hypotenuseSquared = baseSquared + perpendicularSquared;
        return Math.sqrt(hypotenuseSquared);
    }

    return calculateHypotenuse();
}
var base = parseFloat(prompt("Enter the length of the base:"));
var perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));

var result = computeHypotenuse(base, perpendicular);
console.log("The hypotenuse of the right triangle is: " + result);


// 14.)


// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

// Function to calculate the area of a circle
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
}
var radius = parseFloat(prompt("Enter the radius of the circle:"));

calcCircumference(radius);
calcArea(radius);





