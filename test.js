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

// let countDwarves = function() { return  7; }
// let dwarves = countDwarves;
// console.log(dwarves)

// let dwarves = 7
// let continents = "7"
// let worldWonders = 3 + 4

// console.log(Object.is(dwarves, continents)) // false
// console.log(Object.is(continents, worldWonders)) // false
// console.log(Object.is(worldWonders, dwarves)) // true

// console.log("*---*---*")

// console.log(dwarves === continents)
// console.log(continents === worldWonders)
// console.log(worldWonders === dwarves)

// let banana = {};
// let cherry = banana;
// let chocolate = cherry;
// cherry = {};

// console.log(Object.is(banana, cherry)) // false
// console.log(Object.is(cherry, chocolate)) // false
// console.log(Object.is(chocolate, banana)) // true

// console.log(NaN === NaN); // false
// console.log(-0 === 0) // true

// console.log(NaN === NaN) // false
// console.log(Object.is(NaN, NaN)) // true

// console.log([] == '') // true
// console.log(true == [1]) // true
// console.log(false == [0]) // true

// console.log("Dan's answer:");
// let tree = {};
// let stone = {};
// let water = tree;
// console.log(Object.is(tree, water));
// console.log(Object.is(tree, stone));
// console.log(Object.is(stone, water));

// console.log("Minha resposta:");
// tree = {};
// stone = tree;
// water = {};
// tree = water;

// console.log(Object.is(tree, water));
// console.log(Object.is(tree, stone));
// console.log(Object.is(stone, water));

// let ticket = { id: 0 };
// if (ticket === { id: 0 }) {
//   console.log("Bad ticked");
// } else {
//   console.log("Else entrou");
// }

// if (Object.is(ticket, { id: 0 })) {
//   console.log("O object passou");
// } else {
//   console.log("Else entrou");
// }

// let ticketId = 0;
// ticketId = -0;

// if (ticketId === 0) {
//   console.log("Bad ticket");
// } else {
//   console.log(`Good ticket: ${ticketId}`);
// }

// console.log(NaN === NaN)

// let sherlock = {
//   surname: "Holmes",
//   address: { city: "London" },
// };

// let john = {
//   surname: "Watson",
//   address: sherlock.address,
// };

// john.surname = "Lennon";
// john.address.city = "Malibu";

// console.log(sherlock);
// console.log(john);

// let onion = {
//   taste: "classical",
// };

// let music = onion

// console.log(music.taste);
// onion.taste = "umami";
// console.log(music.taste);

// let rapper = {
//   beef: "legit",
// };

// let burger = {
//   beef: "veggie",
// };

// console.log(burger.beef); // 'veggie'
// burger = rapper;
// console.log(burger.beef); // 'legit'

// console.log(charlotte.mother.age); // 20
// console.log(charlotte.child.age); // 20

// charlotte.mother.age = 21;

// console.log(charlotte.mother.age); // 21
// console.log(charlotte.child.age); // 21

// music = {
//   taste: "Classical",
// };

// onion = music;

// console.log(music.taste); // "classical"
// onion.taste = "unami";
// console.log(music.taste); // "umami"

// let burger = {
//   beef: "veggie",
// };

// let rapper = {
//   beef: "legit",
// };

// console.log(burger.beef); // "veggie"
// burger = rapper;
// console.log(burger.beef); // "legit"

// let charlotte = {
//   mother: {
//     age: 20,
//   },
// };

// charlotte.child = charlotte.mother

// console.log(charlotte.mother.age); // 20
// console.log(charlotte.child.age); // 20

// charlotte.mother.age = 21;

// console.log(charlotte.mother.age); // 21
// console.log(charlotte.child.age); // 21

console.clear();

// let proto = {};
// proto.__proto__.taste = "pineapple";

// let pizza = {};
// console.log(pizza.taste);

// let human = {
//   teeth: 32,
// };

// let gwen = {
//   __proto__: human,

//   age: 19,
// };

// console.log(gwen.teeth);

function Donut() {
  return { shape: "round" };
}
Donut.prototype = {
  eat: () => {
    console.log("Nom nom nom");
  },
};

let donut1 = new Donut(); // __proto__: Donut.prototype
let donut2 = new Donut(); // __proto__: Donut.prototype

// donut1.eat();
// donut2.eat();

let goose = {
  location: "heaven",
};

let cheese = {
  __proto__: goose,
};

console.log(cheese === goose); // false
console.log(cheese.location);

goose.location = "hell";
console.log(cheese.location); // "hell"
