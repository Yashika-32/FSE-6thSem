"use strict";
//enum ---> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
// function addblog(role:string):string{
//     if(role==="user"){
//         return "not allowed to add blog"
//     }else{
//         return "allowed to add blog"
//     }
// }
function addblog(role) {
    if (role === "user") {
        return "not allowed to add blog";
    }
    else {
        return "allowed to add blog";
    }
}
addblog("admin");
addblog("user");
//addblog("guest");
var Role2;
(function (Role2) {
    Role2[Role2["user"] = 0] = "user";
    Role2[Role2["admin"] = 1] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user); //1
// function addblog2(role:Role2):string{
//     if(role===Role2.user){
//         return "not allowed to add blog"
//     }else{
//         return "allowed to add blog"
//     }
// }
//# sourceMappingURL=index.js.map