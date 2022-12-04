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
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
  }

  const a1 = new Name("john", "SMITH");
  const a2 = new Name("sARah", "fRolliE");

  console.log([
    a1.fname + " <-- " + "John",
    a1.lname + " <-- " + "Smith",
    a1.fullname + " <-- " + "John Smith",
    a1.initials + " <-- " + "J.S",
    a2.fname + " <-- " + "Sarah",
    a2.lname + " <-- " + "Frollie",
    a2.fullname + " <-- " + "Sarah Frollie",
    a2.initials + " <-- " + "S.F",
  ]);
}
console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
{
  function sweetestIcecream(arr) {
    const flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10,
    };

    return Math.max(
      ...arr.map((ice) => flavors[ice.flavor] + ice.numSprinkles)
    );
  }

  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  const ice1 = new IceCream("Chocolate", 13);
  const ice2 = new IceCream("Vanilla", 0);
  const ice3 = new IceCream("Strawberry", 7);
  const ice4 = new IceCream("Plain", 18);
  const ice5 = new IceCream("ChocolateChip", 3);
  const ice6 = new IceCream("Chocolate", 23);
  const ice7 = new IceCream("Strawberry", 0);
  const ice8 = new IceCream("Plain", 34);
  const ice9 = new IceCream("Plain", 81);
  const ice10 = new IceCream("Vanilla", 12);

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23);
  console.log(
    sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]),
    34
  );
  console.log(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34);
  console.log(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81);
  console.log(
    sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]),
    34
  );
  console.log(sweetestIcecream([ice3, ice1]), 23);
  console.log(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33);
  console.log(sweetestIcecream([ice4, ice8, ice9]), 81);
  console.log(sweetestIcecream([ice5, ice7]), 10);
  console.log(
    sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]),
    33
  );
  console.log(
    sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9]),
    81
  );
  console.log(sweetestIcecream([ice1, ice4]), 23);
  console.log(sweetestIcecream([ice7, ice4]), 18);
  console.log(
    sweetestIcecream([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7]),
    34
  );
  console.log(sweetestIcecream([ice7, ice8, ice4, ice4, ice5, ice1]), 34);
  console.log(sweetestIcecream([ice10, ice10, ice9, ice4, ice7, ice9]), 81);
  console.log(sweetestIcecream([ice3, ice10, ice1]), 23);
  console.log(
    sweetestIcecream([ice3, ice4, ice7, ice3, ice7, ice10, ice2]),
    18
  );
  console.log(
    sweetestIcecream([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7]),
    81
  );
  console.log(sweetestIcecream([ice4, ice9, ice2]), 81);
  console.log(sweetestIcecream([ice8, ice2, ice2, ice2, ice4, ice8]), 34);
  console.log(
    sweetestIcecream([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2]),
    81
  );
  console.log(sweetestIcecream([ice8, ice10, ice5]), 34);
  console.log(sweetestIcecream([ice10, ice3, ice2, ice1, ice9]), 81);
  console.log(sweetestIcecream([ice8, ice3, ice4, ice5]), 34);
  console.log(sweetestIcecream([ice10, ice8, ice6, ice7, ice9, ice4]), 81);
  console.log(sweetestIcecream([ice5, ice4, ice6, ice6, ice1]), 33);
  console.log(sweetestIcecream([ice6, ice8, ice2, ice10, ice7, ice10]), 34);
  console.log(sweetestIcecream([ice1, ice9, ice7, ice3]), 81);
  console.log(
    sweetestIcecream([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3]),
    81
  );
  console.log(sweetestIcecream([ice5, ice1, ice7, ice6, ice8, ice1, ice8]), 34);
  console.log(sweetestIcecream([ice10, ice9, ice2, ice4, ice10]), 81);
  console.log(sweetestIcecream([ice3, ice7, ice10]), 17);
  console.log(sweetestIcecream([ice10, ice5, ice4]), 18);
  console.log(sweetestIcecream([ice9, ice2, ice4, ice8, ice3, ice3]), 81);
  console.log(sweetestIcecream([ice6, ice3, ice9, ice8, ice2, ice6]), 81);
  console.log(sweetestIcecream([ice10, ice3]), 17);
  console.log(sweetestIcecream([ice10, ice7, ice5, ice2, ice9]), 81);
  console.log(sweetestIcecream([ice10, ice10, ice4, ice1, ice9]), 81);
  console.log(sweetestIcecream([ice9, ice2, ice6, ice4, ice10, ice3]), 81);
  console.log(
    sweetestIcecream([ice8, ice10, ice1, ice7, ice8, ice9, ice1]),
    81
  );
  console.log(sweetestIcecream([ice7, ice5, ice3, ice8, ice1, ice9]), 81);
  console.log(sweetestIcecream([ice2, ice6, ice3]), 33);
  console.log(sweetestIcecream([ice6, ice6]), 33);
  console.log(sweetestIcecream([ice9, ice6, ice8, ice3, ice2, ice2]), 81);
  console.log(sweetestIcecream([ice1, ice3, ice3, ice6]), 33);
  console.log(sweetestIcecream([ice8, ice6]), 34);
  console.log(sweetestIcecream([ice1, ice1]), 23);
  console.log(
    sweetestIcecream([ice4, ice2, ice3, ice9, ice5, ice10, ice6]),
    81
  );
  console.log(
    sweetestIcecream([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10]),
    81
  );
  console.log(sweetestIcecream([ice5, ice8, ice5]), 34);
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  class OnesThreesNines {
    constructor(number) {
      this.ones = Math.floor(number / 1);
      this.threes = Math.floor(number / 3);
      this.nines = Math.floor(number / 9);
    }
  }

  const probs = [
    {
      num: 0,
      which: "ones",
      expect: 0,
    },
    {
      num: 1,
      which: "threes",
      expect: 0,
    },
    {
      num: 2,
      which: "nines",
      expect: 0,
    },
    {
      num: 3,
      which: "ones",
      expect: 3,
    },
    {
      num: 4,
      which: "threes",
      expect: 1,
    },
    {
      num: 10,
      which: "nines",
      expect: 1,
    },
    {
      num: 13,
      which: "ones",
      expect: 13,
    },
    {
      num: 15,
      which: "threes",
      expect: 5,
    },
    {
      num: 17,
      which: "nines",
      expect: 1,
    },
    {
      num: 20,
      which: "nines",
      expect: 2,
    },
  ];
  probs.forEach((prob) => {
    let testInstance = new OnesThreesNines(prob.num);
    console.log(testInstance[prob.which], prob.expect);
  });
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
