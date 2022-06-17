// -------------------- Extra: Function exercises -----------------------------///
// const s1 = "Hallo Ali, are you web developer?";
// const s2 = " Ali,  you  developer?";


// function missingWord(s1, s2) {
//     let makeArray1 = s1.split(" ");
//     let makeArray2 = s2.split(" ");
    
//   let result = makeArray1.filter(x => !makeArray2.includes(x))
  
//   return result.join(', ')
// }
// console.log("missingWord(s1, s2): ", missingWord(s1, s2));
// missingWord(s1, s2);




// const arr2 = ["Stian", "Jaspreet", "Karolina", "Thomas", "Yaser"];
// const arr1 = ["Stian", "Karolina"];

// let result10 =[];
// let result = arr2.filter((x) => !arr1.includes(x));
    
//     console.log("result: ", result);
// console.log("result10: ", result10);




// const names = ["Stian", "Jaspreet", "Karolina", "Thomas", "Yaser"];
// const namesUpperCase = ["stian", "jaspreet", "karolina", "thomas", "yaser"];
// const ages = [23, 26, 50, 32, 43, 41, 2];
// const idx = [3];
// const array = [
//   3, 4, 4, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23,
//   12, 99, 100,
// ];
// const numbers = 32449;

// const test = [10, 3, 2, 8, 0, 3, 5, 4, 1];

//----Exercise 10 - Odd Numbers

// const oddNumb = (num1, num2) => {
//   let result = [];

//   while (num1 <= num2) {
//     num2 % 2 !== 0 ? result.push(num2) : '';

//     num2--;
//     if (num2 === num1) {
//       continue;
//     }
//   }
//   return result.reverse();
// };

// console.log("oddNumb", oddNumb(5, 10));

//----Exercise 9

// function evenNumbersBefore(numb) {
//   let initial = 0;
//   let result = [];

//   while (initial < numb) {
//     if (numb % 2 === 0) {
//       result.push(numb);
//     } else if (numb === 0) {
//       return result;
//     }

//     numb--;
//   }
//   return result.reverse().join(',');
// }
// console.log("evenNumbersBefore()", evenNumbersBefore(9));

//----Exercise 8
// const test = [1, 2, 8, 3, 2, 3, 4];

// function evenNumbs(arr) {
//   let result = 0;
//   for (let i = 2; i < arr.length; i+=2) {
//     console.log("i", i);
//     result = arr[i] + result
//   }
//   console.log("result: ", result);
//   return result;
// }
// console.log(evenNumbs(test));

// function evenNumbs(arr) {
//   let result = '';
//   for (let i = 0; i < arr.length; i++) {
//    result += arr[i] % 2 === 0 ? `${arr[i]} in index ${i} ||` : "";

//   }
//   return result
// }
// console.log(evenNumbs(test));

//----Exercise 7
// function evenNumbs(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log("evenNumbs(test): ", evenNumbs(test));

//----Exercise 6

//--------- smallest number in the array - Solution with reduce ----------
// const test = [10, 3, 3, 8, 0, 3, 3, 4];

// function smallestNumb(arr) {
//   let result = test[0];
//   arr.reduce((total, current) => {
//     // console.log("current: ", current);
//     // console.log("total: ", total);
//     return (result = total < current ? total : current); //
//   });

//   return result;
// }
// console.log("smallestNumb(test): ", smallestNumb(test));

//----Exercise 6

//--------- smallest number in the array - Solution with for loop ----------

// function smallestNumb(arr) {
//   let result = test[0];

//   for (let i = 0; i < arr.length; i++) {

//   if (arr[i]< result) {
//     result = arr[i]
//   }

//   }
//   return result;
// }
// console.log("smallestNumb(test): ", smallestNumb(test));

//--------- return the sum of all the elements - Solution with for loop ----------

// function sumOfNumb(arr) {
//   let result =0;
// for (let i = 0; i < arr.length; i++) {

//   result = arr[i] + result
// }
//   console.log('result', result)
//   return result

// }
// console.log("sumOfNumb(ages): ", sumOfNumb(ages));

//---------return the sum of all the elements- Solution with reduce ----------
// function sumOfNumb(numb) {
//  return numb.reduce((total, index) => {

//     return total + index
//   })
// }
// console.log("sumOfNumb(ages): ", sumOfNumb(ages));
// sumOfNumb(ages);

//----Exercise 6
//Sum of number

// characters and replaces all  Exercise 5 Solving way 3

// const names2 = ["Stian", "Jaspreet", "Karolina", "Thomas", "Yaser"];
// function replace(arr) {
//   let tostring = arr.join(",").split("");
//   console.log("tostring: ", tostring);

//   let result = '';

//   for (let i = 0; i < tostring.length; i++) {
//     if (tostring[i] === "a") {
//       result += 1
//     } else {
//       result += tostring[i];
//     }
//   }

//   const spaced = result.split(",").join(", ");
//   console.log("join: ", spaced);

//   return spaced;
// }
// console.log("replace(names2);: ", replace(names2));

// characters and replaces all  Exercise 5 Solving way 2

// characters and replaces all  Exercise 5
// const names2 = ["Stian", "Jaspreet", "Karolina", "Thomas", "Yaser"];
// function replace(arr) {
//   let tostring = arr.join(",").split('');
//   console.log("tostring: ", tostring);

//   // toArray = tostring.split("");
//   // console.log("toArray: ", toArray);

//   let result = [];
//   for (let i = 0; i < tostring.length; i++) {

//     if (tostring[i] === "a") {
//       result.push(1);
//     } else {
//     result.push(tostring[i]);
//     }
//   }
//   // result = result.toString('')
//   // console.log("tostring: ", result);
//   //result = result.join('')
//   console.log("result: ", result);
//   // console.log("spaced: ", spaced);
//   const spaced = result.join("").split(',').join(', ');
//   console.log("join: ", spaced);

//   // result = result.split(" ");
//   // console.log("split: ", result);
//   return spaced;
// }
// // replace(names2);
// console.log("replace(names2);: ", replace(names2));

// characters and replaces all  Exercise 5 Solving way 1
// const names2 = ["Stian", "Jaspreet", "Karolina", "Thomas", "Yaser"];
// function replace(arr) {
//   let tostring = arr.join(",");

//   let result = [];
//   let toArray = tostring.split("");

//   for (let i = 0; i < toArray.length; i++) {

//     if (toArray[i] === "a") {
//       result.push(1);
//     } else {
//     result.push(toArray[i]);
//     }
//   }
//   console.log("result: ", result);
//   result = result.join('')
//   const spaced = result.replaceAll(',', ', ')
//   console.log("join: ", spaced);

//   return spaced;
// }
// console.log("replace(names2);: ", replace(names2));

// triangle Exercise 4

// function triangles(num1, num2, num3) {
//   let result = "";
//   if (num1 === num2 && num1 === num3 && num2 === num3) {
//     return (result = "Case 1: Equilateral Triangle");
//   } else if (num1 === num2 || num1 === num3 || num2 === num3) {
//     return (result = "Case 2: Isosceles Triangle");
//   } else {
//     return (result = "Case 3: Scalene Triangle");
//   }
// }
// console.log("riangles(type);: ", triangles(1, 3, 1));

// function triangles(type) {
//   let result = "";
//   if (type[0] === type[1] && type[0] === type[2]) {
//     return (result = "Equilateral Triangle");
//   } else if (
//     (type[0] !== type[1] && type[0] === type[2]) ||
//     (type[0] !== type[2] && type[0] === type[1]) ||
//     (type[1] !== type[2] && type[2] === type[0])
//   ) {
//     return (result = "Isosceles Triangle");
//   } else {
//     return (result = "Scalene Triangle");
//   }

//   // for (let i = 0; i < type.length; i++) {
//   //   const element = type[i];
//   //   if (type[i]) {

//   //   }
//   // }
// }
// triangles(type);
// console.log("riangles(type);: ", triangles(type));

// let num1 = 3;
// let num2 = 4;
// function multiplication1(x,y) {
//  return console.log("num", x * y);
// }

// multiplication1(num1, num2);

// function multiplication1() {
//   let num1 = 3;
//   let num2 = 4;
//   console.log('num', num1*num2);
// }

// multiplication1()

// ------- Extra: Function exercises ------------------------------------- ends///
