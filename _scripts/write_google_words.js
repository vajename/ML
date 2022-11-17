words = require("./google_words.json");
const fs = require("fs");

Object.keys(words).forEach((k) => {
  words[k].slice(1).forEach((w) => {
    w = w.replace("/", "-");
    w = w.split(" ").join("_");
    fs.writeFileSync(
      `./${w[0]}/${w}.md`,
      `---
layout: word
word: ${w}
---
    `
    );
  });
});
