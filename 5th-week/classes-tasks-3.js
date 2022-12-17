console.group("https://edabit.com/challenge/2FF7RKw9RLwc3EBY9");
{
  // Build class Challenge: constructor + getter
  class Challenge {
    id;
    level;

    constructor(id, level) {
      this.id = id;
      this.level = level;
    }

    // VE = "Very Easy";
    // EA = "Easy";
    // ME = "Medium";
    // HA = "Hard";
    // VH = "Very Hard";
    // EX = "Expert";

    // VE = 5 XP
    // EA = 10 XP
    // ME= 20 XP
    // HA= 40 XP
    // VH = 80 XP
    // EX = 120 XP

    get points() {
      const levelsObj = {
        VE: 5,
        EA: 10,
        ME: 20,
        HA: 40,
        VH: 80,
        EX: 120,
      };
      return levelsObj[this.level] || 0;
    }
  }

  // Build class User: constructor + setter
  class User {
    name;
    xp;
    log;

    constructor(name, xp, log) {
      this.name = name;
      // The name will be, trivially, the username.
      this.xp = xp;
      // The xp is the accumulator that stores the XP points earned.
      this.log = log;
      // The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.
    }

    set newSolvedChallenge(challenge) {
      this.xp += challenge.points;
      this.log.push(challenge.id);
    }

    get newSolvedChallenge() {
      this.xp;
      this.log;
    }

    // newSolvedChallenge = (challenge) => {
    //   this.xp += challenge.points;
    //   this.log.push(challenge.id);
    // };
  }

  // 1. Declare the class instances (two users and six challenges)
  // user1 ➞ name = "Madam" | xp = 0 | log = []
  // user2 ➞ name = "Steve" | xp = 0 | log = []
  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);

  // 2. Set the challenges solved by the users
  // challenge1 ➞ id = 1 | level = "VE";
  // challenge2 ➞ id = 2 | level = "EA";
  // challenge3 ➞ id = 3 | level = "ME";
  // challenge4 ➞ id = 4 | level = "HA";
  // challenge5 ➞ id = 5 | level = "VH";
  // challenge6 ➞ id = 6 | level = "EX";

  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");

  // Madam solves the following challenges, in the order: challenge1 , challenge4 , challenge6
  // Steve solves the,following challenges, in the order: challenge5 , challenge3, challenge2
  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;
  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;
  // user1.newSolvedChallenge(challenge1);
  // user1.newSolvedChallenge(challenge4);
  // user1.newSolvedChallenge(challenge6);
  // user2.newSolvedChallenge(challenge5);
  // user2.newSolvedChallenge(challenge3);
  // user2.newSolvedChallenge(challenge2);

  // Test user1
  console.log(user1.name, "Madam");
  console.log(user1.xp, 165);
  console.log(user1.log, [1, 4, 6]);
  // Test user2
  console.log(user2.name, "Steve");
  console.log(user2.xp, 110);
  console.log(user2.log, [5, 3, 2]);
  // Test challenges
  console.log(challenge1.id, 1);
  console.log(challenge2.level, "EA");
  console.log(challenge3.points, 20);
  console.log(challenge4.id, 4);
  console.log(challenge5.level, "VH");
  console.log(challenge6.points, 120);
  // Trivial tests
  console.log(user1.xp > user2.xp, true);
  console.log(challenge6.points < challenge1.points, false);
}
console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/ifDM26p25bqS8EsFu");
{
  // ... code
}
console.groupEnd();
