console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

  function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
  }

  console.log(sortDrinkByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }

  console.log(
    addName({}, "Brutus", 300),
    addName({ piano: 500 }, "Brutus", 400),
    addName({ piano: 500, stereo: 300 }, "Caligula", 440)
  );
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");
{
  function generation(x, y) {
    gen = {
      "-3": { m: "great grandfather", f: "great grandmother" },
      "-2": { m: "grandfather", f: "grandmother" },
      "-1": { m: "father", f: "mother" },
      0: { m: "me!", f: "me!" },
      1: { m: "son", f: "daughter" },
      2: { m: "grandson", f: "granddaughter" },
      3: { m: "great grandson", f: "great granddaughter" },
    };
    return gen[x][y];
  }

  console.log(generation(2, "f"), generation(-3, "m"), generation(1, "f"));
}
console.groupEnd();

console.groupCollapsed("4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX");
{
  function maximumScore(tiles) {
    let sum = 0;

    for (let i = 0; i < tiles.length; i += 1) {
      const tile = tiles[i];

      sum += tile.score;
    }

    return sum;
  }

  const tiles = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];

  const result = maximumScore(tiles);

  console.log(result);
}
console.groupEnd();

console.groupCollapsed("5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD");
{
  function calculateDifference(obj, limit) {
    let sum = 0;
    for (let item in obj) {
      sum += obj[item];
    }
    return sum - limit;
  }

  console.log(
    calculateDifference({ "baseball bat": 20 }, 5),
    calculateDifference({ skate: 10, painting: 20 }, 19),
    calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)
  );
}
console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  // function toArray(obj) {
  //   return Object.entries(obj);
  // }

  function toArray(obj) {
    const result = [];
    let i = 0;
    for (const key in obj) {
      result[i] = [key, obj[key]];
      i += 1;
    }

    return result;
  }

  const arr1 = toArray({ a: 1, b: 2, c: 6 });
  const arr2 = toArray({ shrimp: 15, tots: 122 });
  const arr3 = toArray({});

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
  function inkLevels(inks) {
    const { cyan, magenta, yellow } = inks;
    let min = Math.min(cyan, magenta, yellow);
    return min;
  }

  console.log(
    inkLevels({
      cyan: 23,
      magenta: 12,
      yellow: 10,
    }),
    inkLevels({
      cyan: 432,
      magenta: 543,
      yellow: 777,
    }),
    inkLevels({
      cyan: 700,
      magenta: 700,
      yellow: 0,
    })
  );
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
  function calculateLosses(obj) {
    for (let key in obj) {
      return Object.values(obj).reduce((a, c) => a + c);
    }
    return "Lucky you!";
  }

  const stolenItems1 = calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  });
  const stolenItems2 = calculateLosses({
    painting: 20000,
  });
  const stolenItems3 = calculateLosses({});

  console.log(stolenItems1);
  console.log(stolenItems2);
  console.log(stolenItems3);
}
console.groupEnd();
