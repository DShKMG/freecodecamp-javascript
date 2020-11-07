let reCriminals = /C+/;
let Criminals = "P6P2P7P4P5CCCCCP3P1";
let foundCriminals = Criminals.match(reCriminals);
console.log(foundCriminals);
for (const i of foundCriminals) {
    console.log(i);
}

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let lastCaboose = lastRegex.test(caboose);
console.log(lastCaboose);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
console.log(quoteSample.length);