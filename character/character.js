alert(`Hello, I'm Samuel, This charcter will travel to an underwater kingdom.`);

const setting = (`Underwater Kingdom`);
let result;

//Character Name
let defaultName = "Traveler";
result = prompt(`What is your name?: `, `${defaultName}`);
const charName = result;

//Companion
let defaultCompanion = "Wolf";
result = prompt(`What kind of companion will accompany you?: `, `${defaultCompanion}`);
const compainionType = result;

//Power/Ablitites
let defaultPower = "Telekinesis";
result = prompt(`What Super power do you have?: `, `${defaultPower}`);
const charPower = result;

//Experience number
const trainingYears = prompt(`How many years have you trained?: `);
const charaExperience = Number(trainingYears);
console.log(charaExperience, typeof charaExperience);

//Power Level
let powerLevel = charaExperience * 10;

//Confirm
let likesFighting = confirm(`${charName} likes fighting monsters? Click OK for YES  Click Cancel for NO`);
console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}... almost ready!`);

alert(`
-----------------------------------------------------------------
Name: ${charName} 
Companion: ${compainionType} 
Super Power: ${charPower}
Power Level: ${powerLevel} 
Monster fighter?: ${likesFighting ? "Yes" : "No"}

${charName} and their trusty ${compainionType} will voyage across the land to find the ${setting}.
Thanks to ${charName}'s ${charPower} and power level of ${powerLevel},
nothing will be able to stand in their way!`);

