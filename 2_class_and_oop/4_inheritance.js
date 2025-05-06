// Inheritance

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yujin = new FemaleIdolModel("안유진", 2003);
console.log(yujin);

const jimin = new MaleIdolModel("지민", 1995);
console.log(jimin);

console.log(yujin.dance());
console.log(yujin.name);

console.log(jimin.sing());
console.log(jimin.year);

// console.log(yujin.sing()); 에러 발생
// 다른 자식끼리는 프로퍼티와 메소드 공유 X

const jh = new IdolModel("윤장호", 2000);
console.log(jh);

console.log(jh.name);
// console.log(jh.dance()); 에러 발생
// => 부모 -> 자식 (O) / 자식 -> 부모 (X)

console.log(yujin instanceof IdolModel); // true
console.log(yujin instanceof FemaleIdolModel); // true
console.log(yujin instanceof MaleIdolModel); // false
console.log("----------------------");
console.log(jimin instanceof IdolModel); // true
console.log(jimin instanceof FemaleIdolModel); // false
console.log(jimin instanceof MaleIdolModel); // true
console.log("----------------------");
console.log(jh instanceof IdolModel); // true
console.log(jh instanceof FemaleIdolModel); // false
console.log(jh instanceof MaleIdolModel); // false
