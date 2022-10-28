

// anonymous -> just a function which doesnt have any name. arrow func or normal func

// arrow func => syntax of writing a func

// named function 
// function myFunc(){
//     console.log('Hello')
// }

// const myFunc2 = () => {
//     console.log('Hello from Arrow Func')
// }

// //Anonymous function
// (function(age){
//     if(age >= 18){
//         console.log('Eligible to vote');
//     }else{
//         console.log('Not eligible to vote');
//     }
// })(15);

// ((age) => {
//     if(age >= 18){
//         console.log('Eligible to vote');
//     }else{
//         console.log('Not eligible to vote');
//     }
// })(18);





let numbers = [1, 2 ,3 ,4 , 5, 6, 7, 8, 9, 10];


//to iterate each element in the array

const result = numbers.map((x) => {
    console.log(x, ": From Map");
    return x*2
});

const result2 = numbers.forEach(value => {
    console.log(value, ": From ForEach");
    return value*2
});

console.log('Result from Map: ', result);
console.log('Result from ForEach: ', result2)