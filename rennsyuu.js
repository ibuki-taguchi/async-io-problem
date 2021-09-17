"use strict";
const fs = require("fs");
const fileName = "./test.txt";

function promise1(aisatu) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, aisatu, "utf-8", () => resolve());
    // console.log("a");
    // console.log(aisatu);
    // resolve();
    // console.log("b");
  });
}

// promiseのチェインではreturn then
async function main() {
  for (let count = 0; count < 30; count++) {
    await promise1("おはよ");
    await promise1("konichiha");
    await promise1("こんばんは");
    await promise1("\n");
  }
}
main();
