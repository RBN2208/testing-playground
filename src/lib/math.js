export function add(...numbers){
    return numbers.reduce((total, amount) => total + amount)
}

export function subtract(a,b){
    return a - b
}

export function multiply(a,b){
    return a * b
}

export function divide(a,b){
    return a / b
}