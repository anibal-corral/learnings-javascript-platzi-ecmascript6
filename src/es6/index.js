function newFunction(name, age, country){
    var name = name || 'Anastasia';
    var age = age || 3;
    var country = country || 'CHL';
    console.log(name,age,country);
}

function newFunction2(name='Anais', age=3, country='CHL'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Erminda',58,'CHL');

let hello ='Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world
console.log(epicPhrase);
let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "A epic phrase,\n" + "Another epic phrase";
let lorem2 = `A epic phrase,
Another epic phrase`;
console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos
let person ={
    'name':'Anastasia',
    'age': 3,
    'country': 'CHL'
}

console.log(person.name, person.age, person.country);
let {name,age,country}=person;
console.log(name,age,country);

let newName ='Anais';
let newAge = 3.5;
obj = {name:newName,age:newAge};
obj2={newName,newAge};
console.log(obj,obj2);

//Arrow Functions
const people = [
    {'name':'Anastasia', 'age':3},
    { 'name':'Erminda','age':58},
    { 'name':'Daniela','age':28}
];
//Iterarte
let listOfPeople = people.map(
    function (item){
        console.log(item.name);
    }
)
//Arrow Function
let listOfPeople2 = people.map(
     (item)=> console.log(item.name)
     );

//PROMISES
const helloPromise = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Ups!!')
        }
    });
}

helloPromise()
.then(response=>console.log(response))
.then(()=>console.log('Hello'))
.catch(error=>console.log(error));

//CLASSES
class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(3,4));

import {hello} from './module';
hello();    

function* helloWorld(){
if(true){
    yield 'Hello, ';
}
if(true){
    yield 'World';
}
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);