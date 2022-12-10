const students = [
  {
    name: "Panatėja",
    surname: "Sulindytė",
    faculty: "Informatikos fakultetas",
    course: 2,
    modules: [
      {
        title: "Operacinės sistemos",
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: "Algoritmų analizė",
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: "Tikimybės ir Statistika",
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: "Inžinerinis projektas",
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: "Kompiuterių architektūra",
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: "Laptokas",
    surname: "Klavianskas",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: "Skaistė",
    surname: "Kolbaitė",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: "Cilindras",
    surname: "Katalizatorius",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: "Grandinius",
    surname: "Varžauskas",
    faculty: "Elektros ir elektronikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: "Elektos grandinės",
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: "Elektros tinklai",
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: "Braižyba",
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];

console.groupEnd();

console.groupCollapsed(
  "1. Atspausdinti visus Informatikos fakulteto studentus"
);
{
  students.forEach(
    (student) => {
      if (student.faculty === "Informatikos fakultetas") {
        return console.log(student);
      }
    }
    // student.faculty === "Informatikos fakultetas"
    //   ? console.log(student)
    //     : console.log("studentai ne iš informatikos fakulteto")
  );
}
console.groupEnd();

console.groupCollapsed("2. Atspausdinti visus Chemijos fakulteto studentus");
{
  students.forEach((student) => {
    if (student.faculty === "Chemijos fakultetas") {
      return console.log(student);
    }
  });
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus"
);
{
  students.forEach((student) => {
    if (student.faculty === "Elektros ir elektronikos fakultetas") {
      return console.log(student);
    }
  });
}
console.groupEnd();

console.groupCollapsed("4. Atspausdinti tik pirmo kurso studentus");
{
  students.forEach((student) => {
    if (student.course === 1) {
      return console.log(student);
    }
  });
}
console.groupEnd();

console.groupCollapsed("5. Atspausdinti tik antro kurso studentus");
{
  students.forEach((student) => {
    if (student.course === 2) {
      return console.log(student);
    }
  });
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinti tik trečio kurso studentus");
{
  students.forEach((student) =>
    student.faculty === 3
      ? console.log(student)
      : console.log("ne trečio kurso studentai")
  );
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinti tik ketvirto kurso studentus");
{
  students.forEach((student) =>
    student.faculty === 4
      ? console.log(student)
      : console.log("ne ketvirto kurso studentai")
  );
}
console.groupEnd();

console.groupCollapsed(
  "8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius"
);
{
  {
    // iterate all students
    students.map((student) => {
      // console.log(student);
      // go throuugh each student modules and print totalWeightedMark

      let sumCredits = 0;
      let totalWeightedMarks = 0;
      student.modules.forEach((module) => {
        // print modules
        // console.log(module);

        // print sum of credits
        sumCredits += module.credits;

        // print avg marks
        const avgMarks =
          module.marks.reduce((sum, el) => sum + el, 0) / module.marks.length;
        // console.log("marks avg: " + avgMarks);

        // print total weighted Marks
        totalWeightedMarks += module.credits * avgMarks;
      });

      // console.log("credits sum: " + sumCredits);

      // print student semester avg grade
      const studSemesterAvg = (totalWeightedMarks / sumCredits).toFixed(2);
      console.log("student semester avg: " + studSemesterAvg);
    });
  }

  console.log("------------- OR ---------------");

  // iterate all students
  students.map((student) => {
    // console.log(student);
    // go throuugh each student modules and print weighted avg marks

    let sumCredits = 0;
    let weightedAvgMarks = 0;
    student.modules.forEach((module) => {
      // print modules
      // console.log(module);

      // print sum of credits
      const credits = module.credits;
      sumCredits += credits;

      // print weighted avg marks
      weightedAvgMarks +=
        (module.marks.reduce((sum, el) => sum + el, 0) * credits) /
        module.marks.length;
    });

    // console.log("credits sum: " + sumCredits);
    // console.log("weighted marks avg: " + weightedAvgMarks);

    // print student semester avg grade
    let studSemesterAvg = Math.round(weightedAvgMarks / sumCredits);
    console.log(`Final grade: ${student.name} - ${studSemesterAvg}`);
  });

  console.log("------------- OR ---------------");

  {
    for (let j = 0; j < students.length; j += 1) {
      const student = students[j];
      let weightedModuleAvgSum = 0;
      let creditSum = 0;

      for (let i = 0; i < student.modules.length; i += 1) {
        const module = student.modules[i];
        let moduleSum = 0;

        for (let o = 0; o < module.marks.length; o++) {
          const mark = module.marks[o];
          moduleSum += mark;
        }

        const moduleAvg = moduleSum / module.marks.length;
        const moduleCredits = module.credits;
        weightedModuleAvgSum += moduleAvg * moduleCredits;
        creditSum += moduleCredits;
      }

      const studentAvg = weightedModuleAvgSum / creditSum;
      console.log(Number(studentAvg.toFixed(2)));
    }

    ///////////////// Morning Code ///////////////////////
    // const student1 = students[0];
    // let weightedModuleAvgSum = 0;
    // let creditSum = 0;
    // for (let i = 0; i < student1.modules.length; i += 1) {
    //   const module = student1.modules[i];
    //   let moduleSum = 0;
    //   for (let o = 0; o < module.marks.length; o++) {
    //     const mark = module.marks[o];
    //     moduleSum += mark;
    //   }
    //   const moduleAvg = moduleSum / module.marks.length;
    //   const moduleCredits = module.credits;
    //   weightedModuleAvgSum += moduleAvg * moduleCredits;
    //   creditSum += moduleCredits;
    // }
    // const studentAvg = weightedModuleAvgSum / creditSum;
    // console.log(studentAvg);
  }
}
console.groupEnd();

console.groupCollapsed(
  "9. Atspausdinti visų Informatikos fakulteto studentų vidurkius"
);
{
  students.filter((student) => {
    if (student.faculty === "Informatikos fakultetas") {
      let sumCredits = 0;
      let weightedAvgMarks = 0;
      student.modules.forEach((module) => {
        const credits = module.credits;
        sumCredits += credits;

        weightedAvgMarks +=
          (module.marks.reduce((sum, el) => sum + el, 0) * credits) /
          module.marks.length;
      });

      let studSemesterAvg = weightedAvgMarks / sumCredits;
      console.log(
        `Average semester grade: ${student.name} ${
          student.surname
        } - ${studSemesterAvg.toFixed(2)}`
      );
    }
  });
}
console.groupEnd();

console.groupCollapsed(
  "10. Atspausdinti visų Chemijos fakulteto studentų vidurkius"
);
{
  students.filter((student) => {
    if (student.faculty === "Chemijos fakultetas") {
      let sumCredits = 0;
      let weightedAvgMarks = 0;
      student.modules.forEach((module) => {
        const credits = module.credits;
        sumCredits += credits;

        weightedAvgMarks +=
          (module.marks.reduce((sum, el) => sum + el, 0) * credits) /
          module.marks.length;
      });

      let studSemesterAvg = weightedAvgMarks / sumCredits;
      console.log(
        `Average semester grade: ${student.name} ${
          student.surname
        } - ${studSemesterAvg.toFixed(2)}`
      );
    }
  });
}
console.groupEnd();

console.groupCollapsed(
  "11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius"
);
{
  students.filter((student) => {
    if (student.faculty === "Elektros ir elektronikos fakultetas") {
      let sumCredits = 0;
      let weightedAvgMarks = 0;
      student.modules.forEach((module) => {
        const credits = module.credits;
        sumCredits += credits;

        weightedAvgMarks +=
          (module.marks.reduce((sum, el) => sum + el, 0) * credits) /
          module.marks.length;
      });

      let studSemesterAvg = weightedAvgMarks / sumCredits;
      console.log(
        `Average semester grade: ${student.name} ${
          student.surname
        } - ${studSemesterAvg.toFixed(2)}`
      );
    }
  });
}
console.groupEnd();
