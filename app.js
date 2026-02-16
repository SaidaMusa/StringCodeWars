//1-masala

// function numberToString(num) {
//  return num.toString()
// }


//2-masala

// function solution(str){
//   let a = str.split("")
//   return a.reverse().join("")
// }

// console.log(solution("hello"));

//3-masala

// function repeatStr (n, s) {
//   return s.repeat(n)
// }

// console.log(repeatStr(3,"hello"));


//4-masala


// function removeChar(str){
// return str.slice(1,str.length-1)
// };

// console.log(removeChar("hello"));


//5-masala

// const stringToNumber = function(str){
//   return Number(str)
//   return null;
// }

// console.log(stringToNumber("123"));


//6-masala

// function noSpace(x){
// return x.replace(/\s/g,'')
// }

// console.log(noSpace("dl ddo dlcld "));


//7-masala

// function booleanToString(b){
//   return b.toString()
// }

//8-masala

// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }


// 9-masala

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }


//10-masala

// function areYouPlayingBanjo(name) {
// return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`
// }

// console.log(areYouPlayingBanjo("Ringo"));


//11-masala

// function abbrevName(name){
//  let a = name.split(" ")
//  let firstName = a[0].charAt(0).toUpperCase()
//  let lastName = a[1].charAt(0).toUpperCase()
//  return firstName+"."+lastName

// }
// console.log(abbrevName("harris tom"));


//12-masala

// function smash (words) {
//   return words.join(" ")
// };

// console.log(smash("hello world"));

//13-masala

// function DNAtoRNA(dna) {
//   return dna.replaceAll("T","U")
// }

// 14-masala

// function stringToArray(string){
//  return string.split(" ")

// }


//15-masala

// function check(a, x) {
//  return a.includes(x)
// }


//16-masala
// function fakeBin(x){
//   let result = "";

//   for (let i = 0; i < x.length; i++) {
//     if (Number(x[i]) >= 5) {
//       result += "1";
//     } else {
//       result += "0";
//     }
//   }

//   return result;
// }

// console.log(fakeBin("1023")); 


// 17-masala

// var countSheep = function (num){
//   let result = ""
//   for (let i = 1; i <= num; i++) {
//    result += `${i} sheep...` 
//   }
//   return result
// }


//18-masala

// function greet (name, owner) {
//  return (name === owner) ? "Hello boss" : "Hello guest"
// }

// 19-masala

// function removeExclamationMarks(s) {
//   return s.replaceAll("!","");
// }


//20-masala



//21-masala

// function sumMix(x){
//  let result = 0;

//  for (let i = 0; i < x.length; i++) {
//    result += Number(x[i])
//  } 
  
//   return result
// }


//22-masala

// function doubleChar(str) {
//   let result = ""

//   for (let i = 0; i < str.length; i++) {
//     result += str[i]+str[i]
//   }

//   return result
// }


//23-masala

// function feast(beast, dish) {
// return (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) ? true : false ;
// }

// console.log(feast("did","doo"));

//24-masala

// function reverseWords(str){
//   return str.split(" ").reverse().join(" ")
// }

// console.log(reverseWords("hello world"));

// 25-masala

// function strCount(str, letter){ 
//   let count = 0;
  
//   for (let i = 0; i < str.length; i++) {
//     if (str[i]=== letter) {
//       count ++
//     }else{
//       count
//     }
//   }
//   return count
// }
// console.log(strCount("hello","l"));


// 26-masala

// String.prototype.isUpperCase = function () {
//   return this.toString() === this.toUpperCase();
// }

// 27-masala

// function correct(string) {
//   return string.replaceAll("0", "O").replaceAll("1", "I").replaceAll("5", "S");
// }

// console.log(correct("L0nd0n"));

// 27-masala

// function bonusTime(salary, bonus) {
// return (bonus === true) ?  `\u00A3${salary*10}` :  `\u00A3${salary}`
// }

//28-masala 

// function twoSort(s) {
//   let result = ""
// for (let i = 0; i < s.length; i++) {
//  if (s[i] === `/[a-zA-Z]/`) {
//    result += s[i]
//  } 
// }
// return result
// }


//5kyu
// function generateHashtag(str) {
//   let result = str.trim().split(" ")
//   let capitalLetter = ""
//   for (let i = 0; i < result.length; i++) {
//    capitalLetter += result[i].charAt(0).toUpperCase()+result[i].slice(1)     
//   }
//   return (capitalLetter.length >= 140 || capitalLetter.length === 0) ? false : "#"+capitalLetter
// }
// console.log(generateHashtag(" hello world hello "));

//29-masala

// function solution(a, b){
//   return (a.length>b.length) ? b+a+b : a+b+a 
// }

//30-masala

// function multiTable(number) {
//   let result = "";
//   for (let i = 1; i <= 10; i++) {
//     result += i + " * " + number + " = " + (i * number);
//     if (i !== 10) result += "\n";
//   }

//   return result;
// }


// console.log(multiTable(5));

//31-masala

// function nameShuffler(str){
//  let a = str.split(" ")
// return a[1]+" "+a[0]

// }

// console.log(nameShuffler("tom jerry"));


// 32-masala 

// function capitalizeWord(word) {
// if (word.length>=2) {
//    return word.charAt(0).toUpperCase()+word.slice(1)
// }else {
//   return word.toUpperCase()
// }
// }
// console.log(capitalizeWord("hi"));

//33-masala

// function stringy(size) {
//  let result = ""
//  for (let i = 0; i < size; i++) {
//     result += i % 2 === 0 ? "1" : "0";
//  }
//  return result
// }

//34-masala

// function mouthSize(animal) {
//   return (animal === "alligator") ? "small" : "wide" 
// }

// 35-masala

// function well(x){
// let good = 0

// for (let i = 0; i < x.length; i++) {
//   if (x[i]==="good") {
//     good ++
//   } 
// }
// if (good === 1 || good === 2) {
//   return "Publish!"
// }else if(good >2){
//   return "I smell a series!"
// }else{
//   return "Fail!"
// }
// }


// 36-masala

// function sayHello( name, city, state ) {
//   let a = name.join(" ")
  
//   return `Hello, ${a}! Welcome to ${city}, ${state}!`
// }


// 37-masala

// function remove (string) {
//  return (string.endsWith("!")) ? string.substring(0,string.length-1) : string 
// }


// 38-masala

// function reverse(string){
//   let a = string.split(" ")
//   let b = ""
  
//   for (let i = a.length - 1; i >= 0; i--) {
//     b += a[i]+" "
//     }
//   return b.trim()
// }

// 39-masala

// function stringClean(s){
//  return  s.replace(/[0-9]/g,"") ;
// }


// 40-masala

// function array(string) {
//   const arr = string.split(",");

//   if (arr.length < 3) return null;

//   return arr.slice(1, -1).join(" ");
// }

//41-masala

// function apple(x){
// return (x**2>1000) ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
// }


// 42-masala

// function formatMoney(amount) {
//   return "$" + Number(amount).toFixed(2);
// }

// 43-masala

// function getDrinkByProfession(param) {
//   const job = param.toLowerCase();

//   if (job === "jabroni") return "Patron Tequila";
//   if (job === "school counselor") return "Anything with Alcohol";
//   if (job === "programmer") return "Hipster Craft Beer";
//   if (job === "bike gang member") return "Moonshine";
//   if (job === "politician") return "Your tax dollars";
//   if (job === "rapper") return "Cristal";

//   return "Beer";
// }

// 44-masala

// function buildString(...template){
//   return `I like ${template.join(', ')}!`;
// }


// 45-masala

// function subtractSum(n) {
//   const fruits = [
//     "default",
//     "kiwi",
//     "pear",
//     "kiwi",
//     "banana",
//     "melon",
//     "banana",
//     "melon",
//     "pineapple",
//     "apple",
//     "pineapple",
//     "cucumber",
//     "pineapple",
//     "cucumber",
//     "orange",
//     "grape",
//     "orange",
//     "grape",
//     "apple",
//     "grape",
//     "cherry",
//     "pear",
//     "cherry",
//     "pear",
//     "kiwi",
//     "banana",
//     "kiwi",
//     "apple",
//     "melon",
//     "banana",
//     "melon",
//     "pineapple",
//     "melon",
//     "pineapple",
//     "cucumber",
//     "orange",
//     "apple",
//     "orange",
//     "grape",
//     "orange",
//     "grape",
//     "cherry",
//     "pear",
//     "cherry",
//     "pear",
//     "apple",
//     "pear",
//     "kiwi",
//     "banana",
//     "kiwi",
//     "banana",
//     "melon",
//     "pineapple",
//     "melon",
//     "apple",
//     "cucumber",
//     "pineapple",
//     "cucumber",
//     "orange",
//     "cucumber",
//     "orange",
//     "grape",
//     "cherry",
//     "apple",
//     "cherry",
//     "pear",
//     "cherry",
//     "pear",
//     "kiwi",
//     "pear",
//     "kiwi",
//     "banana",
//     "apple",
//     "banana",
//     "melon",
//     "pineapple",
//     "melon",
//     "pineapple",
//     "cucumber",
//     "pineapple",
//     "cucumber",
//     "apple",
//     "grape",
//     "orange",
//     "grape",
//     "cherry",
//     "grape",
//     "cherry",
//     "pear",
//     "cherry",
//     "apple",
//     "kiwi",
//     "banana",
//     "kiwi",
//     "banana",
//     "melon",
//     "banana",
//     "melon",
//     "pineapple",
//     "apple",
//     "pineapple"
//   ];

//   while (true) {
//     let a = String(n).split("");
//     let digitSum = 0;
//     for (let i = 0; i < a.length; i++) {
//       digitSum += Number(a[i]);
//     }

//     n = n - digitSum;

//     if (fruits[n]) {
//       return fruits[n];
//     }
//   }
// }


// console.log(subtractSum(325)); 
