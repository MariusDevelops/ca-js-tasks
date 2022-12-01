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
  // ... code
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
{
  // ... code
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
