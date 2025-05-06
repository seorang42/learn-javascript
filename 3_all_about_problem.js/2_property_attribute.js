/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 가지고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 가지고 있지 않지만, 다른 값을 가져오거나
 *                  설정할 때 호출되는 함수로 구성된 프로퍼티
 *                  예를 들면, getter와 setter
 */

const yujin = {
  name: "안유진",
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin, "year"));

/**
 * 데이터 프로퍼티의 경우
 *
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부. false로 설정 시 프로퍼티 값을 수정할 수 없음
 * 3) enumerable - 열거가 가능한지 여부. for ... in Loop 등을 사용할 수 있으면 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰터의 재정의가 가능한지 여부를 판단
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능
 */

console.log(Object.getOwnPropertyDescriptor(yujin, "name"));
console.log(Object.getOwnPropertyDescriptors(yujin));

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
console.log(yujin2.age);

yujin2.age = 32;
console.log(yujin2.age);
console.log(yujin2.year);

/**
 * 액세스 프로퍼티의 경우
 *
 * 1) get - get 함수
 * 2) set - set 함수
 * 3) enumerable - 열거가 가능한지 여부. for ... in Loop 등을 사용할 수 있으면 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰터의 재정의가 가능한지 여부를 판단
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능
 */

console.log(Object.getOwnPropertyDescriptor(yujin2, "age"));

Object.defineProperty(yujin2, "height", {
  value: 172,
  // 기본값 - false
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

// writable
yujin2.height = 180;
console.log(yujin2); // 180

Object.defineProperty(yujin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

yujin2.height = 172;
console.log(yujin2); // 180

// enumerable
console.log(Object.keys(yujin2));
for (let key in yujin2) {
  console.log(key);
}

Object.defineProperty(yujin2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "name"));
console.log(Object.keys(yujin2)); // name 제외
for (let key in yujin2) {
  console.log(key);
}
console.log(yujin2); // name 제외
console.log(yujin2.name); // 값은 여전히 존재
// enumerable이 false인 경우 key가 열거 대상에 포함되지 않음

// configurable
Object.defineProperty(yujin2, "height", {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

// Object.defineProperty(yujin2, "height", {
//   enumerable: false,
// });
// 에러 발생 - configurable이 false이기 때문에 변경 불가

// 단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능
Object.defineProperty(yujin2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

Object.defineProperty(yujin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

// Object.defineProperty(yujin2, "height", {
//   writable: true,
// });
// 에러 발생 - writable이 false이기 때문에 변경 불가
