//REPLACE ALL
const string = "Javascript is wonderfull, with Javascript I can create the future";
const replacedString = string.replace("Javascript", "Python");
const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString);
console.log(replacedString2);

//PRIVATES METHOD
class Message {
    publicShow(val){//PUBLIC METHOD
        console.log(val);
    }
    #privateShow(val){//PRIVATE METHOD
        console.log(val);
    }
    get #add(){return 'Hi'}
    set #add(val){}
}
const message=new Message();
message.publicShow('Hola');
message.privateShow('Hola');

//PROMISE ANY (return the first resolved)
const promise1 = new Promise((resolve, reject)=>reject('1'));
const promise2 = new Promise((resolve, reject)=>resolve('2'));
const promise3 = new Promise((resolve, reject)=>reject('3'));

Promise.any([promise1,promise2,promise3]).then(response=>console.log(response));

//WEAK REF para que no sea usada por el garbage colector
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

//OPERATORS
let isTrue =true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
let isTrue=undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
