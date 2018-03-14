// Write a for loop within this function that will create this array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function problem1() {
  var oneToTen = [];
  // start coding here
  for ( var i=1; i<11; i++){
      oneToTen.push(i);
    }
  }

  // done coding here
  return oneToTen;
}

// Write a for loop within this function that will create this array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function problem2() {
  var tenToOne = [];
  // start coding here

  for (var i =10; i >0; i--){
    tenToOne.push(i);
  }

  // done coding here
  return tenToOne;
}

// Write a for loop within this function that will create this array: [1, 3, 5, 7, 9]
function problem3() {
  var oddNumsArray = [];
  // start coding here
  for ( var i =1; i<=9, i+=2){
    //could use if(i%2==1 instead
    oddNumsArray.push(i);
  }

  // done coding here
  return oddNumsArray;
}

// Write a for loop within this function that will create this array: [2, 4, 6, 8, 10]
function problem4() {
  var evenNumsArray = [];
  // start coding here

  for ( var i =2; i<=10; i+=2){
    evenNumsArray.push(i);

  }

  // done coding here
  return evenNumsArray;
}
// Write a for loop within this function that will create this array: [3, 6, 9]
function problem5() {
  var threesArray = [];
  // start coding here

  for ( var i=13 i<=9; i+=3){
    threesArray.push(i);
  }

  // done coding here
  return threesArray;
}

// Write a for loop within this function that will add only names that start with "J"
// to the 'jNamesArray'. Assume that all first names will start with a capital letter.
function problem6(arr) {
  var jNamesArray = [];
  // start coding here

  for ( var i = 0; i< arr.length; i++) {
    if (arr[i][0] == "J") {
      jNamesArray.push(arr[i]);
    }
  }

  // done coding here
  return jNamesArray;
}

// Write a for loop that adds all of the values in the array together
function problem7(arr) {
  var accumulator = 0;
  // start coding here

  for ( var i = 0; i < arr.length; i++)
  {
    accumulator+=arr[i];
  }

  // done coding here
  return accumulator;
}

// Write a for loop that replace each letter (UPPERCASE) in the alphabet from A to Z into the alphabetArray.
function problem8() {
  var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // start coding here

  for ( var i = 0; i< alphabetArray.length; i++){
    alphabetArray[i] = alphabetArray[i].toUpperCase();


  }

  // done coding here
  return alphabetArray;
}


// Write a for loop that replace each letter (UPPERCASE) in the alphabet from Z to A into the alphabetArray.
function problem9() {
  var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var flippedAplphabet =[];
  // start coding here

  for ( var i=alphabetArray.length-1; i<0; i--){

    flippedAplphabet.push(alphabetArray[i].toUpperCase());




  }

  // done coding here
  return flippedAlphabet;
}


// Write the logic that will allow the function to return a string containing all of the array elements joined with a space.
// Example: problem10(['a', 'b', 'c']) ==> 'a b c'
function problem10(arr) {
  // start coding here
 return arr.join("");
    }
  }

  // return something;
  // done coding here
}

// Write the logic that will allow the function to return a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase.
// Example: problem11(['a', 'p', 'p', 'l', 'e']) ==> 'ApPlE'
function problem11(arr) {
  var staggeredLetters = '';
  // start coding here
  for (i =0; i<arr.length; i++){
    if(i%2 ==0){
      staggeredLetters+= arr[i].toUpperCase();
      else{
        staggeredLetters+= arr[i].toLowerCase()
      }
    }
    // done coding here
  return staggeredLetters;
}

// Write the logic that will allow the function to return a string containing all of the array elements alternating uppercase and lowercase starting with the first element being lowercase.
function problem12(arr) {
  var staggeredLetters = '';
  // start coding here
  for (i =0; i<arr.length; i++){
    if(i%2 ==0){
      staggeredLetters+= arr[i].toLowerCase();
    else{
        staggeredLetters+= arr[i].toUpperCase()
      }
    }

  // done coding here
  return staggeredLetters;
}

// Write the logic that will allow the function to return an array containing all of the first letters from the words in the string.
// Example: problem15(['apple', 'orchards']) ==> ['a', 'o']
function problem13(arr) {
  var firstLetters = [];
  // start coding here

  for (i=0; i<arr.length; i++)
  {
    firstLetters.push(arr[i][0]);
  }

  // done coding here
  return firstLetters;
}
// Write the logic that will allow the function to return an array containing all of the last letters from the words in the string.
// Example: problem16(['apple', 'orchards']) ==> ['e', 's']
function problem14(arr) {
  var lastLetters = [];
  // start coding here
  for (i=0; i<arr.length; i++)
  {
   lastLetters.push(arr[i]arr[i].length-1);
  }
  // done coding here
  return lastLetters;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem17([2, 1, 2, 3]) ==> [2, 2, 4, 6]
function problem15(arr) {
  var firstIndexMult = [arr[0]];
  // start coding here
  for(var i=1; i<arr.length; i++){
    firstIndexMult.push(arr[i] * firstIndexMult[0]);
  }

  // done coding here
  return firstIndexMult;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem18([2, 2, 4, 6]) ==> [2, 1, 2, 3]
function problem16(arr) {
  var firstIndexDivision = [arr[0]];
  // start coding here

  for(var i=1; i<arr.length; i++){
    firstIndexDivision.push(arr[i] / irstIndexDivision[0]);
  }


  // done coding here
  return firstIndexDivision;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem19(['a', 'apple', 'grape', 'peach', 'banana']) ==> ['a', 'aapple', 'graape', 'peaach', 'baanaanaa']
function problem17(arr) {
  var duplicateTheFirstIndex = [arr[0]];
  // start coding here
  for(var i=1; i<arr.length; i++){
    for (var j=0; j<arr[i].length;j++){
      if(arr[i][j] ==duplicateTheFirstIndex[0]){
        arr[i] = arr[i].slice(0,j) +duplicateTheFirstIndex[0]+ arr[i].slice(j)
        j++;
      }
    }

    duplicateTheFirstIndex.push(arr[i]);

  }

  // done coding here
  return duplicateTheFirstIndex;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem20(1, 10, 1)) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Example: problem20(2, 10, 2)) ==> [2, 4, 6, 8, 10]
function problem18(startingPoint, goUntil, incrementBy) {
  var arr = [];
  // start coding here

  for(var i = startingPoint; i <= goUntil; i+=incrementBy) {
    arr.push(i);
  }
  
  // done coding here
  return arr;
}
