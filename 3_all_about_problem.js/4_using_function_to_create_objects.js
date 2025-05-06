// Using function to create objects

function IdolModel(name, year) {
  // console.log(new.target); // [Function: IdolModel] / undefined

  // new를 사용하지 않아 new.target이 undefined인 경우를 필터링
  if (!new.target) {
    return new IdolModel(name, year);
    // 이후 new를 사용하지 않아도 this를 객체로 매핑
  }

  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

// this가 IdolModel에 매핑
const yujin = new IdolModel("안유진", 2003);
console.log(yujin);
// console.log(yujin.dance());

// this가 global에 매핑
const yujin2 = IdolModel("안유진", 2003);
console.log(yujin2); // undefined

// console.log(global.name); // 안유진
// IdolModel을 new를 통해 생성하지 않고 함수형으로 생성하였을 경우
// this가 global을 가리켜 global.name에 변수를 저장

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

// const yujin3 = new IdolModelArrow("안유진", 2003);
// 에러 발생 - 화살표 함수는 생성자 함수로 사용 불가
