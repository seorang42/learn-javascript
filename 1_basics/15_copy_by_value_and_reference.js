/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

console.log("--------------------");

clone += " 안유진입니다.";
console.log(original);
console.log(clone);

let originalObj = {
  name: "안유진",
  group: "아이브",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("--------------------");

originalObj["group"] = "아이즈원";
console.log(originalObj);
console.log(cloneObj); // group: "아이즈원"

console.log(original === clone); // false
console.log(originalObj === cloneObj); // true

originalObj = {
  name: "윤장호",
  group: "가천대학교",
};
cloneObj = {
  name: "윤장호",
  group: "가천대학교",
};
console.log(originalObj === cloneObj); // false -> 값이 같다고 true가 아님

const yujin1 = {
  name: "안유진",
  group: "아이브",
};
const yujin2 = yujin1;
const yujin3 = {
  name: "안유진",
  group: "아이브",
};

console.log(yujin1 === yujin2); // true
console.log(yujin1 === yujin3); // false
console.log(yujin2 === yujin3); // false

// Spread Operator
const yujin4 = {
  ...yujin3,
};
console.log(yujin4);

// Spread Operator 사용 시 Copy by Value
console.log(yujin4 === yujin3); // false

const yujin5 = {
  year: 2003,
  ...yujin3,
};
console.log(yujin5);

const yujin6 = {
  name: "윤장호",
  ...yujin3,
};
console.log(yujin6);

const yujin7 = {
  ...yujin3,
  name: "윤장호",
};
console.log(yujin7);

const numbers = [1, 3, 5];
const number2 = [...numbers, 10];
console.log(number2);
