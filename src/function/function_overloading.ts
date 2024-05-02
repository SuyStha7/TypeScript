// function addn(a:number, b:number):number;
// function addn(a:string, b:string):string;
// function addn(a:any, b:any):any{
//     return a + b
// }

function addn<T, U>(a: T, b: U) {
  console.log(typeof a);
  console.log(typeof b);
}

const result = addn<number, string>(10, "Hello");
const result2 = addn<string, number>("10", 5);
