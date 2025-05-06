// Super and Override

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  // 생성자 Overriding
  constructor(name, year, part) {
    super(name, year); // 부모 클래스를 의미 => IdolModel(name, year)
    this.part = part;
  }

  // 메소드 Overriding
  sayHello() {
    // 부모 클래스의 프로퍼티는 super.name이 아닌 this.name 사용
    // return `안녕하세요 ${this.name}입니다. ${this.part}을 맡고 있습니다.`;

    // 부모 클래스의 메소드는 super 키워드 사용
    return `${super.sayHello()} ${this.part}을 맡고 있습니다.`;
  }
}

const yujin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yujin);

const wonyoung = new IdolModel("장원영", 2002);
console.log(wonyoung);
console.log(wonyoung.sayHello());
console.log(yujin.sayHello());
