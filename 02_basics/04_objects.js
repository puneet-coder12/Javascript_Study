// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 7 : {4 : "d"}}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 } // problem it create nested object
// const obj3 = Object.assign({}, obj1, obj2, obj4);   //target, source1, source2, sourceN

// const obj3 = {...obj1, ...obj2}
// obj1[7][4] = "c" // it will also change the value of obj3 because they are pointing to same reference in memory.
console.log(obj3);

// const obj3 = structuredClone(obj1) // it will create a deep copy of obj1 and store it in clone. so if we change the value of obj1 then it will not change the value of clone because they are pointing to different reference in memory.;

// it does shallow copy, it means if we change the value of obj1 then it will also change the value of obj3 because they are pointing to same reference in memory.
// only refernce of nested object is copied, not the value of nested object. so if we change the value of nested object then it will also change the value of obj3 because they are pointing to same reference in memory.
// if we change the value of obj1 then it will not change the value of obj3 because they are pointing to different reference in memory.


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //destructing and renaming the variable
// const {courseInstructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



