//type narroeing
//runtime value dependency 
function upperCase(arg: number | string ){
    if(typeof arg == "string"){
    return arg.toUpperCase();
    }else{
        return arg;
    }

}
upperCase("abbb");



interface User{
    name:String,
    age:number,
    phone?:number
}
let u1:User={
    name:"John",
    age:30,
    //phone:1234567890
} 
function getPhone(arg:User):number{
    if("phone" in arg){
    return arg.phone;
    }else{
        return 0;
    }
}
let result:number=getPhone(u1);

interface Person{
    role:string,
    permission?:string[]
}
let user:Person={
    role:"user"
}
let admin:Person={
    role:"admin",
    permission:["read","write","delete"]
}
function writeBlog(user:Person){
if("permission" in user){

    let permission=user.permission;
    if(permission.includes("write")){
        return "you have permission to write blog";
    }
}
        return "you don't have permission to write blog";  
}
writeBlog({role:"user"})

//Ques :
type movement="up" | "down" | "left" | "right";
type success={
    status:"200",
    data:[]
}
type error={
    status:"404",
    message:""
}
type ApiResponse=success | error;
function sendResponse(response:ApiResponse){
    if(response.status=="200"){
        return response.data;
    }else{
        return response.message;
    }
}