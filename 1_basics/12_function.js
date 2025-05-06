// function -> 함수

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3을
 * string으로 변환해서 반환 받고 싶다면?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY 원칙
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}

// calculate();

// var와 같이 덮어쓰기 가능
function calculate(number) {
  // number => parameter
  console.log((((number * 10) / 2) % 3).toString());
}

calculate(3); // 3 => argument
calculate(5);

/**
 * 함수에서 입력 받는 값에 대한 정의를 Parameter라고 한다
 *
 * 실제 입력하는 값은 Argument라고 한다
 */

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(2, 4);
multiply(2);

console.log("--------------------");

// 반환(return) 받기
function multiply(x, y) {
  return x * y;
}

// 반환을 통해 함수 안에서만 계산되던 내용을 외부에서 사용할 수 있게 됨
const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

// Arrow 함수
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 6));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(6, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log("--------------------");
console.log(multiplyThree(4, 5, 6));

// 무한하게 파라미터를 받는 방법
const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// 즉시 실행 함수
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true => 함수는 Object이다
