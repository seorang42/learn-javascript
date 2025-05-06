/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
console.log(iveMembers.push("윤장호"));
console.log(iveMembers);
// push는 배열의 마지막에 값 추가 후 새 배열의 길이를 return

// pop()
console.log(iveMembers.pop());
console.log(iveMembers);
// 배열의 마지막 값을 제거 후 return

console.log("--------------------");

// shift()
console.log(iveMembers.shift());
console.log(iveMembers);
// shift는 배열의 첫 번째 값을 제거 후 반환

// unshift()
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);
// unshift는 배열의 첫 번째에 값을 추가 후 새 배열의 길이 반환

// splice()
console.log(iveMembers.splice(0, 3)); // 0번째부터 3개를 제거
console.log(iveMembers);

// push, pop, shift, unshift, splice는 원본을 변경하기 때문에 사용을 지양하는 추세

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);

// concat()
console.log(iveMembers.concat("윤장호")); // 새로운 배열을 반환
console.log(iveMembers); // 변경되지 않음

// slice()
console.log(iveMembers.slice(0, 3)); // 0번째부터 3번째 전까지의 새로운 배열을 반환
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

let iveMembers3 = [iveMembers];
console.log(iveMembers3);

console.log("--------------------");

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true -> 값 변경 시 원본 배열에 영향을 줌
console.log([...iveMembers] === iveMembers); // false

// join()
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort(), reverse();
// 오름차순
iveMembers.sort();
console.log(iveMembers); // 원본 값 변경

console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

/**
 * a, b를 비교했을 때
 * 1) a를 b보다 나중으로 정렬하려면 0보다 큰 숫자를 반환 -> 오름차순
 * 2) a를 b보다 앞으로 정렬하려면 0보다 작은 숫자를 반환 -> 내림차순
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

console.log("--------------------");

// map()
// 값을 순회하며 접근 후 변환하여 새로운 배열을 반환
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));
console.log(iveMembers);

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

// true 반환 시 반환값에 포함, false 반환 시 반환값에 미포함
console.log(numbers.filter((x) => x % 2 === 0)); // [8, 6]

// find()
// 값을 순회하며 조건을 검사하고 부합하는 첫 번째 값을 반환
console.log(numbers.find((x) => x % 2 === 0)); // 8

// findIndex()
// 값을 순회하며 조건을 검사하고 부합하는 첫 번째 index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce(콜백 함수, 초기값)
console.log(numbers.reduce((prev, next) => prev + next, 0));
