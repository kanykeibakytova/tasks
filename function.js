// КАРРИРОВАНИЕ


// function myFn(a,b,c,d){
//
// }
//
// console.log(myFn(10,10,10,10))

// function myFn(a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return a+b+c+d
//             }
//         }
//     }
// }
//
// console.log(myFn(10)(10)(10)(10))


// function  getUrl(domain){
//     return function(name){
//         return `https://${name}.${domain}`
//     }
// }
//
// console.log(getUrl('ru')('2gis'))
// console.log(getUrl('kg')('lalafo'))


// ЛОГИЧЕСКИЕ ЗАДАНИЯ


// 6456 -> 3  6+4+5+6=21   2+1=3
// 53671 -> 4  5+3+6+7+1=22  2+2=4
// 87543 -> 9  8+7+5+4+3=27  2+7=9
// 9861 -> 6  9+8+6+1=24   2+4=6

// function getNumber(num){
//     let number = num.toString().split('').reduce((acc, el)=>{
//         return +acc+ +el
//     })
//     return number > 9 ? getNumber(number) : number
// }
//
// console.log(getNumber(9861 ))


// function getNumber(num){
//     return num.toString().split('').reduce((acc, el)=>{
//         return +acc+ +el
//     })
//     return 21 > 9 ? getNumber(21) : 21
// }
//
// console.log(getNumber(6456))


// function solution(nums){
//
//     return nums.sort((a,b) => a-b) ? nums : []
// }
//
// console.log(solution([1,2,3,10,5]))


// function  myFn(value){
//     return value ? 'true' : '..'
// }
//
// console.log(myFn())


// let str = 'Askar'
// console.log(str.length)

















// this - это глобальный обьект
// this() - это указывает родительского элемента
//

// console.log(this)
//
// const obj ={
//     name: 'WEB',
//     age: 3,
//     lang: function (){
//         console.log(this, 'Hello')
//         return this
// }}
// console.log(obj.lang())
//
//
// const text ={
//     name: 'WEB',
//     age: 3,
//     lang: function (){
//         console.log(this, 'Hello')
//         return this
//     },
//     speak: function (){
//         console.log(`name is ${this.name}`)
//         console.log(`age is ${this.age}`)
//     }
// }
// console.log(text.speak())




// const user = {
//     name: 'Askar',
//     job: 'developer',
//     age: 21,
//     getInfo: function() {
//         console.log(`My name is ${this.name}, I am a ${this.job}`)
//         return 0
//     }
// }
//
// const person ={
//     name: 'Dastan',
//     job: 'teacher'
//
// }
// console.log(user.getInfo.bind(person)())




// const user = {
//     name: 'Askar',
//     job: 'developer',
//     dateOfYear: 2001,
//     getInfo: function() {
//         console.log(`My name is ${this.name}, I am a ${this.job}`)
//         return 0
//     },
//     getYear: function (){
//         console.log(new Date().getFullYear()-this.dateOfYear)
//         return ''
//     }
// }
// console.log(user.getYear())
//
// const person ={
//     dateOfYear: 1990
// }
// console.log(user.getYear.call(person))








// Все задания CODEWARS




// 1.
// function shortcut(string){
//     // return string.replaceAll('e', '').replaceAll('o', '').replaceAll('a')
// return string.replace(/[eo]/g, '')
// }
//
// console.log(shortcut('hello'))



// 2.
// function bigToSmall(arr) {
//   return arr.reduce((acc,el)=>{
//       return acc.concat(el)
//   }).sort((a,b)=> {
//       return b - a
//   }).join(">")
// }
//  2variant
//      return [].concat(...arr).sort((a, b) => b - a).join('>')
// }
// console.log(bigToSmall([[1,2],[3,4],[5,6]]))



// 3.
// function addLength(str){
//     return str.split(' ').map(el =>{
//         return el + ' ' + el.length
//     })
// }
//
// console.log(addLength("you will win"))


//4. найти наименьшее число

// function FindSmallestInt(args){
//         return args.reduce((acc,el )=> acc < el ? acc : el)
//
//     }
//
// console.log(FindSmallestInt([78,56,232,12,8]))



//5.
// function sumArray(array){
//     if(array && array.length >1){
//         const sortedArray = array.sort((a,b) => a-b).slice(1,-1)
//         return sortedArray.return((acc,el)=> acc+el, 0)
//     }
//     return  0
// }
//
// console.log(sumArray([3]))     ?????

// 6.
// function readOut(acrostic){
//     return acrostic.toString().split(' ').map(el => {
//         return el[0]
//     }).join('')
//
// }
// console.log(readOut(['This Is A Test']))




// 7.
// function removeExclamationMarks (s){
//     return s.split('!').join('')
// }
//
// console.log(removeExclamationMarks('Hello World!'))
//
//         second variant
// function removeExclamationMarks (s){
//     return s.replace(/!/g, '')
        // return s.replaceAll('!', '')
// }
// console.log(removeExclamationMarks('Hello World!'))


// 8.
// function makeUpperCase (str){
//     return str.toUpperCase()
// }
//
// console.log(makeUpperCase('hello'))

// 9.
// function between(a,b){
//     let arr =[]
//     for(let i = a; i <= b; i++ ){
//       arr.push(i)
//     }
//     return arr
// }
// console.log(between(1,4))

// 10.
// function sum (numbers){
//     'use strict';
//     return numbers ? numbers.reduce((acc,el) =>{
//         return acc+el
//     }, 0):0
// }
// console.log(sum([]))
// console.log(!'undefined' && true||null)

// 11.
// function position(letter){
//     return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
// }
// console.log(position("a"), "Position of alphabet: 1")

// function position(letter){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }
// console.log(position('a'),'Position of alphabet: 1')

// 12.
// function opposite(number) {
//     return -number
// }
//
// console.log(opposite(1))

// 13.
// function problem(x){
//     return typeof x ==='number'? x*50+6 : 'Error'
// }
//
// console.log(problem(1))
//


// 14.
// function getRealFloor(n) {
//   if (n <=0){
//     return n
//   }else if(n>=13){
//     return n-2
//   }else{
//     return n-1
//   }
// }
// console.log(getRealFloor(5))

//function getRealFloor(n) {
//  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// }

// 15.
// function countSheeps(arrayOfSheep) {
//     let num = 0;
//     for(let i = 0; i<arrayOfSheep.length; i++){
//         if (arrayOfSheep[i]){
//             num++;
//         }
//     }
//     return num;
// }
// console.log(countSheeps(17))

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }
// console.log(countSheeps(17))


// 16.
// function contamination(text, char){
//     return char.repeat(text.length)
// }
// console.log(contamination("abc","z"))

// function contamination(text,char){
//     return text.replaceAll('a', char).replaceAll('b', char).replaceAll('c', char)
// }
// console.log(contamination("abc","z"))


// 17.
// function xor(a, b) {
//   return (a || b) && !(a && b)
// }
// console.log(xor(true, true))

// function xor(a,b){
//     return a !== b
// }
// console.log(xor(true,true))


// 18.
//  var summation = function (num) {
//     let sum = 0
//     for(let i = 0; i <= num; i++){
//         sum = sum+i
//     }
//     return sum
// }
// console.log(summation(8))

// var summation = function (num){
//     return num ? num + summation(num-1):num
// }
// console.log(summation(8))
// var summation = function (num){
//     return num*(num+1)/2
// }
// console.log(summation(8))


// 19.
// var a = "dev"
// var b = "Lab"
//
// var name = a + b
// console.log(name)


// 20.
// function checkForFactor (base, factor) {
//         let check = base % factor
//         if (check === 0){
//             return true
//         }
//         return false
// }
// console.log(checkForFactor(63,7))

// function checkForFactor (base, factor){
//     return base%factor===0
// }
// console.log(checkForFactor(63,7))


// 21.
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }
// console.log(goals(5,10,2))

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     let goals = [ laLigaGoals, copaDelReyGoals, championsLeagueGoals ];
//     return goals.reduce( ( a, b ) => a + b ,0);
// }
// console.log(goals(5,10,2))


// 22.
// function check(a,x){
//    return a.includes(x)
// }
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))


// 23.
// function alternateCase(s) {
//     return s.split('').map(el =>{if(el !== el.toUpperCase()) return el.toUpperCase()
//     return  el.toLowerCase()}).join('')
// }
// console.log(alternateCase("ABC"))

// function alternateCase(s) {
//     return s.split('').map(function(el) {
//         return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
//     }).join('')
// }
// console.log(alternateCase("ABC"))

// alternateCase = (s) => s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
// console.log(alternateCase("ABC"))
// console.log(alternateCase("abc"))


// 24.
// function arrayPlusArray (arr, arr1) {
// return arr.concat(arr1).reduce((acc,el)=>{
//     return acc+el})
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))


// 25.
// function greet(name){
//     return "Hello, " + (name === "Johnny"? "my love": name)+"!"
// }
// console.log(greet("Jim"))
// console.log(greet("Johnny"))

// function greet(name){
//     if(name === "Johnny")
//         return "Hello, my love!"
//     return "Hello, " + name + "!"
// }
// console.log(greet("Jim"))


// 26.
// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }
// console.log(paperwork(-5,5))
// console.log(paperwork(5,5))
//
// function paperwork(n, m) {
//     if (m < 0 || n < 0) {
//         return 0;
//     }
//     return m * n;
// }
// console.log(paperwork(-5,5))
// console.log(paperwork(5,5))


// 27.
// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
// }
// console.log(past(0,1,1))

// function past(h, m, s){
//     var hours = h * 60 * 60 * 1000;
//     var minutes = m * 60 * 1000;
//     var seconds = s * 1000;
//
//     return hours + minutes + seconds;
// }
// console.log(past(0,1,1))


// 28.
// function validateHello(greetings) {
//   res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings)
//     return res
// }
// console.log(validateHello('ahoj'))

// const hellos = {
//     hello: 'english',
//     ciao: 'italian',
//     salut: 'french',
//     hallo: 'german',
//     hola: 'spanish',
//     ahoj: 'czech republic',
//     czesc: 'polish',
// }
// const validateHello = greetings => {
//     for (key in hellos) {
//         if (greetings.toLowerCase().includes(key)) {
//             return true
//         }
//     }
//     return false
// }
// console.log(validateHello('ahoj'))


// 29.
// function litres(time){
//     let str = time*(0.5)
//     return Math.floor(str)
// }
// console.log(litres(3))
// function litres(time) {
//     return Math.floor(time * 0.5);
// }
// console.log(litres(3))
// function litres(time) {
//     return Math.floor(time/2)
// }
// console.log(litres(3))


// 30.
// function hoopCount (n) {
//     return n>=10 ? "Great, now move on to tricks":"Keep at it until you get it"
// }
// console.log(hoopCount(3))
// console.log(hoopCount(11))

// 31.
function mergeArrays(arr1, arr2) {
 return (arr1. concat(arr2))

}

console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))