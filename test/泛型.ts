function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(19));
console.log(identity('ss'));

type Concat<T, U> = (param1: T, param2: U) => object;
const concat: Concat<number, boolean> = (param1, param2) => {
  return {
    A: param1, B: param2,
  };
};

console.log(concat(100, false));

interface ValueWithLength {
  length: number;
}

const getLength = <T extends ValueWithLength>(param: T): number => {
  return param.length;
};

console.log(getLength([1, 2, 3]));
// console.log(getLength(true));

const getProp = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
};
const obj = { a: 'aa' };
console.log(getProp(obj, 'a'));
export { };
