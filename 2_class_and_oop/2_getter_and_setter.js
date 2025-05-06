// Getter and Setter

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  // property가 private일 때 주로 사용
  set setName(name) {
    this.name = name;
  }
  // 정의한 값이 변경되기 때문에 이뮤터블 프로그래밍에서는 선호되지 않음
}

const yujin = new IdolModel("안유진", 2003);
console.log(yujin);
console.log(yujin.nameAndYear);

yujin.setName = "장원영";
console.log(yujin);

class IdolModel2 {
  #name; // ES7 이상에서 사용 가능
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yujin2 = new IdolModel2("안유진", 2003);
console.log(yujin2); // year만 표시
console.log(yujin2.name); // undefined -(getter 사용)-> 안유진

yujin2.name = "장원영";
console.log(yujin.name);
