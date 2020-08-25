// Function
// - fundamental building block in  thge program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function == one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("hello");
}

function log(message) {
  console.log(message);
}

// log("hello!");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "change";
}

const obj = { name: "origin" };
changeName(obj);
// console.log(obj);

// 3. Default Parameters
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}

// showMessage("Hi!");

// 4. Rest parameters
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
// printAll("1", "2", "3");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //Error
}
// printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);

// 7. Early return, early exit
// 조건이 맞지 않는 경우 빨리 리턴을 하고 필요한 로직을 작성해라.

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) -> hoising이 된다, 선언 전에 호출 가능
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
};
// print();
const printAgain = print;
// printAgain();
const sumAgain = sum;
// console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 조건에 따라 매개변수로 전달된 함수로 호출하는 것
function randomQuiz(answer, printYes, printNo) {
  if (answer === "answer") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("Yes");
};

// named function
// better debugging or recursion
const printNo = function print() {
  console.log("No");
};

// randomQuiz("no", printYes, printNo);
// randomQuiz("answer", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
  console.log("simplePrint");
};
//  ==>
const simplePrint2 = () => console.log("simple");
const add = (a, b) => a + b;
const mul = (a, b) => {
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 실행
(function hello() {
  console.log("IIFE");
})();
