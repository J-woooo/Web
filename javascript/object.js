// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key: value};

// 1. Literals and properties
const obj1 = {}; //object literal syntax
const obj2 = new Object(); //object constructor syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const person = { name: "jinwoo", age: 4 };
print(person);

person.hasJob = true;
console.log(person.hasJob);

delete person.hasJob; //삭제 가능
console.log(person.hasJob);

// 2. Computed properties
// key should be always 'string'
console.log(person.name);
console.log(person["name"]);
person["hasJob"] = true;
console.log(person.hasJob);

// 실시간으로 값을 받아오는게 필요할 때 Computed Property를 쓴다.
// 동적으로 key의 value를 받아올 필요가 있을 때 사용
function printValue(obj, key) {
  // console.log(obj.key); 출력안됨
  console.log(obj[key]);
}
printValue(person, "name");
printValue(person, "age");

// 3. Property value shorthand
// 4. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("name1", 20);
console.log(person1);

// 5. in operator: property existence check (key in obj)
console.log("name" in person);
console.log("random" in person);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in person) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
// 같은 메모리를 가리키므로 값이 바뀜
const user = { name: "jinwoo", age: "25" };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit, fruit2);
console.log(mixed.color);
console.log(mixed.size);
