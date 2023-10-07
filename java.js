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

let firstNumber = "";
let operatorType;
let secondNumber;
let result;

function operator(fN, o, sN) {
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
let screen = document.querySelector('.screen');


function screenAdder() {
  screen.textContent = "";
  screen.textContent += displayValue;

}

let displayValue = 0;

function selectNumber(number) {
  if (!operatorType) {
    firstNumber += number;
  }
  else if(operatorType){
    secondNumber += number;
  }
  else {

  }
}

function reset() {
  firstNumber = null;
  operatorType = null;
  secondNumber = null;
}

function limiter() {
  if (firstNumber && operatorType && secondNumber) {
    result = operator(firstNumber, operatorType, secondNumber);
    screen.textContent = result;
    reset();
    selectNumber(result)
  }
}



const one = document.querySelector('.one');
one.addEventListener('click', () => {
  selectNumber(1)
  displayValue = 1;
  screenAdder();
  limiter();
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
  selectNumber(2)
  displayValue = 2;
  screenAdder();
  limiter();
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
  selectNumber(3)
  displayValue = 3;
  screenAdder();
  limiter();
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
  selectNumber(4)
  displayValue = 4;
  screenAdder();
  limiter();
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
  selectNumber(5)
  displayValue = 5;
  screenAdder();
  limiter();
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
  selectNumber(6)
  displayValue = 6;
  screenAdder();
  limiter();
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
  selectNumber(7)
  displayValue = 7;
  screenAdder();
  limiter();
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
  selectNumber(8)
  displayValue = 8;
  screenAdder();
  limiter();
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
  selectNumber(9)
  displayValue = 9;
  screenAdder();
  limiter();
});

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
  operatorType = "+";
  displayValue = "+"
  screenAdder();
});

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
  operatorType = "-";
  displayValue = "-"
  screenAdder();
});

const times = document.querySelector('.times');
times.addEventListener('click', () => {
  operatorType = "*";
  displayValue = "*"
  screenAdder();
});

const dela = document.querySelector('.dela');
dela.addEventListener('click', () => {
  operatorType = "/"
  displayValue = "/";
  screenAdder();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  screen.textContent = "";
  firstNumber = null;
  operatorType = null;
  secondNumber = null;
});

const lika = document.querySelector('.lika');
lika.addEventListener('click', () => {
  if (firstNumber && operatorType && secondNumber) {
    screen.textContent = ""
    result = operator(firstNumber, operatorType, secondNumber);
    screen.textContent = result;
    reset();
    selectNumber(result)
  }
  else{}
});


