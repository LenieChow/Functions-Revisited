 // Short question 4
// Define a function sumArray and a function multiplyArray that
// sums and multiplies (respectively) all the numbers in an array of
// numbers. For example, sumArray([1,2,3,4])
//  should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = [1, 2, 3, 4];
var sum = function (x,y) {
  return a + b;
}

var sum = sumArray.reduce(sum);
console.log(sum);

// output = 24


var multiplyArray = [1, 2, 3, 4];
var multiply = function (x,y) {
  return x + y;
}

var multiply = sumArray.reduce(multiply);
console.log(multiply);
// output = 10

// Long Question 1
//  Write a function lengths that accepts a single
//  parameter as an argument, namely an array of strings.
//   The function should return an array of numbers where
// each number is the length of the corresponding string.

var array = ["hello","you","are","funny"];
array.forEach(function(word) {
  console.log(word.length);

})


  //  Output = [5, 3, 3, 5]

// Question7
  // Write a function findLongestWord that takes an
  // array of words and
  // returns the length of the longest word in the array.

  var strArr = ["hello","you","are","hhhhhhhhh"];
  var longestWord = strArr.reduce(function(prev,curr){
  console.log('prev:'+ prev);
  console.log('curr:'+ curr);

  if (prev.lenght > curr.lenght) {
    return prev
  }
  else {
    return curr
  }
  });

  console.log(longestWord);

  // Longest word is hhhhhhhhh
   // if you want the longest word's lenght, use longestWord.lenght'

// to access each string in the array
var strArr = ["hello","you","are","hhhhhhhhh"];
strArr.forEach( foo );
function foo(word) {
  console.log(word);
}

// output = ["hello"] , ["you"] etc


// Question 8
var arr = ['helllo', 'you'];
function filterArr(arr,target) {
  var filterArr = arr.filter (function(word) {
    return word.length > target;
  }
)};
filterArr(arr,4);
