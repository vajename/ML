const searchFilter = require("./words/_includes/filters/searchFilter");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });

  /// Search indexing
  eleventyConfig.addFilter("search", searchFilter);

  eleventyConfig.addCollection("words", collection => {
    return [...collection.getFilteredByGlob("./words/**/*.md")];
  });

  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  alphabet.forEach(l => eleventyConfig.addCollection(l, collection => {
    return [...collection.getFilteredByGlob(`./words/${l}/*.md`)];
  }))


  return {
    passthroughFileCopy: true,
    dir: {
      input: "words",
      output: "public",
    },
  };
};
