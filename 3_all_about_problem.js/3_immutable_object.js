// Immutable Object

const yujin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yujin);

// Extensible - 확장이 가능한지에 대한 여부
console.log(Object.isExtensible(yujin)); // true
yujin.position = "vocal";
console.log(yujin);

Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin)); // false
yujin.groupName = "아이브";
console.log(yujin); // 추가되지 않음 (에러 발생 X)

delete yujin.position;
console.log(yujin); // 삭제는 가능

console.log("-------------------------");

// Seal - 객체를 봉인
const yujin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yujin2);

console.log(Object.isSealed(yujin2)); // false
Object.seal(yujin2);
console.log(Object.isSealed(yujin2)); // true

yujin.groupName = "아이브";
console.log(yujin2); // 추가되지 않음 (에러 발생 X)

delete yujin.name;
console.log(yujin2); // 삭제되지 않음 (에러 발생 X)

Object.defineProperty(yujin2, "name", {
  value: "윤장호",
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "name")); // 변경됨

Object.defineProperty(yujin2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "name")); // 변경됨
/**
 * seal -> configurable을 false로 변경
 * => 즉, 속성 추가 및 삭제 불가능 + configurable: false;
 *
 * 따라서 writable이 true일 때 value를 변경하는 것과
 * writable을 false로 변경하는 것은 가능
 */

/**
 * Freezed - 객체를 동결
 *
 * 읽기 외에 모든 기능을 불가능하게 만듦
 */

const yujin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(yujin3)); // false

Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3)); // true

yujin3.groupName = "아이브";
console.log(yujin3);

delete yujin3.name;
console.log(yujin3);

// Object.defineProperty(yujin3, "name", {
//   value: "윤장호",
// });
// 에러 발생

console.log(Object.getOwnPropertyDescriptor(yujin3, "name"));
// freeze시 enumerable을 제외한 모든 것을 false로 변경

const yujin4 = {
  name: "안유진",
  year: 2003,
  wonyoung: {
    name: "장원영",
    year: 2004,
  },
};

Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4)); // true
console.log(Object.isFrozen(yujin4.wonyoung)); // false - 하위 객체에는 영향 X
