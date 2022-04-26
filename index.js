// Code your solution here
//source: https://attacomsian.com/blog/javascript-array-lowercase-uppercase
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, string){
    const lowercased = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase());
    return lowercased;
}
//    fuzzyMatch()
function fuzzyMatch(drivers, string) {
    const letermatch = drivers.filter(drivers => drivers[0] === string[0]);
    return letermatch;
}

//       matchName()

function matchName (people, string) {
    const sameNameFc = people.filter(driver => driver.name === string);
    
//    const objectNameFunction = array.filter(driver => driver.name === string);

    return sameNameFc;
}