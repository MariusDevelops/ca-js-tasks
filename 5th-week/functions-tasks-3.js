console.group(
  "28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'"
);
{
  function strReverse(str) {
    return str.split("").reverse().join("");
  }
  console.log("---");
  console.log({
    "viens du trys": strReverse("viens du trys"),
    "as tave myliu": strReverse("as tave myliu"),
    "Bairis seniuk": strReverse("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();

console.group(
  "29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)"
);
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
{
  function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
  }

  function isPalyndrome(str) {
    let i = 0;
    let k = str.length - 1;
    while (i < k) {
      if (str[i] !== str[k]) return false;
      i++;
      k--;
    }
    return true;
  }
  console.log("---");
  console.log({
    "A man, a plan, a canal. Panama": palindrome(
      "A man, a plan, a canal. Panama"
    ),
  });
  console.log("---");

  console.log("---");
  console.log({
    mama: isPalyndrome("mama"),
    mamam: isPalyndrome("mamam"),
    123321: isPalyndrome("123321"),
    123456: isPalyndrome("123456"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{
  function capitalizeFirstLetter(str) {
    // code ...
  }

  function splitIntoSentences(paragraph) {
    /*
      2.1 Atskirti pagal sakinio baigimo ženklus ir juos įsiminti
      2.2 Pašalinti tuščius tarpus iš kairės ir dešinės
      2.3 grąžinti objektą su dviem masyvais:
      {
        sentences: [sentence1, sentence2, ... , sentenceN],
        separator: [ '.', '?', ... , '!'],
      }
    */
  }

  function reduceEmptySpaces(str) {
    // Jūsų sugalvota logika, kaip šalinti tarpus prieš kablelį ir kelis tarpus iš eilės
  }

  // 1.
  function fixParagraph(paragraph) {
    /*
      2. Pirmiausiai suskirstome į sakinius, naudojant splitIntoSentences: 
            string  ->  {
                          sentences: [sentence1, sentence2, ... , sentenceN],
                          separator: [ '.', '?', ... , '!'],
                        }
      3. Redaguoti kiekvieną sakinį, naudojant funkciją reduceEmptySpaces
      4. Redaguoti kiekvieną sakinį, naudojant funkciją capitalizeFirstLetter
      5. Sujungti sakinius su atitinkamais sakinių skiriamaisiais/baigiamaisiais ženklais
      6. Grąžinti rezultatą.
    */
  }

  // const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  // const fixedParagraph = fixParagraph(paragraph);
  // console.log(paragraph);
  // console.log(fixedParagraph);
  // console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group(
  "31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą"
);
{
  function splitSentence(sentence) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'Labas aš Jonas': splitSentence('Labas aš Jonas'),
  //   'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];
console.group(
  "32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį"
);
{
  function explode(str, separator) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
  //   "'home/about/13', '/'": explode('home/about/13', '/'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();
