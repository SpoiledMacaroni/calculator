const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case 'a':
      return add(a, b)
      
    case '-':
      return subtract(a, b)
      
    case '×':
      return multiply(a, b)
      
    case '÷':
      if (b === 0) return null
      else return divide(a ,b)
      
    default:
      return null
  }
}