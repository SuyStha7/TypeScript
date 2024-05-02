"use strict";
// function addn(a:number, b:number):number;
// function addn(a:string, b:string):string;
// function addn(a:any, b:any):any{
//     return a + b
// }
function addn(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result = addn(10, "Hello");
const result2 = addn("10", 5);
