// Scope

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

// levelOne(); // 20

function levelOne() {
  var numberOne = 40;

  console.log(numberOne);
}

// levelOne(); // 40

// console.log(numberOne); // 20

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne); // 20
// console.log(numberTwo); // 에러 발생

/**
 * JS -> Lexical Scope 사용
 * : 선언된 위치가 상위 스코프를 정한다.
 *
 * <->
 * Dynamic Scope : 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne(); // 3
// functionTwo는 functionOne 밖에 선언되었기 때문에
// functionOne의 numberThree를 사용하지 않고
// 전역의 numberThree를 사용

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`); // 10
// for, while, if 등에서 var 사용 시 새로운 스코프를 만들어내지 않음
// 따라서 전역 스코프에 적용되어 i를 0부터 10까지 변경하게 됨

i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`); // 999
// let과 const는 block level scope도 만들어낼 수 있기 때문에
// for, while, if에서도 스코프를 만들어내
// 전역 변수에 영향을 주지 않음

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
