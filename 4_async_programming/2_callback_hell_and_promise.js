// Callback

function waitAndRun() {
  setTimeout(() => {
    console.log("끝");
  }, 2000);
}

// waitAndRun();

// Callback Hell
function waitAndRun2() {
  setTimeout(() => {
    console.log("1번 콜백 끝");
    setTimeout(() => {
      console.log("2번 콜백 끝");
      setTimeout(() => {
        console.log("3번 콜백 끝");
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

// Promise
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료");
  }, 2000);
});

// timeoutPromise.then((res) => {
//   console.log("-----then-----");
//   console.log(res);
// });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (xxx) {
      //   resolve("성공");
      // } else {
      //   reject("에러");
      // }
      resolve("완료");
    }, seconds * 1000);
  });

// getPromise(1)
//   .then((res) => {
//     console.log("-----first then-----");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("-----first catch-----");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("-----finally-----");
//   });

// 여러 개의 Promise를 동시에 실행 후 가장 마지막 결과 이후 배열로 반환
Promise.all([getPromise(1), getPromise(4), getPromise(1)]).then((res) => {
  console.log(res);
});
// 4초 뒤에 ["완료", "완료", "완료"]
