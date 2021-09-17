"use strict";

new Promise((resolve) => {
  let a = 0;
  a = a + 1;
  a = a + 1;
  if (a === 2) {
    resolve("aaaaa");
  }
}).then((test) => {
  new Promise((resolve) => {
    console.log("2kaime");
    resolve(test);
  }).then((test2) => {
    new Promise((resolve) => {
      console.log("3kaime");
      resolve(test);
    }).then((www) => console.log(`aaaa${www}`));
  });
});

// testPromise.catch(console.log("catch!!!"));
// console.log("promiseするよ");
// testPromise.then(console.log("promiseした"));
