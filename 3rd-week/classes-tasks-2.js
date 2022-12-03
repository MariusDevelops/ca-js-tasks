console.groupCollapsed("1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY");
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    // constructor(...params) {
    //   [this.name, this.age, this.height, this.weight] = params;
    // }

    getAge() {
      return (this.age = `${this.name} is age ${this.age}`);
    }

    getHeight() {
      return (this.height = `${this.name} is ${this.height}cm`);
    }

    getWeight() {
      return (this.weight = `${this.name} weighs ${this.weight}kg`);
    }
  }

  const player1 = new Player("Patrick Mahomes", 24, 188, 104);
  const player2 = new Player("Jimmy Garoppolo", 28, 188, 102);
  const player3 = new Player("Julio Jones", 31, 191, 100);

  console.log([player1.getAge(), player1.getHeight(), player1.getWeight()]);
  console.log([player2.getAge(), player2.getHeight(), player2.getWeight()]);
  console.log([player3.getAge(), player3.getHeight(), player3.getWeight()]);
}
console.groupEnd();

console.groupCollapsed("2. - https://edabit.com/challenge/yxKoCKemzacK6PECM");
{
  class Calculator {
    // num1;
    // num2;

    // constructor(num1, num2) {
    //   this.num1 = num1;
    //   this.num2 = num2;
    // }

    add(num1, num2) {
      return num1 + num2;
    }

    subtract(num1, num2) {
      return num1 - num2;
    }

    multiply(num1, num2) {
      return num1 * num2;
    }

    divide(num1, num2) {
      return num1 / num2;
    }
  }

  const calculator = new Calculator(this.num1, this.num2);

  console.log({
    "5 + 5": calculator.add(5, 5),
    "20 + 5": calculator.add(20, 5),
    "30 - 5": calculator.subtract(30, 5),
    "100 - 5": calculator.subtract(100, 5),
    "5 * 5": calculator.multiply(5, 5),
    "100 * 5": calculator.multiply(100, 5),
    "10 / 5": calculator.divide(10, 5),
    "100 / 5": calculator.divide(100, 5),
  });
}
console.groupEnd();

console.groupCollapsed("3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS");
{
  class Employee {
    firstname;
    lastname;

    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      // this.fullname = `${firstname} ${lastname}`;
      // this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }

    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    }

    get email() {
      return `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
    }
  }

  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");
  const emp4 = new Employee("Joshua", "Senoron");

  console.log([
    emp1.firstname + " <-- " + "John",
    emp1.lastname + " <-- " + "Smith",
    emp1.fullname + " <-- " + "John Smith",
    emp1.email + " <-- " + "john.smith@company.com",
    emp2.firstname + " <-- " + "Mary",
    emp2.lastname + " <-- " + "Sue",
    emp2.fullname + " <-- " + "Mary Sue",
    emp2.email + " <-- " + "mary.sue@company.com",
    emp3.firstname + " <-- " + "Antony",
    emp3.lastname + " <-- " + "Walker",
    emp3.fullname + " <-- " + "Antony Walker",
    emp3.email + " <-- " + "antony.walker@company.com",
    emp4.firstname + " <-- " + "Joshua",
    emp4.lastname + " <-- " + "Senoron",
    emp4.fullname + " <-- " + "joshua.senoron@company.com",
  ]);
}
console.groupEnd();

console.groupCollapsed("4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu");
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age > other.age) {
        return `${other.name} is younger than me.`;
      } else if (this.age < other.age) {
        return `${other.name} is older than me.`;
      } else {
        return `${other.name} is the same age as me.`;
      }
    }
  }

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log([
    p1.compareAge(p2) + " <-- " + "Joel is older than me.",
    p1.compareAge(p3) + " <-- " + "Lily is the same age as me.",
    p2.compareAge(p1) + " <-- " + "Samuel is younger than me.",
    p2.compareAge(p3) + " <-- " + "Lily is younger than me.",
    p3.compareAge(p1) + " <-- " + "Samuel is the same age as me.",
    p3.compareAge(p2) + " <-- " + "Joel is older than me.",
  ]);
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA;
      this.sideB = sideB;
    }
    getArea() {
      return this.sideA * this.sideB;
    }
    getPerimeter() {
      return (this.sideA + this.sideB) * 2;
    }
  }

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    getArea() {
      return Math.PI * this.radius ** 2;
      // return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  function round(number) {
    var factor = Math.pow(10, 5);
    return Math.round(number * factor) / factor;
  }
  // let randomInt = round(Math.floor(Math.random() * Math.floor(200)));

  const circo = new Circle(20);
  const circo1 = new Circle(2);
  const circo2 = new Circle(4.4);

  console.log([
    round(circo.getArea()) + " <-- " + "1256.63706",
    round(circo.getPerimeter()) + " <-- " + "125.66371",
    round(circo1.getArea()) + " <-- " + "12.56637",
    round(circo1.getPerimeter()) + " <-- " + "12.56637",
    round(circo2.getArea()) + " <-- " + "60.82123",
    round(circo2.getPerimeter()) + " <-- " + "27.64602",
  ]);
}
console.groupEnd();

console.groupCollapsed("6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b");
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp");
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn");
{
  // ... code
}
console.groupEnd();
