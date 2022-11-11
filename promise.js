//Promise used to handle asynchronous execution -> It waits until a time consuming function to returning a value.

// After promise returns a value -> either success or failure

// to handle that - we use Callbacks or async/await

function funcReturnsPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hello");
        }, 5000);
        // resolve('Hello');
    
        // reject('Error');
      });
}

//Callback Function
// funcReturnsPromise().then((res) => {
//     console.log('On Success: ', res)
// }).catch((err) => {
//     console.log('On Failure: ', err)
// })

// async/await

async function myFunc(){
    try{
        const response = await funcReturnsPromise();
        console.log('On success: ', response);
    }catch(error){
        console.log('On Error: ', error);
    }
}

myFunc();