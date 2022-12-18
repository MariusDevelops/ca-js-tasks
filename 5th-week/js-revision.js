const peopleData = [
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    age: 15,
    sex: "male",
    height: 1.3,
    weight: 45,
  },
  {
    name: "Joburė",
    surname: "Vaitkutytė",
    age: 9,
    sex: "female",
    height: 1.55,
    weight: 63,
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
    age: 32,
    sex: "female",
    height: 1.55,
    weight: 35,
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
    weight: 92,
  },
  {
    name: "Vabalas",
    surname: "Skėrys",
    age: 17,
    sex: "male",
    height: 1.72,
    weight: 79,
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
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
