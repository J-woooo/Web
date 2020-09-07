"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

console.clear();
// 3. Looping over an array
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruits);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍑", "🍒");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍉", "🍊");
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift는 push, pop보다 느리다.
// 앞에서부터 데이터를 넣을 경우 기존 데이터들이 이동해야 하기 때문
// splice: remove an item by index position
fruits.push("🍑", "🍒", "🥝");
console.log(fruits);
fruits.splice(1, 1, "🥟", "🥚"); //몇개를 지울지 지정을 안해주면 인덱스 기준으로 전부 지운다.
console.log(fruits);

// combine two arrays
const fruits2 = ["🍕", "🍔"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎")); //없으면 -1
console.log(fruits.includes("🍎")); //없으면 false

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
