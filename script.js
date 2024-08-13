function appendDigit(value) {
    const display = document.getElementById("display")
    if (value === "=") {
        display.value = calculation(display.value)
    } else if (value === "C") {
        display.value = ""

    } else if (value === "X") {
        display.value = removeLastDigit(display.value)
    } else {
        display.value += value
    }
}

function calculation(expression) {
    return eval(expression)
}

function removeLastDigit(expression) {
    return expression.slice(0, -1)
}