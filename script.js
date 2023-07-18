const firstSuper = [
  "super",
  "mega",
  "turbo",
  "iron",
  "hyper",
  "demon",
  "space",
  "magma",
  "fire",
  "ultimate",
  "tech",
  "omega",
  "neo",
  "diamond",
  "future",
  "hi-speed",
  "star",
  "ultra",
  "energy",
  "great",
  "magical",
  "secret",
  "giant",
  "deluxe",
  "combining",
  "shin",
];

const secondSuper = [
  "thunder",
  "monster",
  "dark",
  "tiger",
  "snake",
  "dinosaur",
  "eagle",
  "fist",
  "mecha",
  "striker",
  "hunter",
  "devil",
  "mask",
  "hero",
  "dragon",
  "shark",
  "fighting",
  "robo",
  "driver",
  "power",
  "new wave",
  "animal",
  "wizard",
  "x",
  "god",
  "humanoid",
];

const thirdSuper = [
  "riot",
  "computer",
  "terror",
  "safety",
  "lightning",
  "violent",
  "ancient",
  "solar",
  "galaxy",
  "alien",
  "auto",
  "wonder",
  "flying",
  "big",
  "hurricane",
  "mystery",
  "giga",
  "action",
  "kung fu",
  "karate",
  "cosmic",
  "ufo",
  "battling",
  "moon",
  "zodiac",
  "insect",
];

const fourSuper = [
  "man",
  "team",
  "squad",
  "scout",
  "police",
  "ranger",
  "detective",
  "soldier",
  "ninja",
  "defender",
  "warrior",
  "force",
  "troupe",
  "angel",
  "agent",
  "captain",
  "robot",
  "cyborg",
  "lifeform",
  "brothers",
  "sisters",
  "woman",
  "spy",
  "majin",
  "samurai",
  "spirit",
];

const findPosition = (ch) => {
  switch (ch) {
    case "a":
      return 0;
      break;
    case "b":
      return 1;
      break;
    case "c":
      return 2;
      break;
    case "d":
      return 3;
      break;
    case "e":
      return 4;
      break;
    case "f":
      return 5;
      break;
    case "g":
      return 6;
      break;
    case "h":
      return 7;
      break;
    case "i":
      return 8;
      break;
    case "j":
      return 9;
      break;
    case "k":
      return 10;
      break;
    case "l":
      return 11;
      break;
    case "m":
      return 12;
      break;
    case "n":
      return 13;
      break;
    case "o":
      return 14;
      break;
    case "p":
      return 15;
      break;
    case "q":
      return 16;
      break;
    case "r":
      return 17;
      break;
    case "s":
      return 18;
      break;
    case "t":
      return 19;
      break;
    case "u":
      return 20;
      break;
    case "v":
      return 21;
      break;
    case "w":
      return 22;
      break;
    case "x":
      return 23;
      break;
    case "y":
      return 24;
      break;
    case "z":
      return 25;
      break;
  }
};

const FindSuperHero = () => {
  let firstname = document.querySelector("#firstname").value.toLowerCase();
  let lastname = document.querySelector("#lastname").value.toLowerCase();
  let label = document.querySelector("#label");
  let link = document.querySelector("#linkToImage");

  const firstFirst = firstname?.charAt(0);
  const firstLast = firstname?.charAt(firstname.length - 1);
  const secondFirst = lastname?.charAt(0);
  const secondLast = lastname?.charAt(lastname.length - 1);
//   console.log(
//     firstSuper[findPosition(firstFirst)],
//     secondSuper[findPosition(firstLast)],
//     thirdSuper[findPosition(secondFirst)],
//     fourSuper[findPosition(secondLast)]
//   );

  label.innerHTML = `${
    firstFirst
      ? firstSuper[findPosition(firstFirst)]?.toString().toUpperCase()
      : ""
  } 
    ${
      firstLast
        ? secondSuper[findPosition(firstLast)]?.toString().toUpperCase()
        : ""
    } 
    ${
      secondFirst
        ? thirdSuper[findPosition(secondFirst)]?.toString().toUpperCase()
        : ""
    } 
    ${
      secondLast
        ? fourSuper[findPosition(secondLast)]?.toString().toUpperCase()
        : ""
    }`;
  link.href = `https://www.google.com/search?q=${firstFirst?firstSuper[findPosition(firstFirst)]?.toString().toUpperCase()+"+":""}${firstLast?secondSuper[findPosition(firstLast)]?.toString().toUpperCase()+"+":""}${secondFirst?thirdSuper[findPosition(secondFirst)]?.toString().toUpperCase()+"+":""}${secondLast?fourSuper[findPosition(secondLast)]?.toString().toUpperCase():""}&tbm=isch`;
};
