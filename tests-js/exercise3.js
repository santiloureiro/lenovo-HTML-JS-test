
let number1 = 2
let number2 = 50



const primeNumbersOnRange = (num1, num2) => {

    let primes = []

    let indicator = false

    for (let i = 0; i < num2 - 1; i++) {
        for (let j = 2; j <= num1 - 1; j++) {
           if(num1 % j == 0){
                indicator = true
           }
        }
        
        if(!indicator) primes.push(num1)
        indicator = false
        num1++
    }

    console.log(`Prime Numbers on the range: ${primes}`)
}

primeNumbersOnRange(number1,number2)