/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = "윤장호";
console.log(name);

var age = 32;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = "안유진";
console.log(ive);

const nmixx = "엔믹스";
console.log(nmixx);

// const는 재할당 불가능
// nmixx = "규진";

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것
 * 2) 할당
 */

let girlFriend; // undefined로 초기화
console.log(girlFriend);

// const는 값을 초기화하며 선언해야 함
// const constant;
