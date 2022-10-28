let array1 = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

//filter -> iterates each element and return those elements that satisfy condition;

//Filter out the even numbers;
let result = array1.filter((value) => {
    if(value % 2 !== 0){
        console.log('Even Number: ', value);
        return value;
    }
});

console.log('Result: ', result);