/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// string으로 명시적 변환
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + "";
console.log(typeof test, test);

console.log("98" + 2); // 982
console.log("98" * 2); // 196
console.log("98" - 2); // 96

console.log("--------------------");

console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

// number 타입으로 명시적 변환
console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1");

console.log("--------------------");

// Boolean 타입으로의 변환
console.log(!!"qawlgna"); // "" 안에 값이 있을 경우 true로 간주

console.log(!!""); // false
console.log(!!0); // false
console.log(!!"0"); // true
console.log(!!"false"); // true
console.log(!!false); // false
console.log(!!undefined); // flase
console.log(!!null); // false

console.log(!!{}); // object인 경우 항상 true
console.log(!![]); // true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우 (undefined, null)
 * 3) 0
 *
 * 인 경우
 * 모두 false를 반환한다
 */
