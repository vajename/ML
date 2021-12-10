/// Data
const alphabet = require("./src/_data/alphabet").alphabet;
/// Filters
const searchFilter = require("./src/_includes/filters/searchFilter");
const { toFaDigits } = require("./src/utils/index");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });

  /// Search indexing
  eleventyConfig.addFilter("search", searchFilter);
  eleventyConfig.addFilter("toFaDigits", toFaDigits);

  eleventyConfig.addCollection("words", collection => {
    return [...collection.getFilteredByGlob("./words/**/*.md")];
  });


  alphabet.forEach(l => eleventyConfig.addCollection(l, collection => {
    return [...collection.getFilteredByGlob(`./words/${l}/*.md`)];
  }));

  // TODO: When v1 is ready, use:
  // eleventyConfig.addGlobalData("alphabet", alphabet);


  return {
    passthroughFileCopy: true,
    dir: {
      input: "words",
      output: "public",

      // ⚠️ These values are both relative to your input directory.
      data: "../src/_data",
      includes: "../src/_includes",
      // layouts: "../src/_layouts"
    },
  };
};
