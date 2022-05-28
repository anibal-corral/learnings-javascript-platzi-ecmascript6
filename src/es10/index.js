//FLAT
let array = [1,2,3 [1,2,3, [1,2,3]]];
console.log(array.flat(2));

//FLAT MAP
let arrayFlatMap = [1,2,3,4,5];
console.log(arrayFlatMap.flatMap(value=>[value,value*2]));

//TRIM END Y TRIM END
let hello ='     hello World  ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//OPTIAL CATCH BUILD
try{}catch(error){}
try{}catch{error}

//FROM ENTRIES
let entries = [['name', 'Anastasia'],['age',3]];
console.log(Object.fromEntries(entries));

//SYMBOL
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
