// Immediately Invoked Function Expressions (IIFE)

//many times we have prblem with global scope pollution, so we can use IIFE to avoid that problem

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// the next IIFE will not execute if we not put semicolon at the end of previous IIFE, so it is good practice to put semicolon at the end of IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

