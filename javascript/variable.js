// 1. use strict
// added in ES 5
// use this for Vanila JS
"use strict";

// 2. Variable
// let (added in ES6)
// hoisting: 어디에 선언했냐에 상관없이 선언을 제일 위로 끌어올려주는 것
// no block scope:
let a = 7;

// 3. Constants 상수
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
// Mutable Data type = let
// Immutable Data type = Constants

// 4. Variables types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function -> 함수형도 변수에 할당 가능

// int
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log("value: ${greteting}, type: ${typeof greeting}");

// boolean
// false: 0, null,. undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value:${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
// console.log(symbol1 == symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 == gSymbol2); // true
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real-life object, data structure
const jw = { name: "jinwoo", age: 25 };
jw.age = 20;

// 5. Dynamic typing: dynamically typed language
// runtime에서 type이 정해진다.
let text = "hello";
