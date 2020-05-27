let a: number = 123;
const h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.body.appendChild(h1);

enum Roles {
  ADMIN = 1,
  USER = 2
}

console.log(Roles.USER, Roles[2]);

const consoleText = (text: string): void => {
  console.log(text);
};
consoleText("2");

const getLength = (content: string | number): number => {
  if (typeof content === "string") {
    return content.length;
  } else {
    return content.toString().length;
  }
};
console.log(getLength("abc")); // 3
console.log(getLength(123)); // 3
