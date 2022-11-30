console.group(
  "11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių"
);
{
  function isEvenNumberOfLetters(str) {
    return str.length % 2 === 0;
  }

  console.log("---");
  console.log({
    labas: isEvenNumberOfLetters("labas"),
    kempės: isEvenNumberOfLetters("kempės"),
    123123: isEvenNumberOfLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {
    const searchVowels = str.match(/[aąeęėiįyouųū]/gi);

    return searchVowels === null ? 0 : searchVowels.length;
  }

  console.log("---");
  console.log({
    aaaaa: getNumberOfVowels("aaaaa"),
    bbbbb: getNumberOfVowels("bbbbb"),
    sasasasa: getNumberOfVowels("sasasasa"),
    aeyuioąčė: getNumberOfVowels("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    const searchConsonants = str.match(/[bcčdfghjklmnprsštvzž]/gi);

    return searchConsonants === null ? 0 : searchConsonants.length;
  }

  console.log("---");
  console.log({
    aaaaa: getNumberOfConsonants("aaaaa"),
    sasasasa: getNumberOfConsonants("sasasasa"),
    aeyuioąčė: getNumberOfConsonants("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaitmenų"
);
{
  function isOnlyLetters(str) {
    const searchNumbers = str.match(/[0123456789]/gi);

    return searchNumbers === null ? true : false;
  }

  console.log("---");
  console.log({
    labas: isOnlyLetters("labas"),
    kempės: isOnlyLetters("kempės"),
    123123: isOnlyLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    const searchLetter = str.match(/a/gi);

    return searchLetter === null ? 0 : searchLetter.length;
  }

  console.log("---");
  console.log({
    labas: letterACount("labas"),
    kempės: letterACount("kempės"),
    123123: letterACount("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje"
);
{
  function letterCount(str, searchLetter) {
    const re = new RegExp(searchLetter, "gi");
    const searchAnyLetter = str.match(re);

    return searchAnyLetter === null ? 0 : searchAnyLetter.length;
  }

  console.log("---");
  console.log({
    "labas, a": letterCount("labas", "a"),
    "kempės, k": letterCount("kempės", "k"),
    "123123, z": letterCount("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje"
);
{
  function indexOfLetterA(str) {
    return str.indexOf("a");
  }

  console.log("---");
  console.log({
    labas: indexOfLetterA("labas"),
    kempės: indexOfLetterA("kempės"),
    123123: indexOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje"
);
{
  function indexOfLetter(str, searchLetter) {
    return str.indexOf(searchLetter);
  }

  console.log("---");
  console.log({
    "labas, a": indexOfLetter("labas", "a"),
    "kempės, k": indexOfLetter("kempės", "k"),
    "123123, z": indexOfLetter("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje"
);
{
  function indexesOfLetterA(str) {
    const indexes = [];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === "a") {
        indexes.push(i);
      }
    }
    return indexes;
  }

  console.log("---");
  console.log({
    labas: indexesOfLetterA("labas"),
    kempės: indexesOfLetterA("kempės"),
    123123: indexesOfLetterA("123123"),
    kėdės: indexesOfLetterA("kėdės"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje"
);
{
  function indexesOfLetter(str, searchLetter) {
    const indexes = [];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === searchLetter) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  console.log("---");
  console.log({
    "labas, a": indexesOfLetter("labas", "a"),
    "kempės, m": indexesOfLetter("kempės", "m"),
    "123123, 2": indexesOfLetter("123123", "2"),
    "kėdės, ė": indexesOfLetter("kėdės", "ė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();
