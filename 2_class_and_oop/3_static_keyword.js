// Static Keyword

// class IdolModel {
//   name;
//   year;
//   // 인스턴스가 아닌 클래스 자체에 귀속되는 변수
//   static groupName = "아이브";

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return "아이브";
//   }
// }

// const yujin = new IdolModel("안유진", 2003);
// console.log(yujin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

// factory constructor
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 인스턴스 생성 시 방법을 다양화할 수 있음
  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const yujin2 = IdolModel.fromObject({ name: "안유진", year: 2003 });
console.log(yujin2);

const wonyoung = IdolModel.fromList(["장원영", 2003]);
console.log(wonyoung);
