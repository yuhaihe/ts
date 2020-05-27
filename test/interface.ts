// 定义接口
interface info {
  firstName: string;
  lastName: string;
}
const getFullName = ({ firstName, lastName }: info) => {
  return `${firstName} ${lastName}`;
};

const n = getFullName({ firstName: "100", lastName: "asd" });
console.log(n);
// 可选属性
interface Vegetables {
  color?: string;
  type: string;
}
const getTables = ({ color, type }: Vegetables) => {
  return `${color ? color + " " : ""} ${type}`;
};
// 使用类型断言绕开多余属性
const v = getTables({ type: "1", size: "small" } as Vegetables);
console.log(v);

// 只读属性
interface Role {
  0: string;
  readonly 1: string;
}
const role: Role = {
  0: "admin",
  1: "user",
};
role[0] = "add";
// role[1] = "add";

// 函数类型  调用签名
type AddFunc = (num1: number, num2?: number) => number;
// interface AddFunc {
//   (num1: number, num2: number): number;
// }
const add: AddFunc = (n1, n2) => {
  if (n2) {
    return n1 + n2;
  } else {
    return n1 * n1;
  }
}
// const join: AddFunc = (n1, n2) =>  `${n1}${n2}`;
const sum = add(10);
console.log(sum);

export { };
