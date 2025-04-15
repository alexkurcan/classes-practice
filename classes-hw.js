const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    // Problem 1:
    // Create a class called Calculator with two methods:
    class Calculator {
      //  - add(x, y): returns the sum of x and y
      add(x, y) {
        return x + y;
      }

      //  - subtract(x, y): returns the result of x minus y
      subtract(x, y) {
        return x - y;
      }
    }

    // Then create an instance and call both methods.
    const calc = new Calculator();
    log("Add: " + calc.add(10, 5));         // should log 15
    log("Subtract: " + calc.subtract(10, 5)); // should log 5
  },

  function problem2() {
    // Problem 2:
    // Create a class called Person with two methods:
    class Person {
      //  - setName(name): sets a property called name
      setName(name) {
        this.name = name;
      }

      //  - getName(): returns the name
      getName() {
        return this.name;
      }
    }

    // Then create an instance, set the name to your name, and log it using getName().
    const me = new Person();
    me.setName("Alex"); // Change this to your name if you'd like!
    log("Name: " + me.getName());
  },

  function problem3() {
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    class Bird {
      fly() {
        log("Flying");
      }
    }

    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    class Penguin extends Bird {
      fly() {
        log("Penguins can't fly");
      }
    }

    // Then create one Bird and one Penguin, and call their fly() methods.
    const bird = new Bird();
    const penguin = new Penguin();

    bird.fly();     // logs "Flying"
    penguin.fly();  // logs "Penguins can't fly"
  },

  function problem4() {
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    class Shape {
      describe() {
        log("I'm a shape");
      }
    }

    // Create two subclasses: Circle and Square
    // - Circle's describe() method logs "I'm a circle"
    class Circle extends Shape {
      describe() {
        log("I'm a circle");
      }
    }

    // - Square's describe() method logs "I'm a square"
    class Square extends Shape {
      describe() {
        log("I'm a square");
      }
    }

    // Then create instances of Circle and Square and call their describe() methods.
    const circle = new Circle();
    const square = new Square();

    circle.describe(); // logs "I'm a circle"
    square.describe(); // logs "I'm a square"
  },

  function problem5() {
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    class Employee {
      work() {
        log("Working...");
      }
    }

    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    class Manager extends Employee {
      hireEmployee() {
        log("Employee hired");
      }
    }

    // Then create an instance of Manager, and call both methods.
    const manager = new Manager();
    manager.work();          // logs "Working..."
    manager.hireEmployee();  // logs "Employee hired"
  }
];

// This creates buttons and attaches click events for each problem
problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
