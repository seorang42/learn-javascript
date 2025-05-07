/**
 * Closure
 *
 * A closure is the combination of a function and the lexical
 * environmentwithin witch that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다"
 *
 * "상위 함수보다 하위 함수가 더 오래 살아 있는 경우를 클로저라고 한다."
 */

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(number); // 에러 발생
// console.log(getNumber()); // 5
// 값을 반환하기 때문에 innerGetNumber가 먼저 콜스택에서 사라짐

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber();
// getNumber()가 콜스택에서 사라짐

console.log(runner);
console.log(runner());

// 1) 데이터 캐싱
function badFunction(newNum) {
  var number = 10 * 10; // 매우 오래 걸리는 작업으로 가정

  return number * newNum;
}

console.log(badFunction(10));
console.log(badFunction(20));
console.log(badFunction(30));
// 실행할 때마다 오래 걸리는 작업을 수행

function cacheFunction() {
  var number = 10 * 10; // 매우 오래 걸리는 작업으로 가정

  function innerCacheFunction(newNum) {
    return number * newNum;
  }

  return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10)); // 1000
console.log(runner2(20)); // 2000
// 오래 걸리는 작업을 1번만 수행 후 클로저에서 기억

// 2) 반복적으로 값을 변경해야 할 경우
function cacheFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
// 클로저 내부에 기억된 값에 접근하여 값을 변경

// 3) 정보 은닉
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yujin = new Idol("안유진", 2003);
console.log(yujin.sayNameAndYear()); // 안유진 ... 2003

console.log(yujin.name); // 안유진
console.log(yujin._year); // undefined - 외부에서 접근할 수 없음
