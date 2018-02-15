//1. Return an `array` of only even numbers.
var array = [234, 11, 21, 88, 1212, 6632, 00, 1];
var even = [];
for (var i = 0; i < array.length; i++) {
  if (array[i]%2 === 0) {
    even.push(array[i]);
  }
}
console.log(even);

//2. Return an `array` of all words that have vowels.
    //*Hint: the [indexOf() method](https://www.w3schools.com/jsref/jsref_indexof.asp)
    //is useful to check if a specific letter is in a string*
var array2 = ['ryan', 'ada', 'ppzpp', 'brgggg', 'eric'];
var vowels = "aeiou";
var vowelWords = [];
//loop through array to get words
for (var i = 0; i < array2.length; i++) {
  //loop through letters in word
  for (var j = 0; j < array2[i].length; j++) {
      //check if there is a vowel in the word
      if (vowels.indexOf(array2[i][j]) > -1) {
        vowelWords.push(array2[i]);
        //to stop this loop set j to length of word
        j = array2[i].length;
      }
  }
}
console.log(vowelWords);

//3. Return an `array` of all of the "truthy" values.
var array3 = [true, 1, 0, 'elephant', undefined, NaN];
var truthy = [];
//loop through array to get truthy
for (var i = 0; i < array3.length; i++) {
  if (array3[i]) {
    truthy.push(array3[i]);
  }
}
console.log(truthy);
//**Bonus**

//4. Return the `number` that is the average of all the numbers in the array.
var array4 = [10, 20, 40, 55, 88, 121, 62];
var sum = 0;
//loop through array to get values to add to sum
for (var i = 0; i < array4.length; i++) {
  sum += array4[i];
}
var average = sum / array4.length;
console.log(average);

//5. Return the `number` that is a duplicate in the following array.
var array5 = [1, 2, 3, 4, 2, 5, 6, 7];
var duplicate = 0;
//loop through array of numbers
for (var i = 0; i < array5.length; i++) {
  //loop through array of numbers again,
  //starting at one plus i to not check the numbers already checked
  for (var j = i + 1; j < array5.length; j++) {
      //check if there is a match
      if (array5[i] == array5[j]) {
          duplicate = array5[j];
      }
  }
}
console.log(duplicate);

