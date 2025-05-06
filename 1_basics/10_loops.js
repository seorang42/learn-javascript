/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("--------------------");

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

console.log("--------------------");

// *를 이용해서 6x6의 정사각형을 출력해라
for (let i = 0; i < 6; i++) {
  let line = "";
  for (let j = 0; j < 6; j++) {
    line += "*";
  }
  console.log(line);
}

// for ... in Loop
const yujin = {
  name: "안유진",
  year: 2003,
  group: "아이브",
};

console.log("--------------------");

// object에서 for ... in 사용 시 key값 출력
for (let key in yujin) {
  console.log(key);
}

const iveMembers = ["안유진", "레이", "장원영", "가을", "리즈", "이서"];

console.log("--------------------");

// array에서 for ... in 사용 시 index값 출력
for (let index in iveMembers) {
  console.log(`${index} : ${iveMembers[index]}`);
}

// for ... of Loop
for (let value of iveMembers) {
  console.log(value);
}

// While
let number = 0;
while (number < 10) {
  number++;
}

console.log(number);

// do ... while
number = 0;

do {
  number++;
} while (number < 10);

console.log(number);

console.log("--------------------");

// break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("--------------------");

number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }

  number++;
  console.log(number);
}

console.log("--------------------");

// continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

number = 0;

console.log("--------------------");

while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
