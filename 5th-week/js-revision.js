const peopleData = [
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    age: 12,
    sex: "male",
    height: 1.3,
    weight: 63,
  },
  {
    name: "Joburė",
    surname: "Vaitkutytė",
    age: 9,
    sex: "female",
    height: 1.25,
    weight: 53,
  },
  {
    name: "Verlas",
    surname: "Gudrioras",
    age: 48,
    sex: "male",
    height: 1.92,
    weight: 96,
  },
  {
    name: "Fanta",
    surname: "Burbulienė",
    age: 18,
    sex: "female",
    height: 1.55,
    weight: 81,
  },
  {
    name: "Ežvyra",
    surname: "Paplūdė",
    age: 76,
    sex: "female",
    height: 1.46,
    weight: 102,
  },
  {
    name: "Čiobaras",
    surname: "Ramūnskas",
    age: 72,
    sex: "male",
    height: 2.1,
    weight: 60,
  },
  {
    name: "Vabalas",
    surname: "Skėrys",
    age: 17,
    sex: "male",
    height: 1.72,
    weight: 60,
  },
  {
    name: "Lakštingala",
    surname: "Uolienė",
    age: 36,
    sex: "female",
    height: 1.66,
    weight: 42,
  },
];

// ------------------------------------ 1 Dalis ------------------------------------
console.group(
  "1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų: name, surname, age, height, weight, sex."
);
{
  console.log(peopleData);
}
console.groupEnd();

console.group(
  "2. Panaudojant array.forEach: \n- Atspausdinti kiekvieną elementą, \n- Atspausdinti kiekvieno elemento pilną vardą, \n- Atspausdinti kiekvieno elemento kūno masės indeksą."
);
{
  peopleData.forEach((person) => console.log(person));

  peopleData.forEach((person) =>
    console.log(`${person.name} ${person.surname}`)
  );

  peopleData.forEach((person) =>
    console.log(
      `KMI: ${person.name} ${person.surname} - ${(
        person.weight /
        person.height ** 2
      ).toFixed(2)}.`
    )
  );
}
console.groupEnd();

console.group(
  "3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: \n- kurių vardas ilgesnis nei 6 simboliai, \n- kurių svoris didesnis nei 80kg, \n- kurie aukštesni nei 185cm."
);
{
  const nameOver6Letters = peopleData.filter(
    (person) => person.name.length > 6
  );
  console.log(nameOver6Letters);

  const weightOver80 = peopleData.filter((person) => person.weight > 80);
  console.log(weightOver80);

  const heightOver185 = peopleData.filter((person) => person.height > 1.85);
  console.log(heightOver185);
}
console.groupEnd();

console.group(
  "4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: \n- ūgius, \n- svorius, \n- ūgius, svorius ir amžius : [{height, weight, age}, ...], \n- KMI indeksus, \n- KMI indeksus ir amžius."
);
{
  peopleData.map((person) => {
    console.log(`\n${person.name} ${person.surname}`);
    console.log(`Height: ${person.height}`);
    console.log(`Weight: ${person.weight}`);
    console.log({
      height: person.height,
      weight: person.weight,
      age: person.age,
    });
    console.log(`KMI: ${(person.weight / person.height ** 2).toFixed(2)}`);
    console.log(
      `KMI: ${(person.weight / person.height ** 2).toFixed(2)}, AGE: ${
        person.age
      } `
    );
  });
}
console.groupEnd();

console.group(
  "5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti: svorių vidurkį, ūgio vidurkį."
);
{
  const avgWeights = peopleData
    .reduce((sum, { weight }) => sum + weight / peopleData.length, 0)
    .toFixed(2);

  const avgHeights = peopleData
    .reduce((sum, { height }) => sum + height / peopleData.length, 0)
    .toFixed(2);

  console.log({
    avgWeights,
    avgHeights,
  });
}
console.groupEnd();

// ------------------------------------ 2 Dalis ------------------------------------
class Person {
  name;
  surname;
  age;
  sex;
  height;
  weight;

  constructor({ name, surname, age, sex, height, weight }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
  }

  get getKMI() {
    return (this.weight / this.height ** 2).toFixed(2);
  }

  toString() {
    return `Full name: ${this.name} ${this.surname}, age: ${this.age}, sex: ${this.sex}, height: ${this.height}, weight: ${this.weight}`;
  }
}

let people;

console.group(
  "0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą: \nPerson klasėje: \n- sukurti vidinį metodą: getKMI();     // suskaičiuoja kūno masės indeksą, \n- sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm."
);
{
  people = peopleData.map((person) => new Person(person));
  console.table(Person);

  people.forEach((person) =>
    console.log(`KMI: ${person.name} - ${person.getKMI}`)
  );
  people.forEach((person) => console.log(person.toString()));
}
console.groupEnd();

console.group(
  "1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg"
);
{
  const under20OverweightFemales = people.filter(
    (person) => person.sex === "female" && person.age < 20 && person.weight > 70
  );
  console.table(under20OverweightFemales);
}
console.groupEnd();

console.group(
  "2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5"
);
{
  const over25FitMales = people.filter(
    (person) => person.sex === "male" && person.age > 25 && person.getKMI < 18.5
  );
  console.table(over25FitMales);
}
console.groupEnd();

console.group("3. Atrinkti vaikus, su antsvoriu (KMI > 30)");
{
  const overweightKid = people.filter(
    (person) => person.age <= 12 && person.getKMI > 30
  );
  console.table(overweightKid);
}
console.groupEnd();

console.group("4. Atrinkti pensininkus, su antsvoriu (KMI > 30)");
{
  const overweightElderyPeople = people.filter(
    (person) => person.age > 50 && person.getKMI > 30
  );
  console.table(overweightElderyPeople);
}
console.groupEnd();

console.group("5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]");
{
  const less18More25KMI = people.filter(
    (person) => person.getKMI < 18.5 || person.getKMI > 25
  );
  console.table(less18More25KMI);
}
console.groupEnd();
