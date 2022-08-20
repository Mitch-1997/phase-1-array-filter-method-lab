// Code your solution here
function findMatching(drivers, names){
    let found = drivers.filter((drivers) =>drivers.toLowerCase() === names.toLowerCase());
    return found;
}    
function fuzzyMatch(drivers, query){
    let fuzzy = drivers.filter((drivers) => drivers.startsWith(query));
    return fuzzy;
}
function matchName(drivers, string){
let match = drivers.filter((drivers) => drivers.name=== string);
return match;
}