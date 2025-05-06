// Operator (연산자)

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

console.log("----------------");

console.log(10 * (10 + 10));

// 증감 연산자
let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log("----------------");

// 증감 연산자의 위치
let result = 1;
console.log(result);

result = number++;
console.log(result, number); // 1 2

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

// 숫자 타입이 아닌 타입에 +, - 사용
let sample = "99";

console.log(+sample);
console.log(typeof +sample);
number;

console.log(sample);
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = "윤장호";
console.log(+sample); // NaN : Not a Number

sample = "99";
console.log(-sample); // -99, type : Nubmer

/** 할당 연산자 (assignment operator) */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == ""); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true

console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === ""); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === "1"); // false

console.log("----------------");

console.log(5 != 5); // false
console.log(5 != "5"); // false
console.log(0 != ""); // false
console.log(true != 1); // false
console.log(false != 0); // false
console.log(true != "1"); // false

console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(0 !== ""); // true
console.log(true !== 1); // true
console.log(false !== 0); // true
console.log(true !== "1"); // true

console.log("----------------");

// 대소 관계 비교 연산자
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

// 삼항 조건 연산자 (ternary operator)
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("----------------");

/**
 * 논리 연산자
 *
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("----------------");

// || 조건은 하나만 true여도 true를 반환
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("----------------");

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2); // false

console.log(10 > 1 || 20 > 2); // true
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false

console.log("----------------");

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true || "아이브"); // true
console.log(false || "아이브"); // 아이브
console.log(false && "아이브"); // false
console.log(true && "아이브"); // 아이브

console.log(true && true && "아이브"); // 아이브
console.log(true && false && "아이브"); // false

// 지수 연산자
console.log(2 ** 2); // 4
console.log(10 ** 3); // 1000

// null 연산자 (??)
let name;
console.log(name);

name = name ?? "윤장호";
console.log(name); // 윤장호
// 왼쪽 값이 null이거나 undefined일 때 우측 값 반환

name = name ?? "아이브";
console.log(name); // 윤장호

let name2;
name2 ??= "윤장호";
console.log(name2);
