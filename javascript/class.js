"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const p1 = new Person("name1", 20);
// console.log(p1.name);
// console.log(p1.age);
// p1.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value<0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Jinwoo", "Bae", -1); //0

// 3. Fields (public, private)
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
// console.log(experiment.publicField); //2
// console.log(experiment.privateField); //undefined

// 4. Static properties and methods
// Class 자체에 붙어있는 static
// Object에 상관없이 공통적으로 Class에서 쓸 수 있다면 static으로 작성. 메모리 절약
class Article {
  static publisher = "Publisher";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined
// console.log(Article.publisher); // Publisher
// Article.printPublisher(); // Publisher

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모 method 호출
    console.log(" ");
  }
  // Overwriting
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "red");
// rectangle.draw();
// triangle.draw();

// 6. Class checking: instanceOf
// object가 class의 instance 인지 확인 (true / false)
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T
