/**
 * Data Types
 *
 * 여섯 개의 Primitive Type과
 * 한 개의 Object 타입
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

// 1) Number
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log("---------------------");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("---------------------");

// 2) String
const name = "윤장호";
console.log(typeof name);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * 2-1) Template Literal
 *
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) backslash -> \\
 */
const newLine = "Hello\nWorld";
console.log(newLine);
const tab = "Hello\tWorld";
console.log(tab);
const backslash = "Hello\\World";
console.log(backslash);
const quotation = 'Hello"World';
console.log(quotation);

const templateLiteral = `Hello '"/
World`;
console.log(templateLiteral);
console.log(typeof templateLiteral);

const groupName = "아이브";
console.log(groupName + " 장원영");
console.log(`${groupName} 안유진`);
console.log("---------------------");

// 3) Boolean
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("---------------------");

/**
 * 4) undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 *
 * 직접 undefined로 값을 초기화 하는 것은 지양
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log("---------------------");

/**
 * 5) null
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로
 * 초기화할 때 사용
 */

let init = null;
console.log(init);
console.log(typeof init); // Object 타입으로 표시됨 (버그)
console.log("---------------------");

/**
 * 6) Symbol
 *
 * 유일무이한 값을 생성할 때 사용
 * 다른 원시타입과 다르게 Symbol 함수를 호출해서 사용
 */

const test1 = "1";
const test2 = "1";

console.log(test1 === test2); // true

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2); // false

/**
 * 7) Object
 *
 * Map : 키-밸류의 쌍으로 이루어져 있음
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);

// Array : 값을 리스트로 나열할 수 있는 object 타입

const iveMembersArray = ["안유진", "가을", "장원영", "레이", "리즈", "이서"];
console.log(iveMembersArray);

// index : 0부터 시작해서 1씩 증가
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = "윤장호";
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
 * ex) C
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론
 * JS => dynamic typing
 */
