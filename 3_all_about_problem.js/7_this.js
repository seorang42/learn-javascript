/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에
 * 함수의 상위 스코프가 정의 시점에 평가된다.
 *
 * ***** 하지만 this 키워드는 바인딩이
 * 객체가 생성되는 시점에 결정된다 *****
 */

// 일반 함수
const testFunction = function () {
  return this;
};

console.log(testFunction()); // global에 매핑 (웹에서는 window)
console.log(testFunction() === global); // true
// 일반 함수에서 this는 global에 매핑

// 객체 내 메소드
const yujin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};
console.log(yujin.sayHello()); // this는 객체에 바인딩
// 객체 내 메소드의 this는 객체에 매핑

// 생성자 함수
function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const yujin2 = new Person("안유진", 2003);
console.log(yujin2.sayHello());
// 생성자 함수를 통해 new 키워드로 인스턴스 생성 시
// this는 객체에 매핑

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }

  return dance2();
};
console.log(yujin2.dance()); // undefined이 춤을 춥니다.
// 메소드를 객체의 가장 상위에 선언하면 this가 대상 객체로 매핑이 되지만
// 그 외의 위치에 함수를 선언하게 되면 무조건 global에 매핑됨

/**
 * this 키워드가 어떤 것을 가리킬까?
 *
 * 1) 일반 함수를 호출할 때
 * this가 최상위 객체(global 또는 window)를 가리킨다.
 *
 * 2) 메서드로 호출할 때
 * 호출된 객체를 가리킨다.
 *
 * 3) new 키워드를 사용해서 객체를 생성했을 때
 * 해당 객체를 가리킨다.
 *
 * 2번과 3번이 아닌 경우 모두 최상위 객체를 가리킨다.
 */

/**
 * 원하는 곳에 this를 매핑하는 방법
 *
 * 1) call()
 * 함수의 this를 특정 객체에 매핑 후 즉시 실행
 * 콤마(,)를 기반으로 argument를 순서대로 입력 받음
 *
 * 2) apply()
 * 함수의 this를 특정 객체에 매핑 후 즉시 실행
 * argument를 리스트로 입력 받음
 *
 * 3) bind()
 * 함수의 this를 특정 객체에 매핑 후 함수 반환 (즉시 실행 X)
 * 콤마(,)를 기반으로 argument를 순서대로 입력 받음
 */

function returnName() {
  return this.name;
}

console.log(returnName()); // undefined

const yujin3 = {
  name: "안유진",
};

console.log(returnName.call(yujin3));
console.log(returnName.apply(yujin3));
// returnName 함수의 this를 yujin3에 매핑하여 실행

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yujin3, 3, 4, 5));
console.log(multiply.apply(yujin3, [3, 4, 5]));

const laterFunc = multiply.bind(yujin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());
