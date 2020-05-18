

// let {a,b, c:[c1,c2,c3]}={a:10, b:20, c:[9,8,7,5]}

// console.log(...[1,2,3])



// function demo(part1, ...part2) {
//     return {part1, part2}
// }

// console.log(demo(1,2,3,4,5,6))



var set = new Set();
set.add("Potato").add("Tomato").add("Tomato").add({"name":'deepak'}).add({"name":'deepak'}).add([1,2,3,5]).add([1,2,3,5]);
console.log(set.size)

for(var item of set) {
   console.log(item)
}