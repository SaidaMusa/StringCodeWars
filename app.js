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
