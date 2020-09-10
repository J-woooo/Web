"use strict";

// Promise is a JajaScript object for asynchronous operation.

// state: promise가 만들어져서 operation을 수행 중 -> pending, 완료했는지 -> fulfilled or rejected

// Producer vs Consumer 데이터를 제공하는 사람과 데이터를 사용하는 소비자의 견해를 이해

// 1. Producer
// 새로운 promise가 만들어질땐, executor가 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("jinwoo");
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// resolve vallback 함수에서 전달된 value가 출력된다
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
// finally는 무조건 호출됨

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  // 여러가지 비동기적인 요소를 묶어서 then으로 처리할 수 있다.
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🧀`), 1000);
  });

getHen()
  .then(getEgg)
  .catch(error => {
      return '🥪';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

//   5. Call