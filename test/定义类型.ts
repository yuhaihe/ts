// const add = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(add(1, 2));

type Add = (x: number, y: number) => number;
let add: Add = (arg1: number, arg2: number): number => {
  return arg1 + arg2;
};

add(1, 2); // right
// add(1, 2, 3); // error 应有 2 个参数，但获得 3 个
// add(1); // error 应有 2 个参数，但获得 1 个
