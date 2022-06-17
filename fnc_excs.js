// -------------------- Extra: Function exercises -----------------------------///
const names = ["Stian", "Jaspreet", "Karolina", "Thomas", "Yaser"];
const namesUpperCase = ["stian", "jaspreet", "karolina", "thomas", "yaser"];
const ages = [23, 26, 50, 32, 43, 41, 2];
const idx = [3];
const array = [
  3, 4, 4, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23,
  12, 99, 100,
];
const numbers = 32449;

const test = [10, 3, 2, 8, 0, 3, 5, 4, 1];


/* JavaScript String
Exercise 4 ------------ find the longest word*/
// const x = "Websdfsdsdfsdf fsffdssdfsdfdsf Tutorial";

// function longestWord(string) {
//   let array = string.split(" ");
//   let resultString = "";
//   for (let i = 0; i < array.length; i++) {

//     if (array[i].length > resultString.length) {
//       // console.log("array[i].toString(): ", array[i].toString());
//       // console.log("resultArray: ", resultArray);
//       resultString = array[i].toString();
//     }
//   }
//   return resultString;
// }
// console.log("longestWord(x): ", longestWord(x));
1;

// Exercise 3 ------------ string firs letter to uppercase
// const x = "prince of 32432 persia";

// function upperCase2(string) {
//   let array = x.split(' ')
//   let result = '';

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     result +=
//       element[0].toString().toUpperCase() + element.toString().substring(1) + " ";
//   }
// return result;
// }

// console.log(upperCase2(x));
// Exercise 2 ------------ string to alphabetical order*/

/* const str = "webmaster";

function toAlphOrd(string) {
  let array = str.split('').sort();
  console.log("array: ", array);
  return array.join('')
}
console.log(toAlphOrd(str)); */

/* ///---------------------------------- /// */

/* JavaScript String
Exercise 1 ------------ to reverse*/

// third solution
// let str = 'hallo'

// function reverse2(string) {
// if (string === '') {
//   return '';
// } else {
//   return reverse2(string.substr(1)) + string.charAt(0)
//   console.log("reverse2(string.substr(1)) + string.charAt(0): ", reverse2(string.substr(1)) + string.charAt(0));
// }

// }
// console.log(reverse2(str))

// second solution
/* let str = 'hallo'

function reserve1(str) {
  let result = '';
  for (i = str.length - 1; i >= 0; i--){
    result += str[i];
  } 
  console.log("result: ", result);
return result;
}
reserve1(str); */

// first solution
/* const x = '32449'; 
const toatrray = x.split('').reverse().join('')

console.log(toatrray) */

/* Exercise 7    to String ------------------------ */

// const myColor = ["Red", "Green", "White", "Black"];
// const join = myColor.join(',')
// const toString1 = myColor.toString();

// function toString(myColor) {
//   console.log("toString:", myColor.toString());
//   console.log("join: ", myColor.join(','));
//   console.log("splice: ", myColor.splice(0,1));
//   console.log("split: ", join.split());
// }
// toString(myColor);
// console.log("myColor: ", myColor);

/* Exercise 6    ------------------------ */
// var array = [3,1,6,4,6,3,9,0,0];

// const doubbleNum = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let index = i+1; index < arr.length; index++) {
//       console.log(arr[i]);
//       if (arr[i] === arr[index]) {
//         result.push(arr[index]);
//       }

//     }
//   }
//   console.log('result',result)

//   //console.log("result: ", result);
//   return result
// }
// doubbleNum(array);

/* Exercise 5    ------------------------ */
// var array = [
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ];
// var index = 3;

// const calc = (array, index) => {
// console.log(array[index]);
//   return array[index]

// }
// calc(array,index);

/* Exercise 3 and 4   ------------------------ */

/* Functions that use Arrays */
//biggest number
//   const numbers = [200, 10, 9, 26, 50, 32, 43, 41,900, 100, ];

// const biggest = (ages) => {
//   let result = ages[0];
//     for (let i = 0; i < ages.length; i++) {
//       if (ages[i] > result) {
//         result = ages[i]
//       }

//     }
//     console.log(result)
//   return result
//   }
// biggest(numbers)

//-----------------------------------------------------------/////
//lowest number
//  const numbers = [200, 10, 9, 26, 50, 32, 43, 41, 100, ];
// let num = numbers[0];

//  function minNumb(ages) {

//    for (let i = 0; i < numbers.length; i++) {
//      if (numbers[i] < num) {
//        num = numbers[i]
//      }
//    }
//    console.log(num)
//      }

//  minNumb(numbers);

/* Looping over an Array
Exercise 2 */

// const ages= [23,26,50,32,43,41];
// /* for loop */
// for (let i = 0; i < ages.length; i++){
//   if (ages[i] % 2 === 0) {
//     console.log(ages[i])
//   }
// }

/* while loop */
/* let count = 0;
while (count < ages.length) {
  
  if (ages[count] % 2 === 0) {
    console.log(ages[count]);
  }
  count++; 
  console.log("count: ", count);

} */

/* Sorting an Array
Exercise 1
 */
/* const names = ['Jaspreet', 'Karolina', 'Stian', 'Thomas', 'Yaser'];

for (let i = 0; i < names.length; i++){
  console.log(names[i])
}
   */
/* Then print the first element of the array in the console. On the next line,  */
// console.log(names[ names.length - (names.length -1)])
// console.log(names[ (names.length - 1)]);

/* let myAge = 41;
const juliasAge = 41;

if (myAge < juliasAge) {
  console.log("Julia is older than you");
} else if(myAge> juliasAge) {
  console.log('Julia is younger than you');
} else {
  console.log("You have the same age as Julia")
} */

/* let age = 3

if (age > 21) {
  console.log(`You are greater than 21`)
} else{
  console.log(`You are younger than 21`)
  
} */

/* 
let j = 1;
for (;;) {
  console.log(j);
  j += 2;
  if (j > 10) {
    break;
  }
} */

/* function missingWords(s, t) {
  let missing = [];

  let a = s.split(" ");
  let b = t.split(" ");

  a.forEach((word, i) => {
    /* asagidaki '- missing.length' ne ise yariyor? 
    if (word !== b[i - missing.length]) {
        //console.log('missing',missing);  //why complete always
        console.log("i", word, [i]);
        console.log("b", b[i]);
      console.log("missing ", missing);

console.log("b+ -miss.lenth", [i - missing.length]);
        missing.push(word)
    }
  });

  return missing;
}

console.log(
  "result",
  missingWords(
    "I am using hackerrank to improve programming am",

    "am hackerrank to improve"
  )
); */
/* 
      console.log("b+ -miss.lenth", b[i - missing.length]);
      console.log("i", [i]); //each i doesnt matched
      console.log("b-i", b[i]); 

      // why is missing length undefined??
      console.log("missing lenth", missing.length); */
