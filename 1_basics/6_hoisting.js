/**
 * Hoisting
 */

console.log("Hello");
console.log("World");

// console.log(name);
// var name = "윤장호";
// console.log(name);
// 위의 코드가 아래의 코드처럼 작동
// var name;
// console.log(name);
// name = "윤장호";
// console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것'처럼' 느껴지는 현상
 */

console.log(name);
let name = "윤장호";
// ReferenceError: Cannot access 'name' before initialization
// name 선언 하지 않을 시에는 ReferenceError: name is not defined
// => 따라서 let, const도 호이스팅이 발생하지만 접근 불가능
