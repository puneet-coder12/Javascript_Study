// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8,9) // add elements to the beginning of array
// myArr.shift() //remove first element 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //return a string of array elements separated by commas

// console.log(myArr);
// console.log( typeof newArr);


// slice, splice

console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3) // (start, deleteCount)
// we use to add elements in splice method

const myn3 = myArr.splice(2, 1, 10, 11) // (start, deleteCount, item1, item2, itemN)
console.log("C ", myArr);
// console.log(myn2);
console.log(myn3);
