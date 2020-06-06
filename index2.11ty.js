const alphabet = Array.from(
  new Set([..."a quick brown fox jumps over the lazy dog"])
)
  .sort()
  .slice(1);

module.exports = function ({ collections }) {
  const alphabetC = alphabet.map((l) => l.toUpperCase());

  a = {};
  alphabetC.forEach(c => {
    if (c in collections) {
      for (wordObj of collections[c]) {
        // const picked = (({ url, data, templateContent }) => {
        //   return { word: data.word, url, templateContent }
        // } )(wordObj);
        if (!(c in a)) {
          // console.log(wordObj);
          // console.log('-------------------------------------');
          a[c] = {}
        }
        // a[c][wordObj.data.word] = picked;
        a[c][wordObj.data.word] = {
          url: wordObj.url,
          word: wordObj.data.word,
          content: wordObj.template.frontMatter.content,
        };
      }
    }
    else {
      // console.log(`Char ${c} is empty`);
    }
  });

  // console.log(collections['A']);
  
  return JSON.stringify(a, null, 4);

};
