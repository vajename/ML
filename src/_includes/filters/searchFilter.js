const elasticlunr = require("elasticlunr");
// elasticlunr.clearStopWords();

module.exports = function (collection) {
  // what fields we'd like our index to consist of
  var index = elasticlunr(function () {
    this.addField("word");
    this.addField("translation");
    this.addField("tags");
    this.setRef("id");
  });


  // loop through each page and add it to the index
  collection.forEach((page) => {
    index.addDoc({
      id: page.url,
      word: page.template.frontMatter.data.word,
      translation: page.template.frontMatter.data.translation,
      tags: page.template.frontMatter.data.tags,
    });
  });

  return index.toJSON();
};