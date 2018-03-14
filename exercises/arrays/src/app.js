// // // BASE GOAL:
// //
// // // Problem 1: Create a function called "addToArrayOne" that adds a single value to an array. The function takes two parameters: The first parameter is the array the value will be added to and the second parameter is the value.
//  function addToArrayOne(arr, val){
//  arr.push(val);
//  }
// // // Problem 2: Create a function called "addWithoutPush" that adds a single value to the end of the array without using the Array.push method. The function takes two parameters: The first parameter is the array the value will be added to and the second parameter is the value.
// // //-toggle soft wrap..you can find in view
// //
//  function addWithoutPush(arr, val){
//    arr[arr.length] = val;
//  }
// //
// // // Problem 3: Create a function called "removeFirst" that removes the first index of an array.
// function removeFirst(arr, val) {
//    arr.shift(val);
//  }
// //
// //
// // // Problem 4: Create a function called "removeLast" that removes the last index of an array.
//  function removeLast(arr, val) {
//   arr.pop(val);
//  }
// //
// // // Problem 5: Create a function called "addToBeginning" that adds a single value to the beginning of an array. The function takes two parameters: The first parameter is the array the value will be added to and the second parameter is the value.
// function addToBeginning(arr, val) {
//    arr.unshift(val);
//  }
// //
// // // Problem 6: Create a function called "switchFirstAndLast" that switches the places of the first and the last value of the array.
// //
// //using array index
// function switchFirstAndLast(arr) {
//   temp = arr[0];
//    arr[0] = arr[arr.length-1];
//    arr[arr.length-1] = temp;
// }
//
// //using array method
// var front = arr.shift();
//  var back = arr.pop();
//  arr.push(front);
//  arr.unshift(back);
// //
// // // Problem 7: Create a function called "flipIt" that reverses the order of an array.
//  function flipIt(arr, val) {
//    arr = arr.reverse();
//  }


// *******************************************************************
// STRETCH GOAL

// Problem 8: Create a function called "pallindromeChecker" that checks whether a string is a pallindrome or not. If it is a pallindrome, return true, otherwise, return false. In this case, assume that the string will be just one word with no punctuation.

mystring = "coffee";
if (mystring[0]==mystring[mystring.length-1]) {
  console.log(true);
}
  else
{
    console.log(false);
}