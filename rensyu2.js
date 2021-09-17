"use strict";
const fs = require("fs");
const fileName = "./test.txt";
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, "utf8", () => resolve());
  });
}
function main() {
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 500; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, "おはようございます\n"); // thenの中でreturnがあった場合は次のthenの引数になる
        // return に Promiseを返した後は、Promiseの中身を実行した後に、resolveが返ってきた場合のみ次のthenの処理に入って、
        // resolveの中身を引数にするというルールになります。
      })
      .then(() => {
        return appendFilePromise(fileName, "こんにちは\n");
      })
      .then(() => {
        return appendFilePromise(fileName, "こんばんは\n");
      });
  }
}
main();

// 解説
new Promise((resolve) => {
  resolve();
})
  .then(() => {
    return new Promise((resolve) => {
      resolve(1);
    }); // resolveの中身に1を入れる
  })
  .then((n) => {
    // 1が入る
    console.log(n); // 1
    return new Promise((resolve) => {
      resolve(2);
    }); // resolveの中身に2を入れる
  })
  .then((n) => {
    // 2が入る
    console.log(n); // 2
  });
