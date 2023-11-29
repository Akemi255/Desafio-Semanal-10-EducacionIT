let currentResult = '';
let currentOperation = '';

function appendToResult(value) {
  currentResult += value;
  updateResult();
}

function setOperation(operation) {
  currentOperation = operation;
  currentResult += ' ' + operation + ' ';
  updateResult();
}

function clearResult() {
  currentResult = '';
  currentOperation = '';
  updateResult();
}

function calculate() {
  try {
    const result = eval(currentResult);
    currentResult = result.toString();
    currentOperation = '';
    updateResult();
  } catch (error) {
    alert('Error en la expresión.');
    clearResult();
  }
}

function updateResult() {
  document.getElementById('result').value = currentResult;
}
