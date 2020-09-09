"use strict";

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
// hoisting: 변수나 함수의 선언이 자동으로 제일 위로 올라가는 것.
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

// Synchronous callback 동기
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback 비동기
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "jw" && password === "123") ||
        (id === "id" && password === "456")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "jw") {
        onSuccess({ name: "jw", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
