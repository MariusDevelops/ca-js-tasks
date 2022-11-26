const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
console.groupCollapsed("1. Atspausdinkite visus žmones eilutėmis");

{
  function isPersonMarried(person) {
    if (person.married === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  function personHasCar(person) {
    if (person.hasCar === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  function printEverythingAboutPerson(person) {
    console.log(
      `Name: ${person.name}. Surname: ${person.surname}. Sex: ${
        person.sex
      }. Age: ${person.age}. Income: ${
        person.income
      }. Married: ${isPersonMarried(person)}. Has a car: ${personHasCar(
        person
      )}.`
    );
  }

  people.forEach(printEverythingAboutPerson);
}
console.groupEnd();

console.groupCollapsed(
  "2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu"
);
{
  function printNamesAndSurnames(person) {
    console.log(`${person.name}-${person.surname}`);
  }

  people.forEach(printNamesAndSurnames);
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą"
);
{
  function isPersonMarried(person) {
    if (person.married === true) {
      return "Married";
    } else {
      return "Not Married";
    }
  }

  function printNamesAndSurnames(person) {
    console.log(
      `${person.name} ${person.surname} - ${isPersonMarried(person)}`
    );
  }

  people.forEach(printNamesAndSurnames);
}
console.groupEnd();

console.groupCollapsed(
  "4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą"
);
{
  function incomeAndSex(person) {
    return `${person.sex} ${person.income}`;
  }

  const getIncomeAndSex = people.map(incomeAndSex);

  console.log(getIncomeAndSex);
}
console.groupEnd();

console.groupCollapsed(
  "5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą"
);
{
  function nameSurnameAndSex(person) {
    return `Name: ${person.name}, Surname: ${person.surname}, Sex: ${person.sex}`;
  }

  const getNameSurnameAndSex = people.map(nameSurnameAndSex);

  console.log(getNameSurnameAndSex);
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinkite visus vyrus");
{
  function isMan(person) {
    return person.sex === "male";
  }

  const man = people.filter(isMan);

  console.log(man);
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinkite visas moteris");
{
  function isWoman(person) {
    return person.sex === "female";
  }

  const woman = people.filter(isWoman);

  console.log(woman);
}
console.groupEnd();

console.groupCollapsed(
  "8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas"
);
{
  function onlyNamesAndSurnames(person) {
    return `${person.name} ${person.surname}`;
  }

  function hasCar(person) {
    return person.hasCar === true;
  }

  const theyHaveCars = people.filter(hasCar);
  const printNamesHasCars = theyHaveCars.map(onlyNamesAndSurnames);

  console.log(printNamesHasCars);
}
console.groupEnd();

console.groupCollapsed("9. Atspausdinkite žmones kurie yra susituokę");
{
  const marriedPeople = people.filter(({ married }) => married === true);

  console.log(marriedPeople);
}
console.groupEnd();

console.groupCollapsed(
  "10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį"
);
{
  const peopleWithCars = people.filter(({ hasCar }) => hasCar === true).length;

  console.log(peopleWithCars);
}
console.groupEnd();

console.groupCollapsed(
  '11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"'
);
{
  const refactorPeopleList = people.map(
    ({ name, surname, sex, age, income, married, hasCar }) => {
      const salary = income;
      return {
        name,
        surname,
        sex,
        age,
        salary,
        married,
        hasCar,
      };
    }
  );

  console.log(refactorPeopleList);
}
console.groupEnd();

console.groupCollapsed(
  "12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės"
);
{
  const refactorPeopleList = people.map(({ age, income, married, hasCar }) => {
    return {
      age,
      income,
      married,
      hasCar,
    };
  });

  console.log(refactorPeopleList);
}
console.groupEnd();

console.groupCollapsed(
  '13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe'
);
{
  const refactorPeopleList = people.map(
    ({ name, surname, sex, age, income, married, hasCar }) => {
      const fullName = `${name} ${surname}`;
      return {
        fullName,
        sex,
        age,
        income,
        married,
        hasCar,
      };
    }
  );

  console.log(refactorPeopleList);
}
console.groupEnd();
