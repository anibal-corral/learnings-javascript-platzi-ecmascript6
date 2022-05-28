//JUNIO 2028
//OPERADOR DE REPOSO.
//EXTRER PROPIEDADE S DE UN OBJETO QUE AUN NOSE HA CONSTRUIDO.

const obj ={
    name:'Anastasia',
    age:3,
    country:'Chile'
};

let {name, ...all}=obj;

console.log(all);

//UTILIZANDO PROPIEDADES DE PROPAGACION

const obj1 ={
    name:'Anastasia',
    age:3
}
const obj2 ={
    ...obj1,
    country:'CHL'
}

console.log(obj1,obj2);
console.log(obj1);
console.log({...obj1});

//PROMISE FINALLY
const helloWorld=()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello World'),3000)
        :reject (new Error('Test Error'))
    });
};

helloWorld()
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>console.log('Finished'))

//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2017-03-21');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(day,month,year);

