const getStringLength = (target: string | number): number => {
  if ((target as string).length) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
};
console.log(getStringLength(11111111111));
