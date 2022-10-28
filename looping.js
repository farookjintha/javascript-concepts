// for
// for..in
// for...of

//for
// for(initialization; condition; expression){
//     //statement or logics
// }

let array = [1, 2, 3, 4, 5]

for(let i = 3; i< array.length; i++){

}


//for...in -> takes index
for(let index in array){
    console.log(`Value at index ${index}:`, array[index])
}

//for...of -> takes values
for(let value of array){
    console.log(value)
}