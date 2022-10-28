let array1 = [1, 2, 3, 4, 5, 6, 7,8 ,9, 10];

const result = array1.map((value) => {
    const mulitplyBy5 = value * 5
    return mulitplyBy5
})

const resultByCondition = array1.map(value => {
    if(value % 2 === 0){
        return value;
    }
})

// console.log('Result: ', result)
console.log('Result: ', resultByCondition);