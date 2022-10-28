function myFunc(){

}


const myFunc2 = () => {} //arrow function

const myArray = [2, 4, 6, 8, 10, 11, 13, 15, 17, "value"];

 
//map -> iterates each elements and returns an array
const output1 = myArray.map((value) => {
    return value+2
})

console.log("Map Output: ", output1);

//forEach -> iterates each elements and doesnt return an array or anything
const output2 = myArray.forEach((value) => {
    return value;
});
console.log('For Each Output: ', output2);

//filter
const output3 = myArray.filter(() => {})

//reduce
const output4 = myArray.reduce(() => {})


//sort

//include

//findIndex
