function handleData(x: string): string[];
function handleData(x: number): string;
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('');
  } else {
    return x.toString().split('').join('_');
  }
}

console.log(handleData('abc'));
console.log(handleData(123));
