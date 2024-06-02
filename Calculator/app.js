const resultElement = document.getElementById('result')
const firstNum = document.getElementById('input1')
const secondNum = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const operator = document.getElementById('operator')
let action = '+'


plusBtn.onclick = () => {
    action = '+'
    operator.value = '+'
}

minusBtn.onclick = () => {
    action = '-'
    operator.value = '-'
}

function colored(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else resultElement.style.color = 'green'
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return actionSymbol === '+' ? num1 + num2 : num1 - num2
}


submitBtn.onclick = () => {
    const result = computeNumbersWithAction (firstNum, secondNum, action)
    colored(result)
}
