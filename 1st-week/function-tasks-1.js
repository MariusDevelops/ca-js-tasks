console.groupCollapsed(
  "1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą."
);
{
  const array = ["first element", "second element", "third element"];

  function returnFirstElement(arr) {
    return arr[0];
  }

  const result = returnFirstElement(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina."
);
{
  const array = ["first element", "second element", "third element"];

  function removedElement(arr) {
    return arr.shift();
  }

  const result = removedElement(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą."
);
{
  const array = ["first element", "second element", "third element"];

  function lastElement(arr) {
    return arr[arr.length - 1];
  }

  const result = lastElement(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina."
);
{
  const array = ["first element", "second element", "third element"];

  function lastElement(arr) {
    return arr.pop();
  }

  const result = lastElement(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "5. Parašykite funkciją, kuri grąžina elementų kiekį masyve"
);
{
  const array = ["first element", "second element", "third element"];

  function allElements(arr) {
    return arr.length;
  }

  const result = allElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą"
);
{
  const array = ["first element", "second element", "third element"];

  function lastElementIndex(arr) {
    return arr.length - 1;
  }

  const result = lastElementIndex(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis"
);
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    let oneElement = [];
    for (i = 0; i < arr.length; i += 1) {
      oneElement += i + "\n";
    }
    return oneElement;
  }

  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis"
);
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    let oneElement = [];
    for (i = 0; i < arr.length; i += 1) {
      oneElement += arr[i] + "\n";
    }
    return oneElement;
  }

  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  "
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    let oneElement = [];
    for (i = 0; i < arr.length; i += 1) {
      oneElement += "[" + i + "] " + "=> " + arr[i] + "\n";
    }
    return oneElement;
  }

  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo."
);
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    arr.reverse();
    let oneElement = [];
    for (i = 0; i < arr.length; i += 1) {
      oneElement += arr[i] + "\n";
    }
    return oneElement;
  }

  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ..."
);
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    let oneElement = [];
    for (i = 0; i < arr.length; i += 1) {
      oneElement += i + " ";
    }
    return oneElement;
  }

  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48"
);
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    let oneElement = [];

    for (i = 0; i < arr.length; i += 1) {
      const isLastElement = i === arr.length - 1;
      oneElement += arr[i] + (isLastElement ? "." : ", ");
    }
    return oneElement;
  }

  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed(
  "13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:"
);
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const array = ["first element", "second element", "third element"];

  function printAllElements(arr) {
    let oneElement = [];

    for (i = 0; i < arr.length; i += 1) {
      const isLastElement = i === arr.length - 1;
      oneElement +=
        "[" + i + "]" + "=>" + arr[i] + (isLastElement ? "." : ", ");
    }
    return oneElement;
  }
  const result = printAllElements(array);

  console.log(array);
  console.log(result);
}
console.groupEnd();
