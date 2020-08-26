function calc(command, a, b) {
  if (command == "add") {
    return a + b;
  } else if (command == "substract") {
    return a - b;
  } else if (command == "multiply") {
    return a * b;
  } else if (command == "remainder") {
    return a / b;
  } else {
    console.log("Error. Try again");
    calc(command, a, b);
  }
}

// command, a, b = prompt()
result = calc("remainder", 4, 2);
console.log(result);
