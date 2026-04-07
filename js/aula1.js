//diferança entre let e var
//var tem escopo global e de função, já o let tem escopo de bloco
var x = 10;
if (x > 5) {
    var y = 20; // y é acessível fora do bloco if
}
console.log(y); // 20

let a = 10;
if (a > 5) {
    let b = 20; // b é acessível apenas dentro do bloco if
}
console.log(b); // ReferenceError: b is not defined

//const é usado para declarar constantes, ou seja, valores que não podem ser reatribuídos
const PI = 3.14;
console.log(PI); // 3.14
//PI = 3.14159; // TypeError: Assignment to constant variable.
