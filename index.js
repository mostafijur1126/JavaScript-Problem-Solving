/* 
const sentences =
  "alice and bob love leetcode i think so too, this is great thanks very much";

const newSentence = sentences.split(" ");

let bigWord = newSentence[0];

for (let i = 0; i < newSentence.length; i++) {
  const currentWord = newSentence[i];
  if (currentWord.length > bigWord.length) {
    bigWord = currentWord;
  }
}

console.log(bigWord);
*/

// const num = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// document.write(sum);

const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
// document.write(twoSum(nums, target));

const numbers = [1, 2, 2, 3, 4, 4, 5];
let k = 1;
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] !== numbers[i - 1]) {
    numbers[k] = numbers[i];
    k++;
  }
}
// document.write(numbers);

//anagram
const name1 = "listen";
const name2 = "silent";
const result1 = name2.split("").sort().join("");
const result = name1.split("").sort().join("");
if (result === result1) {
  console.log("Anagram");
}

//ransome note
const ransomNote = "a";
const magazine = "b";

var canConstruct = function (ransomNote, magazine) {
  let count = {};
  for (let i = 0; i < magazine.length; i++) {
    const ch = magazine[i];
    count[ch] = (count[ch] || 0) + 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote[i];
    if (!count[ch]) {
      return false;
    }
    count[ch]--;
  }
  return true;
};
console.log(canConstruct(ransomNote, magazine));
