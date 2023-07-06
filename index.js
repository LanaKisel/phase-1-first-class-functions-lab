// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    names = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const newNames = [...names] 
    return newNames.slice(0,2)
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function (names) {
 names = ['Antonia', 'Nuru', 'Amari', 'Mo']
 const lastDrivers = [...names]
 return lastDrivers.slice(-2)
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (fare){
      return function multiplier(b){
        return fare*b
    }
}
//createFareMultiplier(2)(2);

const fareDoubler = (multiplier) => {
       return createFareMultiplier(2)(multiplier)
}
fareDoubler (9);
const fareTripler = (multiplier) => {
    return createFareMultiplier(3)(multiplier)
}
fareTripler(8)

function selectDifferentDrivers(names, func) {
    if (func === selectingDrivers[0]) {
        return returnFirstTwoDrivers()
    } else if (func === selectingDrivers[1]) {
        return returnLastTwoDrivers()
    }
}
selectDifferentDrivers();