// // let userInput = Number(prompt(`Enter the percentage and seem your result`));
// // console.log(userInput);

// // let userInput = document.getElementById("userinput")
// // console.log(userInput.value);

// // let data= document.getElementById("submitdata")
// // let inputnew = document.getElementById("name")

// // let input2= document.querySelectorAll(".name")

// // function call() {
// // console.log(input2);

// //     let userData = {
// // name:input2.value,
// // lastname:input2.value,
// // num:input2.value,
// // num3:inputnew.value

// // }
// // console.log(userData);
// // console.log(input2)
// // }

// let name  = document.getElementById("name")
// let password  = document.getElementById("password");
// let email = document.getElementById("email")

// let errorname = document.getElementById("errorname")

// errorname.style.display="none"
// addEventListener("input", ()=>{

// if(name.value.length<3 ) {
//     errorname.style.display="inline"
//     errorname.style.color="red"
// errorname.innerHTML="name have greater than 3";
// }
// else if(name.value.length>3) {
// errorname.style.display="none"
// }

// }
// //  else if(password.value.length<5) {
// //     alert("password must have 5 characters")
// // }
// //  else if (email.value.includes("@")) {
// //     alert("please must have @")
// // }

// )

// // function checkData("in") {

// // }

// function hello() {
//     console.log("hello my name is function");

// }

// var let or const
// let hello = ()=>{
// console.log("hello");

// }

// let hello = a => console.log("ds");
// hello()
// let a=12;
// const a=123

// let a=12;
// console.log( String(a)); //explicite conversion
// console.log( typeof a);

// let age =12;
// let stringage = String(age)
// console.log(typeof stringage);
// console.log(typeof age);

// The rule is:

// If one operand is a Number and the other is a String,
// convert the String to a Number

// logical operator
// let a=12;
// if(a>0 && a<10) {
//     console.log("hello");

// }
// else{
// console.log("yellow");
// }

// let age =100000;

// let result  = (age >18) ? "you can drive" : "you can't drive soory:) "
// console.log(result);

// // result
// let marks =prompt("")
// if(marks>0 && marks<=40) {
// console.log(`your fail`);
// }
// else if(marks>40 && marks<=60) {
//     console.log(`you get C Grade`);

// }
// else if(marks>60 && marks<=69) {
//     console.log(`you get B Grade`);
// }
// else if(marks>=70 && marks<=79) {
//     console.log(`you get A Grade`);
// }
// else if(marks>=80) {
//     console.log(`you get A1 Grade`);
// }
// else{
//     console.log("enter the right number");

// }

// let a = 10;
// if(a == 10){
//     console.log("Ten");
// } else {
//     console.log("Not Ten");
// }

// let a=61;
// let s  = (a>0 && a<40) ? "Fail"
// :(a>41 && a<60) ? "c":
// (a>61 && a<70)? "b":
// (a>71 && a<80) ? "a" :
//  (a>81) ? "A1":
//  "insd"
// console.log(s);

// let a = 12;

// let s = (a > 0 && a <= 40) ? "Fail" :
//         (a > 40 && a <= 60) ? "C" :
//         (a > 60 && a <= 70) ? "B" :
//         (a > 70 && a <= 80) ? "A" :
//         (a > 80) ? "A1" :
//         "Invalid";

// console.log(s);

// let num =5
// for(let i =10; i>=0;i--) {
//     console.log(`${num} * ${i} = ${(num*i)}`);
// }

// let num = [1,2,3,5,6,8];
// let i = 0
// while (i<num.length) {
// console.log(num[i]);
//     i++
// }
// let age =1
// let i=12
// do {
//     console.log(age);

// } while (age>i);
// i++

//   for(let i = 0; i<=10; i++) {

//     if(i===4) {
//         continue;
//     }
//     console.log(i);

// }

// let str = "hello js"
// str= "hello css"
// console.log(str);

// Strings are immutable
// Once created, they cannot be changed

// let str = "Hello js"
// let a= Number(str)
// console.log();

// console.log(Number(str));
// // console.log(newstr);

// let name  = "ali"
// let name1  = 'ali'
// console.log(name);
// console.log(name1);
// console.log(typeof String(121212));

// console.log("sdf");

// let obj = {
// //  name is key or val
//     name:"Ali",
//     class:"9th",
//     profashion:"stundent",
// }

// for in loop
// for(index in Object.values(obj)){
//     console.log(index);

// }
// let arr= [12,34]
//     let a = arr[Symbol.iterator]();

// console.log(typeof a);

// console.log(a.next());
// console.log(a.next());

// console.log(a.next());
// console.log(typeof a.next());

// let str = "hello js user"

// return the ascii code of str and utf 16 code
// console.log(str.charCodeAt(2));

// return the postion using pass index and unicode  code point
// console.log(str.codePointAt("sdsds".));

// charCodeAt() → old, UTF-16 unit, may split emojis.
// codePointAt() → modern, full Unicode code point, works with all characters.

// let a  = 'hello'
// console.log(typeof a.concat(" js"));

// let a = "hello js"
// console.log(a.at());

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-4);
// console.log(part);

// let part = text.slice(start, end-1);
// let part = text.slice(text);
// console.log(part);

// const data = "apple,banana,orange,grape";
// const fruits = data.split("");
// console.log(fruits);
// // Output: ["apple", "banana", "orange", "grape"]

// let largeObj = {
//   id1: "value1",
//   id2: "value2",
//   id3: "value3",
//   id4: "value4",
//   id5: "value5",
// };

// let maxnum = arr[0]

// for(let i= 0 ; i<arr.length; i++) {
// if(arr[i]>maxnum){
//     maxnum = arr[i]
// }
// }
// console.log(maxnum);

// let arr=[12,4,5,6,7,0,100,-12,-1000]
// let minnum = arr[0];

// for(let i = 0; i<arr.length; i++) {
// if(arr[i]<minnum) {
//     minnum = arr[i]
// }
// }
// console.log(minnum);
// let a =2363600

// let  b= a.toExponential(7)
// b =Math.random()+1
//   let para = document.getElementById("para").innerHTML=b
// let arr = Math.random()
// let newarr = arr.toString().split("")

// for(let  i=0;i<newarr;i++) {
//     if(newarr==0 || newarr==1){
//         console.log(`mil gaya`);

//     }
// }
// let age = 120;
// let final = (age>16) ?
// "you can drive" : //if
// "you can't Drive" //else

// console.log(final); // Output: "you can drive cycle right now"

// let a = Symbol("hello")
// let obj ={
//     name:"user",
//     class:"9th",
//     [a]:"hello",
//     school:"Hira "
// }

// console.log(typeof obj[a]);

// let a = Symbol("hello")
// let obj ={
//     name:"user",
//     class:"9th",
//     school:"Hira "
// }

// obj.a= function (params) {

// let obj = {
//     name:"ali",
//     class:Number(12),
//     subject:"Mathematics"
// }
// let obj2 = {
//     name:"ali",
//     class:Number(12323232),
//     subject:"Mathematics"
// }

// let obj3 = Object.assign({},{obj},{obj2})
// console.log(obj3);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { e: 423, c: 52323 };
// let sppjb = {...obj1,...obj2}
// console.log(sppjb.hasOwnProperty('a'));

// let obj = {
//     name: "ali raza",
//     class:"12th",
//     a:12
// }
// console.log(obj.hasOwnProperty("a"));

// const merged = Object.assign(obj1,obj2);
// console.log(obj1);
// console.log(merged);
// console.log(merged===obj1);

// }
//     // isActive: true,
// let ar  = [2334,3434]
// console.log(`type of arr is`,typeof ar);

// Example of accessing properties and methods
// console.log(user.username); // "jdoe_coder"
// console.log(user.profile.age); // 30
// console.log(user.contact.address.city); // "Anytown"
// console.log(user.getFullName()); // "John Doe"
// console.log(user.isAdmin()); // false

// console.log(user["roles"].push("web developer"));
// console.log(user["roles"][1]);

// function hello (a) {
//     console.log(`hello Developer ${a}`);
// }
// hello(12)

// hello()

// function func() {
// let a= 12;
//     console.log(`normal function is here :)`);
// console.log(this.a);

// }
// let  obj= {
//     name:"ali",
//     class:"9th"
// }
// console.log(this.name);

// let a = (val) =>   true
// console.log(a(23));

// console.log(a(23,12));

// let a = (val,value2) =>   console.log(val,value2);
// b()
// let b= function add() {
//     console.log(`hello js`);

// }

// let user = {

// id:'123',
// fun:()=>(console.log(this.id))

// }
// let user = {

// id:'123',
// a:function () {
//     console.log(this);

//     console.log(`js users is here ${this.id}`);

// }
// }

// user.a()

// let user1= {
//     username  : `riyyan`,
//     class:"12th",
// name:function (){
//     console.log(this.username);
// let user2= {
//     username : `Ayan`,
//     class:"10th",
//     nameseond:function (){
//     console.log(this.username);
// }}

// }
// }

// console.log(user1.name());
// console.log(user2);
// console.log(user2);

// function book(id,title,pric) {
// // console.log(id,title,pric);
// console.log(this.id);
// }

// let a=  new  book(1,'javascript','1,000')

// function add() {
//     console.log( arguments);

// }
// add(12,4)

// let a= ()=>{
//     console.log( arguments);

// }
// a(12,12)
// let namem  ="ali"

// let arr1 = [12, 3, 4, 3];
// let arr2 = [12, 3, 4, 3];
// let arr3 = [20, 3, 4];

// combine arr in newarr 
// let newArr = [...arr1, ...arr2, ...arr3];

// let maxVal = newArr[0];

// for (val of Object.values(newArr)) {
//   if (maxVal < val) {
//     console.log(maxVal,val);
    
//     maxVal = val;
//   }
//   else{
//     console.log(`not match`);
    
//   }
// }
// console.log(maxVal);

// a

// function add() {
//     console.log(`hello js`);
//     let a = 13;
    
// }
// add()
// let obj = new add
// add.call()

// lexical scope

// let a =12;

// function fun() {
//     console.log(a);
    
// }

// function fun1() {
//     console.log(a);
    
// }
// fun()
// fun()
// let obj = {
//     name :"Ali",
    
//     a:()=>{
// this.a        
//     }

// //  a() {
// // console.log(this.name);

// // }

// }
//     // console.log(this);

// console.log(obj.a());

// let btn= document.getElementById('btn')
// let btn= document.getElementsByTagName('button')[0]

// btn.addEventListener("click",function () {
// console.log(this);

// let a =122323;
// console.log(a);
// ()=>[
    
    
// ]
// })
// let obj={
//     name:`ALI`
// }



// let a = ()=>{
//     console.log(this);
    
// }


// let arr = [12,,34,34,3,4];
// arr.forEach((val,indexs)=>{
//     console.log(a);
    
// })

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach((val)=>{

//     console.log(val);
    
// })

// map creator a new arr

// let newarr=  fruits.map(()=>{
// return 1    
// })
// console.log(typeof newarr);

//   const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let newArr  = fruits.map((val,end,a)=>{
//     return val,end,a
// })
// console.log(newArr[0][0]);
// console.log(`original value  : ${fruits}`);



// filter in arr
// const userNames = [
//   "alice", "Bob", "Charlie", "Diana", "Ethan",
//   "Fiona", "George", "Hannah", "Ian", "Julia",
//   "Kevin", "Laura", "Michael", "Nina", "Oscar",
//   "Paula", "Quinn", "Ryan", "Sarah", "Thomas","ali",
// "ahmed"
// ];

// let newarr= userNames.filter((val)=>{
// if(val.startsWith('a')){
//     return true //add in new arr
// }
// })
// console.log(newarr);  //alic , ali, ahmed
// console.log(userNames);  




// destructuring in arr
// const user = {
//   id: 1,
//   name: "Alice Smith",
//   roles: ["Admin", "Editor", "Viewer"],
//   skills: ["JavaScript", "React", "Node.js"]
// };

// let [val]=user.roles
// let [lang]=user.skills

// console.log(val,'is',lang);

// let {roles,skills}=user;
// console.log(roles,skills);



// let [_,val2,val3]=user.roles
// console.log(val2);

// const userNames = [
//   "alice", "Bob", "Charlie", "Diana", "Ethan",
//   "Fiona", "George", "Hannah", "Ian", "Julia",
//   "Kevin", "Laura", "Michael", "Nina", "Oscar",
//   "Paula", "Quinn", "Ryan", "Sarah", "Thomas","ali",
// "ahmed"
// ];

// let copyarr =userNames
// console.log(copyarr.pop());
// console.log(userNames);


// let newarr = [...userNames]
// console.log(newarr.pop());
// console.log(newarr);
// console.log(userNames);


// const products = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 29.99,
//     stock: 120,
//     inStock: true
//   },
//   {
//     id: 2,
//     name: "Mechanical Keyboard",
//     category: "Electronics",
//     price: 89.99,
//     stock: 75,
//     inStock: true
//   },
//   {
//     id: 3,
//     name: "Running Shoes",
//     category: "Footwear",
//     price: 59.99,
//     stock: 0,
//     inStock: false
//   },
//   {
//     id: 4,
//     name: "Water Bottle",
//     category: "Accessories",
//     price: 14.99,
//     stock: 200,
//     inStock: true
//   }
// ];


// let searchProduct =  products.filter((products)=>{
  
//   return products.category=='Electronics'


// })
// console.log(searchProduct);
// let obj =[

//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 29.99,
//     stock: 120,
//     inStock: true
//   },
  
//   {
//     id: 12,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 29.99,
//     stock: 120,
//     inStock: true
//   }

  
// ]
// let mergedobj = {...obj[0].id,...obj[1].id}
// console.log(mergedobj);

// let obj = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 29.99,
//     stock: 120,
//     inStock: true
//   },
//   {
//     id: 12,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 29.99,
//     stock: 120,
//     inStock: true
//   }
// ];

// let merged = {(obj[0]+obj[1])};

// console.log(merged);

// let users = [
//   {
//     id: 1,
//     name: "Ali",
//     role: "Admin"
//   },
//   {
//     id: 2,
//     name: "Sara",
//     role: "User"
//   },
//   {
//     id: 3,
//     name: "John",
//     role: "Editor"
//   }
// ];

// let newarr= users.filter((users)=>{
// if(users.id===2 || users.name=='Ali' && users['role']=='Ediotor' ) {
//   users['role']='react developer'
//   return true //true means in add 
// }
// })
// console.log(newarr);

// const users = [
//   { id: 1, name: "Ali", age: 22, role: "Admin", salary: 5000 },
//   { id: 2, name: "Sara", age: 17, role: "User", salary: 2000 },
//   { id: 3, name: "John", age: 25, role: "Editor", salary: 4000 },
//   { id: 4, name: "Ayesha", age: 30, role: "User", salary: 3500 },
//   { id: 5, name: "David", age: 16, role: "User", salary: 1500 }
// ];
// let newarr  = users.map(()=>{
//   ...users,  
//   user.salary * 1.10 
// })
// const users = [
//   { id: 1, name: "Ali", age: 22, role: "Admin", salary: 5000 },
//   { id: 2, name: "Sara", age: 17, role: "User", salary: 2000 },
//   { id: 3, name: "John", age: 25, role: "Editor", salary: 4000 }
// ];

// const updatedUsers = users.map(user => {
//   return {
//     salary: user.salary * 1.10   // increase by 10%
//   };
// });

// console.log(updatedUsers);

// Return a new array with this format:
// "Ali is an Admin"


// let newArr = users.map((users)=>{
//   return `${users.name} is an ${users.role}`
// })
// console.log(newArr);





// / Convert all names to uppercase.
// let newArr = users.map((users)=>{
// return users['name'].toUpperCase()
// })
// console.log(newArr);
// console.log(users);



// Create a new array that adds a new property isAdult (true if age ≥ 18).
// let newarr= users.map((users)=>{
// if(users.age>=18) {
//   return {
//     'abdult':true
//   }
  
  
// }
// })
// console.log(newarr);






// MAP() Questions

// Create a new array that contains only the names of all users.
// let onlyNameusers= users.map((users)=>{
// return users.name
// })
// console.log(onlyNameusers);







// Create a new array where each user’s salary is increased by 10%.

// Create a new array that adds a new property isAdult (true if age ≥ 18).

// Convert all names to uppercase.

// Return a new array with this format:
// "Ali is an Admin"


// FILTER() Questions
// Get all users who are 18 or older.
// Get all users whose role is "User".
// Get users with salary greater than 3000.
// Get users whose name starts with letter "A".
// Get minors (age below 18).

// FOREACH() Questions
// Print all user names to the console.
// Print "Ali earns 5000" format for each user.
// Calculate total salary using forEach.
// Count how many users are adults.
// Add a new property bonus = 500 to each user.
// const users = [
//   { id: 1, name: "Ali", age: 22, role: "Admin", salary: 5000 },
//   { id: 1, name: "Alisha", age: 22, role: "Admin", salary: 5000 },
//   { id: 2, name: "Sara", age: 17, role: "User", salary: 2000 },
//   { id: 3, name: "John", age: 25, role: "Editor", salary: 4000 }
// ];

// // Calculate total salary using forEach.
// let total= 0;
// users.forEach((users)=>{

//    total+=users.salary
   
//   })
//   console.log(`Monthly Employess Spend :  ${total}`);



// Print "Ali earns 5000" format for each user.
// users.forEach((users)=>{
// console.log(`${users.name} is earns ${users.salary}`);

// })



// Print all user names to the console.
// users.forEach((users)=>{
//   console.log(users.name);
  
// })




// let arr = [1,2,2,3,4,4,5]
//  let newarr= arr.map(()=>{
//   return 120
// })
// console.log(newarr);


// let map = new Map()
// console.log(map.set(1));
// console.log(map.set('1'));

// let age = [12,24,3,4,3,34]
// console.log(age.join('/'));


// addEventListener('do')










// Get minors (age below 18).
// let age = users.filter((users)=>{
//   return (users.age>18)
// })
// console.log(age);





// Get users whose name starts with letter "A".
// let name = users.filter((Users)=>{
// return Users['name'].startsWith('A')
// })
// console.log(name);












// // Get users with salary greater than 3000.
// let salary = users.filter((users)=>{
// return (users['salary']>3000)
// })
// console.log(salary);









// // Get all users whose role is "User".
// let UsersRole=users.filter((users)=>{
// return (users['role']=='Users')
// })
// console.log(UsersRole);



// dom 
// let img= document.querySelector('img')
// console.log(img);
// img.setAttribute('src','https://imgs.search.brave.com/d3Txm-zww4wdxzj18QBLKcdiVtoSA5p2ai367Telqfs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93ZWIt/ZGV2ZWxvcG1lbnQt/d29yZC1jbG91ZC1j/b25jZXB0LWdyZXkt/YmFja2dyb3VuZC04/ODY1MDYyNC5qcGc')
// console.log(img.getAttribute('src'))
// console.log(img.removeAttribute('src'))

// let a = document.body
// let doc= document.createElement('<h1>hello js users</h1>')
// console.log(doc);

// // console.log(a.append(doc));

// let b=  document.createElement("h1")
// b.innerText='hello js users here'
// let body =document.body;
// console.log(body.prepend(b));


// let heading  =document.createElement('h2')
// let img= document.createElement('img')
// let para =document.createElement('p')
// let links = document.createElement('a')
// links.setAttribute('href','https://search.brave.com/images?q=man+human+frontend+develope');
// links.innerText="sd"

// para.textContent='I am a passionate Frontend Developer who enjoys building clean, responsive, and user-friendly web applications. I focus on writing clean code and creating smooth user experiences. I am always learning new technologies to improve my skills and stay updated with modern web development trends'

// img.setAttribute('src','https://imgs.search.brave.com/MKSRmOLcYr1SotleBVKHe97omndSGcd8fafmcXDUkXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/NzE0LzM4Ny9zbWFs/bC9hLW1hbi13aXRo/LWEtYmVhcmQtYW5k/LWEtc2hpcnQtaXMt/c2l0dGluZy1pbi1m/cm9udC1vZi1hLWNv/bXB1dGVyLXBob3Rv/LmpwZw')


// console.log(heading.innerHTML="Frontend developer");

// let a = document.createElement('div')
// a.style.textAlign='center'
// a.style.border='2px solid red'
// a.style.padding='20px'
// img.style.width='200px'
// img.style.height='190px'
// img.style.borderRadius='50%'

// a.append(img)
// a.append(heading)
// a.append(para)
// a.append(links)
// // a.append(link)

// let dom = document.body
// dom.append(a)

let inputs= document.querySelectorAll('input')
let heading = document.querySelector('h2')
let title = document.querySelector('h4')
let profile = document.querySelector('img')

let maincar = document.querySelector('.profile')
console.log(maincar);


let submit  = inputs[3]


submit.addEventListener('click',()=>{
    maincar.style.display = 'flex'
    heading.innerText=inputs[0].value
title.innerText=inputs[1].value
profile.setAttribute('src',inputs[2].value)
})



// let pta = document.getElementById('in')

// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     File.call()
// pta.style.display='flex'    
// })
// let pta = document.getElementById('in');
// let btn = document.querySelector('button');


// 1. Button just triggers the file picker
// btn.addEventListener('click', () => {
//     pta.click();
// });

// pta.addEventListener('change', (e) => {
//         let file = e.target.files[0];

//         btn.innerText=file.name

//     }
// );
