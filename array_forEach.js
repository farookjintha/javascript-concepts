let array1 = [1, 2, 3 ,4, 5];

const result = array1.forEach((value) => {
    console.log(value)
    return value;
})

console.log('Result: ', result);