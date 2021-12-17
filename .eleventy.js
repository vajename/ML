const svgSprite = require("eleventy-plugin-svg-sprite");

/// Data
const alphabet = require("./src/_data/alphabet");
/// Filters
const searchFilter = require("./src/_includes/filters/searchFilter");
const blame = require("./src/_includes/filters/blame");
const { toFaDigits, formatTime, getAutherByEmail, ifNoValue } = require("./src/utils/index");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(svgSprite, {
    path: "./assets/s",
  });


  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });

  /// Search indexing
  eleventyConfig.addFilter("toFaDigits", toFaDigits);
  eleventyConfig.addFilter("formatTime", formatTime);
  eleventyConfig.addFilter("ifNoValue", ifNoValue);
  eleventyConfig.addFilter("getAutherByEmail", getAutherByEmail);
  eleventyConfig.addFilter("search", searchFilter);
  if (process.env.NODE_ENV !== "production") {
    eleventyConfig.addFilter("blame", () => ({ email: 'someone@mail', time: new Date() }));
  }
  else
    eleventyConfig.addNunjucksAsyncFilter("blame", blame);

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
