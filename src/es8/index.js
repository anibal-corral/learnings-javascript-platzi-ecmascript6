const data ={
    frontend:'Anastasia',
    backend:'Daniela',
    design:'Erminda'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2={
    frontend:'Anastasia',
    backend:'Daniela',
    design:'Erminda'
}
const values = Object.values(data2);
console.log(values);

const string ='Hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'---'));
console.log('food'.padEnd(12,'-+'));

const helloWorldPromise=()=>{
    return new Promise((resolve,reject)=>{
        (false)
        ? setTimeout(()=>resolve('Hello World'),3000)
        : reject(new Error('Test error'))
    })
}

const helloAsync = async ()=>{
    const hello = await helloWorldPromise();
    
    console.log(hello);
}
helloAsync();

//IN RIGHT WAY
const anotherFunction = async()=>{
    try{
const hello = await helloWorldPromise();
console.log(hello);
    }catch(error){
        console.log(error);

    }
}
anotherFunction();