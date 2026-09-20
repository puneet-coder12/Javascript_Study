const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString); // if ending value is not provided then it will take till end of string
// if ending value is smaller than starting value then it will swap the values and return the string
// -ve we will consider it as 0 and return the string from starting index to end of string

// const anotherString = gameName.slice(-6)
// console.log(anotherString);
// if ending value is smaller than starting value then it will return empty string
// -ve value will be count index from the last

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));