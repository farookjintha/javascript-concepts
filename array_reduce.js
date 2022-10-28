let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //-> reduce to a single value

//reduce => iterates each elements and return a single value out of it.

//sum of all number;

let filteredValues = array1.filter((value, index) => {
    if(index < array1.length - 2){
        return value;
    }
});

let sumOfValue = filteredValues.reduce((result, value) => {
    // console.log('Result: ', result, value)
    return value * result;
}, 0);


// let result = array1.reduce((sum, value) => {
//     return value + sum;
// }, 100);

// console.log("Sum Of Eight Value: ",sumOfValue);

let value = 'orange';
const arrayOfValues = value.split('');
const removeO = arrayOfValues.filter((x, index) => {
    if(index > 0){
        return x;
    }
})

const resultValue = removeO.join('')
console.log('Result Value afte Removing O: ', resultValue);
// //Single Parameter
// array.map((element) => {

// })
// array.forEach((element) => {

// })
// array.filter((element) =>{

// })

// //Two Parameter
// array.map((element, index) => {

// })
// array.forEach((element, index) => {

// })
// array.filter((element, index) =>{

// })


// //Reduce - Two parameter -> First: Accumulator | Second: Element 
// array.reduce((accumulator, element) => {

// })

// array.reduce((accumulator, element) => {
    
// }, initialValue)