//DYNAMIC IMPORT PERMITE IMPORTAR CODIGO DEPENDIENDE DE CUANDO SE NECESITE COMO ANGULAR
const button = document.getElementById("btn");
button.addEventListener('click',async function(){
    const module = await import('./file.js');
    module.hello();
})

//BIGN
const aBigNumber =9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//PROMISE ALLsettled
const promise1 = new Promise((resolve, reject)=>reject('Reject'));
const promise2 = new Promise((resolve, reject)=>resolve('Resolve'));
const promise3 = new Promise((resolve, reject)=>resolve('Resolve 1'));
//WAIT FOR ALL PROMISE
Promise.allSettled([promise1,promise2,promise3]).then(response=>console.log(response));
//IF ONE OF THIS IS REJECTED THIS WILL STOP
Promise.all([promise1,promise2,promise3]).then(response=>console.log(response)).catch(error =>console.log('Error ',error));

//OPERADOR NULL
const foo =null??'default string';
console.log(foo);

//OPTIONAL CHAI
const user = {};

console.log(user?.profile?.email);
if(user?.profile?.email){
    console.log("email");
}else{git 
    console.log("fail");
}