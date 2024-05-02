// * In TS, static method and properties belong to the class itself rather than to instance of
// * the class. By making method and properties static, we can access them directly from the
// * class without needing to create the instance of class. This is useful for utility functions
// * or properties that dont rely on instance specific class

// ? Math operation utility - creating a utility class to perform various mathematical ops

class MathOps {
  public static PI: number = Math.PI;
  public static addn(num1: number, num2: number): number {
    return num1 + num2;
  }
  public static sub(num1: number, num2: number): number {
    return num2 - num1;
  }
  public static mul(num1: number, num2: number): number {
    return num1 * num2;
  }
  public static div(num1: number, num2: number): number {
    return num1 / num2;
  }
}

console.log(MathOps.PI);
console.log(MathOps.addn(15, 24));
console.log(MathOps.sub(12, 20));
console.log(MathOps.mul(2, 3));
console.log(MathOps.div(12, 6));
