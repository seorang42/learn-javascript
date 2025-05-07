// Async / Await

const getPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("완료")
      reject("에러");
    }, 2000);
  });

async function runner() {
  try {
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(1);
    console.log(result3);
  } catch (e) {
    console.log("-----catch e-----");
    console.log(e);
  } finally {
    console.log("-----finally-----");
  }
}

runner();
console.log("실행 끝");
// 먼저 실행 => await 시 스레드가 막히지 않음

// await는 Promise에서만 사용할 수 있음
