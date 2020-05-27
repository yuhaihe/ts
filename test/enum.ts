// export default function() {
enum Color {
  Uploading = 2,
  Success = 4,
  Failed = 0,
}

// console.log(Color.Success);
// console.log(Color[0]);

const getValue = () => {
  return 0;
};
enum ErrorIndex {
  a = getValue(),
  b = 1,
  c = 2,
}
// console.log(ErrorIndex.a);
enum Animal {
  Dog = 1,
  Cat = 2,
}
interface Cat {
  type: Animal.Cat;
}
let cat1: Cat = {
  type: Animal.Cat,
};
// console.log(cat1);

enum E {
  A = "2", B = 2,
}
interface T {
  A: string;
}
const getIndex = (enumObj: T) => {
  return enumObj.A;
};
console.log(getIndex(E));
