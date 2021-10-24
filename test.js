let scale = 0;
console.log(`Scale: ${scale}`)

let a = 1 / scale
console.log(`a = 1 / scale // --> ${a}`)

let b = 0 / scale 
console.log(`b = 0 / scale // --> ${b}`)

let c = -a
console.log(`c = -a // --> ${c}`)

let d = 1 / c
console.log(`d = 1 / c // --> ${d}`)

console.log(1 / 0)
console.log(-1 / 0)
console.log(1 / -0)
console.log(-1 / -0)

console.log(typeof undefined)
console.log(2**53)
console.log(Number.MAX_SAFE_INTEGER)
