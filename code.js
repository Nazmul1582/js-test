// ================== Solution - 1 =========================

function fec(num) {
  Number(num);
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(fec(4)); // output: 24
console.log(fec("8")); // output: 40320

// ================== Solution - 2 =========================

function QuestionsMarks(str) {
  let res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        if (str.slice(i + 1, j).split("?").length - 1 === 3) {
          res = true;
        } else {
          res = false;
        }
      }
    }
  }
  return res;
}
console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // true
console.log(QuestionsMarks("aa6?9")); // false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // true

// ================== Solution - 3 =========================

function LongestWord(sen) {
  let arr = sen.match(/[a-z0-9]+/gi);
  let res = arr.sort((a, b) => b.length - a.length);
  return res[0];
}

console.log(LongestWord("Hello world123 567")); // output: world123
console.log(LongestWord("fun&!! time")); // output: time
console.log(LongestWord("I love dogs")); // output: love
