// let scale = 0;
// console.log(`Scale: ${scale}`)
//
// let a = 1 / scale
// console.log(`a = 1 / scale // --> ${a}`)
//
// let b = 0 / scale
// console.log(`b = 0 / scale // --> ${b}`)
//
// let c = -a
// console.log(`c = -a // --> ${c}`)
//
// let d = 1 / c
// console.log(`d = 1 / c // --> ${d}`)
//
// console.log(1 / 0)
// console.log(-1 / 0)
// console.log(1 / -0)
// console.log(-1 / -0)
//
// console.log(typeof undefined)
// console.log(2**53)
// console.log(Number.MAX_SAFE_INTEGER)

// let rapper = {
//   name: "Malicious",
// };
// console.log(rapper.name); // dot notation
// console.log(rapper["name"]); // bracked notation
//
// rapper.name = "Malice";
// console.log(rapper.name);
// console.log(rapper["name"]);
//
// rapper["name"] = "No Malice";
// console.log(rapper.name);
// console.log(rapper["name"]);
//
//
// let shrek = {}
// let donkey = {}
//
// console.log(shrek === donkey)

// const converter = function(string) {
//   return Number(string);
// };

// const convertido = converter("10");
// console.log(`Tipo da const 'convertido': ${typeof convertido}`); // number
// console.log(`Tipo da função 'converter': ${typeof converter}`); // function


let countDwarves = function() { return  7; }
let dwarves = countDwarves;
console.log(dwarves)