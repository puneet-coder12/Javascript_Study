const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // returns an object with the properties of the PI property of the Math object

// console.log(descripter); // shows the properties of the PI property of the Math object (not writable ex we can update value of PI by our own)

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        // console.log(`${key} : ${value}`);
    }
}