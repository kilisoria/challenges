const nullValue = null;
console.log(typeof nullValue);

console.log(typeof 234567890123456789012345678901234567890n);

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

try {
 hoistedVariable2 = 3;
console.log(hoistedVariable2); // outputs 3 even when the variable is declared after it is initialized	
let hoistedVariable2;   
} catch (error) {
    console.log('hoistedVariable2 does not support hosting!')
}

let y = 1234
const x = y
y = 4444
console.log('primitive values');
console.log('y:', y);
console.log('x: ', x);

const obj1 = {
    name: 'objecter'
};
const obj2 = obj1;
console.log('obj1', obj1);
console.log('obj2', obj2);
obj1.title = "developer";
console.log('obj1', obj1);
console.log('obj2', obj2);

(function () {
    console.log('IIFE');
})();

const pattern = {
    name: "joahn",
    title: "dev",
    phone: 34445000,
    address1: "Aveniue 1",
    address2: "Aveniue 2"
}

const { name, title, phone, ...address } = pattern;
console.log('pattern', address);

