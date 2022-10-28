class MyClass{
    myName = 'Farook';  

    constructor(value){
        this.myName = value;
    }

    myFun(){
        console.log('Name: ', this.myName)
    }
}


let myObj = new MyClass('Arun');
//immediate obj reference
myObj.myFun();

// this operator is used to map the object reference(immediate)