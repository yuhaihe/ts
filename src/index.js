"use strict";
var a = 123;
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.body.appendChild(h1);
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
console.log(Roles.USER, Roles[2]);
var consoleText = function (text) {
    console.log(text);
};
consoleText("2");
var getLength = function (content) {
    if (typeof content === "string") {
        return content.length;
    }
    else {
        return content.toString().length;
    }
};
console.log(getLength("abc")); // 3
console.log(getLength(123)); // 3
//# sourceMappingURL=index.js.map