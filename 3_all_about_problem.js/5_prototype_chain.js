// Prototype

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값
console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype, {
//   showHidden: true,
// });

// Circular Reference
console.log(IdolModel.prototype.constructor === IdolModel); // true => 같은 메모리 주소를 참조하고 있음
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yujin = new IdolModel("안유진", 2003);
console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true => 부모가 자동으로 Object로 설정됨

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yujin.toString()); // [object Object]
console.log(Object.prototype.toString()); // [object Object]
// yujin 객체는 Object.prototype을 상속받기 때문에
// Object.prototype의 기능을 전부 사용할 수 있음

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}

const yujin2 = new IdolModel2("안유진", 2003);
const wonyoung2 = new IdolModel2("장원영", 2004);

console.log(yujin2.sayHello());
console.log(wonyoung2.sayHello());
console.log(yujin2.sayHello === wonyoung2.sayHello); // false
// 같은 기능이지만 별개의 객체에 각각 중복해서 저장됨

console.log(yujin2.hasOwnProperty("sayHello"));

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

const yujin3 = new IdolModel3("안유진", 2003);
const wonyoung3 = new IdolModel3("장원영", 2004);

console.log(yujin3.sayHello());
console.log(wonyoung3.sayHello());
console.log(yujin3.sayHello === wonyoung3.sayHello); // true
// IdolModel3의 prototype에 함수를 정의하였기 때문에
// 두 인스턴스 객체는 동일한 함수를 상속받아 사용

console.log(yujin3.hasOwnProperty("sayHello")); // false -> yujin3에 존재하지 않음

// static
IdolModel3.sayStaticHello = function () {
  return "안녕하세요 저는 static method 입니다.";
};

console.log(IdolModel3.sayStaticHello());

// Overriding (프로퍼티 섀도잉)
function IdolModel4(name, yeae) {
  this.name = name;
  this.year = this.year;

  this.sayHello = function () {
    return "안녕하세요 저는 인스턴스 메서드입니다.";
  };
}

IdolModel4.prototype.sayHello = function () {
  return "안녕하세요 저는 prototype 메서드입니다.";
};

const yujin4 = new IdolModel4("안유진", 2003);
console.log(yujin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이(가) 인사를 합니다.`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}가 춤을 춥니다`;
  };
}

const gaeul = new IdolModel("가을", 2004);
const ray = new FemaleIdolModel("레이", 2004);

console.log(gaeul.__proto__);
console.log(gaeul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaeul) === IdolModel.prototype); // true

console.log(gaeul.sayHello());
console.log(ray.dance());
// console.log(ray.sayHello()); // 에러 발생

// Object.setPrototypeOf() - 인스턴스의 __proto__ 변경
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); // false -> ray의 __proto__를 변경했기 때문
console.log(ray.constructor === IdolModel); // true
console.log(gaeul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

// 함수의 prototype 변경
FemaleIdolModel.prototype = IdolModel.prototype;

const eseo = new FemaleIdolModel("이서", 2007);
console.log(Object.getPrototypeOf(eseo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
