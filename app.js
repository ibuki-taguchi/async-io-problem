"use strict";
const fs = require("fs");
const fileName = "./test.txt";
async function main() {
  for (let count = 0; count < 500; count++) {
    await fs.appendFile(fileName, "あ", "utf8", () => {});
    await fs.appendFile(fileName, "い", "utf8", () => {});
    await fs.appendFile(fileName, "う", "utf8", () => {});
    await fs.appendFile(fileName, "え", "utf8", () => {});
    await fs.appendFile(fileName, "お", "utf8", () => {});
    await fs.appendFile(fileName, "\n", "utf8", () => {});
  }
}
main();
