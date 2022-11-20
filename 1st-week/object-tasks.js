console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");
{
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
}
console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  function toArray(obj) {
    const result = [];
    let i = 0;
    for (const key in obj) {
      result[i] = [key, obj[key]];
      i += 1;
    }

    return result;
  }

  // function toArray(obj) {
  //   return Object.entries(obj);
  // }

  const arr1 = toArray({ a: 1, b: 2, c: 6 });
  const arr2 = toArray({ shrimp: 15, tots: 122 });

  console.log(arr1);
  console.log(arr2);
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
}
console.groupEnd();
