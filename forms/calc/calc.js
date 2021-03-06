function calculate (num1, num2) {
    let sum = num1 + num2
    return sum
    }

let number1 = Number(prompt('Enter a number'))
let number2 = Number(prompt('Enter a second number'))

let summedNumbers = calculate(number1, number2)

console.log(`The sum of ${number1} and ${number2} is ${summedNumbers}.`)
