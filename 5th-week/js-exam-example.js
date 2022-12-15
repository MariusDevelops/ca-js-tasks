const carsData = [
  {
    brand: "Tesla",
    model: "Model S",
    year: 2012,
    color: "red",
    fuelTypes: ["electric"],
    price: 45000,
  },
  {
    brand: "Audi",
    model: "A6",
    year: 2014,
    color: "black",
    fuelTypes: ["dysel", "electric"],
    price: 16000,
  },
  {
    brand: "audi",
    model: "A5",
    year: 2014,
    color: "black",
    fuelTypes: ["petrol"],
    price: 16000,
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2017,
    color: "black",
    fuelTypes: ["electric", "petrol"],
    price: 16000,
  },
  {
    brand: "Subaru",
    model: "Impreza",
    year: 2019,
    color: "black",
    fuelTypes: ["petrol"],
    price: 16000,
  },
  {
    brand: "Audi",
    model: "A7",
    year: 2015,
    color: "black",
    fuelTypes: ["petrol"],
    price: 12000,
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2017,
    color: "black",
    fuelTypes: ["dysel"],
    price: 16000,
  },
  {
    brand: "Toyota",
    model: "Prius",
    year: 2008,
    color: "grey",
    fuelTypes: ["gas", "petrol", "electric"],
    price: 5000,
  },
];

class Car {
  brand;
  model;
  year;
  color;
  fuelTypes;
  price;

  constructor({ brand, model, year, color, fuelTypes, price }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getFuelType() {
    return this.fuelTypes.join("/");
  }
}

let cars, electricCars, petrolCars;

const EUR2USD = 1.05;

console.group(
  "1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių."
);
{
  console.log(Car);
  console.log(
    new Car({
      brand: "Toyota",
      model: "Prius",
      year: 2008,
      color: "grey",
      fuelTypes: ["gas", "petrol", "electric"],
      price: 5000,
    })
  );
}
console.groupEnd();

console.group("2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų");
{
  cars = carsData.map((car) => new Car(car));
  console.log(cars);
}
console.groupEnd();

console.group(
  "3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'."
);
{
  cars.forEach((car) => console.log(car.getFuelType()));
}
console.groupEnd();

console.group(
  "4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:"
  //   Tayota Corola - dysel/electric
  //   Nisan Bajam - petrol/gas
  //   Kanagi BaBa - uranus
);
{
  cars.forEach((car) =>
    console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`)
  );
}
console.groupEnd();

console.group("5. Atrinkite tik elektrinius automobilius");
{
  //   cars.filter((car) => {
  //     if (car.fuelTypes.includes("electric")) {
  //       console.log(car);
  //     }
  //   });

  electricCars = cars.filter((car) => car.fuelTypes.includes("electric"));
  console.log(electricCars);
}
console.groupEnd();

console.group(
  "6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai"
);
{
  //   cars.filter((car) => {
  //     if (car.fuelTypes.includes("petrol") && car.year > 2016) {
  //       console.log(car);
  //     }
  //   });

  petrolCars = cars.filter(
    (car) => car.fuelTypes.includes("petrol") && car.year > 2016
  );
  console.log(petrolCars);
}
console.groupEnd();

console.group(
  "7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai"
);
{
  cars.filter((car) => {
    if (
      car.brand.toLowerCase() === "audi" &&
      car.year > 2012 &&
      car.year < 2016 &&
      car.fuelTypes.includes("dysel")
    ) {
      return console.log(car);
    }
  });
}
console.groupEnd();

console.group("8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį");
{
  const electricCarsAvg = electricCars.reduce(
    (sum, { price }) => sum + price / electricCars.length,
    0
  );
  console.log(electricCarsAvg);
}
console.groupEnd();

console.group("9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę");
{
  const petrolCarsAvg = petrolCars.reduce((sum, { price }) => sum + price, 0);
  console.log(petrolCarsAvg);
}
console.groupEnd();

console.group(
  "10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:"
);
{
  /*
   * brand,
   * model,
   * price, // kaina doleriais [Number]
   * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
   */
  const carsFormatted = cars.map((car) => ({
    brand: car.brand,
    model: car.model,
    price: EUR2USD * car.price,
    fuelType: car.getFuelType(),
  }));
  console.table(carsFormatted);
}
console.groupEnd();
