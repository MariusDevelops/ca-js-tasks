// ----------------------Užduotys--------------------------
const numbers = [
  1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3,
];

console.group("1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve");
console.log("---");
{
  const mulArrBy2 = numbers.map((number) => number * 2);

  console.log({
    numbers,
    result: mulArrBy2,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve");
console.log("---");
{
  const powerArrBy2 = numbers.map((number) => number ** 2);

  console.log({
    numbers,
    result: powerArrBy2,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "3. Padauginti masyvo narius iš jų index'o (vietos masyve) ir išsaugoti naujame masyve"
);
console.log("---");
{
  const mulArrElementsByIndex = numbers.map((number, index) => number * index);

  console.log({
    numbers,
    result: mulArrElementsByIndex,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("4. Atrinkti tiktai teigimų elementų masyvą");
console.log("---");
{
  const filterPositives = numbers.filter((number) => number > 0);

  console.log({
    numbers,
    result: filterPositives,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("5. Atrinkti tiktai neigiamų elementų masyvą");
console.log("---");
{
  const filterNegatives = numbers.filter((number) => number < 0);

  console.log({
    numbers,
    result: filterNegatives,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("6. Atrinkti tiktai lyginių skaičių masyvą");
console.log("---");
{
  const filterEquals = numbers.filter((number) => number % 2 === 0);

  console.log({
    numbers,
    result: filterEquals,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("7. Atrinkti tiktai nelyginių skaičių masyvą");
console.log("---");
{
  const filterOdds = numbers.filter((number) => number % 2 !== 0);

  console.log({
    numbers,
    result: filterOdds,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą"
);
{
  // const arrAbsoluteValues = numbers.map((number) => {
  //   if (number < 0) {
  //     return (number *= -1);
  //   } else {
  //     return number;
  //   }
  // });

  const arrAbsoluteValues = numbers.map((number) =>
    number < 0 ? (number *= -1) : number
  );

  console.log("---");
  console.log({
    numbers,
    result: arrAbsoluteValues,
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "9. Pakelti visas masyvo reikšmes laipsniu 'index' ir išsaugoti naujame masyve"
);
console.log("---");
{
  const powArrElementsByIndex = numbers.map((number, index) => number ** index);

  console.log({
    numbers,
    result: powArrElementsByIndex,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("10. Atrinkti tik natūralių skaičių masyvą");
console.log("---");
{
  function filterNaturals(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterNaturals(numbers)
  // });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve"
);
console.log("---");
{
  function absArrElements(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: absArrElements(numbers)
  // });
}
console.log("---");
console.groupEnd();

console.group("12. Atrinkti kas antrą elementą");
console.log("---");
{
  function filterEverySecond(arr) {
    //  Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEverySecond(numbers)
  // });
}
console.log("---");
console.groupEnd();

console.group("13. Atrinkti kas penktą elementą");
console.log("---");
{
  function filterEveryFifth(arr) {
    //  Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEveryFifth(numbers)
  // });
}
console.log("---");
console.groupEnd();

console.group(
  "14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)"
);
console.log("---");
{
  function printArr(arr) {
    // ... code
  }
  printArr(numbers);
}
console.log("---");
console.groupEnd();

console.group(
  "15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą"
);
console.log("---");
{
  function sumArr(arr) {
    // Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: sumArr(numbers)
  // });
}
console.log("---");
console.groupEnd();

console.group(
  "16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį"
);
console.log("---");
{
  function avgArr(arr) {
    // Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: avgArr(numbers)
  // });
}
console.log("---");
console.groupEnd();

console.group(
  "17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve."
);
console.log("---");
{
  function arrMax(arr) {
    //  Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: arrMax(numbers)
  // });
}
console.log("---");
console.groupEnd();

console.group(
  "18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve."
);
console.log("---");
{
  function arrMin(arr) {
    //  Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: arrMin(numbers)
  // });
}
console.log("---");
console.groupEnd();
