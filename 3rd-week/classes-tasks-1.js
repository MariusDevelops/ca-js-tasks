// 1. Sukurti klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina
//   - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
//     - this.brand
//     - this.model
//     - this.price

class Automobilis {
  constructor(marke, modelis, kaina) {
    this.marke = marke;
    this.modelis = modelis;
    this.kaina = kaina;
  }
}

// 2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
//   - const car1 = new Automobilis(..., ..., ...);
//   - const car2 = new Automobilis(..., ..., ...);
//   - const car3 = new Automobilis(..., ..., ...);

const car1 = new Automobilis("kazkokia marke", "kazkoks modelis", 1000);
const car2 = new Automobilis("kazkokia marke2", "kazkoks modelis2", 2000);
const car3 = new Automobilis("kazkokia marke3", "kazkoks modelis3", 3000);
const allCars = [car1, car2, car3];

// 5. Padidinkite Automobilis objektų kainas šimtu.
//   car1.price = car1.price + 100;
//   car2.price = ??? + 100;
//   ???

car1.kaina = car1.kaina + 100;
car2.kaina = car2.kaina + 200;
car3.kaina = car3.kaina + 300;

//   3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

console.log(car1, car2, car3);

// 4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
//   modelius:
//     - console.log(car1.model);
//     - console.log(car2.model);
//     - console.log(car3.model);
//   markes:
//     - console.log(car1.brand);
//     - console.log(car2.???);
//     - console.log(???);
//   kainas:
//     - console.log(???);
//     - console.log(???);
//     - console.log(???);

console.log(car1.modelis);
console.log(car2.modelis);
console.log(car3.modelis);

console.log(car1.marke);
console.log(car2.marke);
console.log(car3.marke);

console.log(car1.kaina);
console.log(car2.kaina);
console.log(car3.kaina);

// 6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

console.table(allCars);
