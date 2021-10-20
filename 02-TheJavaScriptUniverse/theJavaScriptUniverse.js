console.log("Primitive values:\n");
console.log(2);
console.log("Hello, World!");
console.log(undefined);

console.log("Objects and functions:\n");
console.log({});
console.log([]);
console.log((x) => x * 2);

console.log("Usando parênteses no typeof para evitar ambiguidade");
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof ((x) => x * 2)); // function
