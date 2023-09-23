function add (a, b) {
  return a + b;
}

function subb (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function div (a, b) {
  return a / b;
}

let firstNumber;
let operatorType;
let secondNumber;

function operator (fN, o, sN) {
  if (o === '+') {
    return add(fN, sN);
  }
  else if (o === '-') {
    return subb(fN, sN);
  }
  else if (o === '*') {
    return multiply(fN, sN);
  }
  else if (o === '/') {
    return div(fN, sN);
  }
}