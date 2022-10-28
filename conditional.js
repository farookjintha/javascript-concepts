// if
// if..else
//switch


const value1 = 7; 

// if(value1 % 2 === 0){
//     console.log('The number is divisible by 2')
// }else if(value1 % 3 === 0){
//     console.log('The number is divisible by 3');
// }else{
//     console.log('The number is not divisible by 2 and 3 as well.')
// }


switch(value1 % 2){
    case 0: {
        console.log('The number is divisible by 2')
        break;
    }
    case 1: {
        console.log('The number is not divisible by 2')
        break;
    }
    default: 
        console.log('Invalid Number')
}