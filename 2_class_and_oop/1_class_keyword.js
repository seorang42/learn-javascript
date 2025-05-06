// Class Keyword
class IdolModel {
  // JS에서는 constructor에서의 정의로 생략 가능
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// constructor - 생성자

const yujin = new IdolModel("안유진", 2003);
console.log(yujin);
const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);
const ray = new IdolModel("레이", 2004);
console.log(ray);
const wonyoung = new IdolModel("장원영", 2004);
console.log(wonyoung);
const liz = new IdolModel("리즈", 2004);
console.log(liz);
const eseo = new IdolModel("이서", 2007);
console.log(eseo);

console.log(yujin.name);
console.log(yujin.year);

console.log(yujin.sayName());
console.log(wonyoung.sayName());

console.log(typeof IdolModel); // function
console.log(typeof yujin); // object
