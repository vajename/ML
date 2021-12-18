const svgSprite = require("eleventy-plugin-svg-sprite");

/// Data
const alphabet = require("./src/_data/alphabet");
/// Filters
const searchFilter = require("./src/_includes/filters/searchFilter");
const { blameLast, blameAll } = require("./src/_includes/filters/blame");
const { toFaDigits, formatTime, getAutherByEmail, ifNoValue, getFileContributors } = require("./src/utils/index");

module.exports = function (eleventyConfig) {

  /******* PLUGINS  *****/
  eleventyConfig.addPlugin(svgSprite, {
    path: "./assets/s",
  });

  /******* FILTERS  *****/
  eleventyConfig.addFilter("toFaDigits", toFaDigits);
  eleventyConfig.addFilter("formatTime", formatTime);
  eleventyConfig.addFilter("ifNoValue", ifNoValue);
  eleventyConfig.addFilter("getAutherByEmail", getAutherByEmail);
  eleventyConfig.addFilter("search", searchFilter);
  // if (process.env.NODE_ENV !== "production")
  //   eleventyConfig.addFilter("blame", () => ({ email: 'someone@mail', time: new Date() }));
  // else
  //   eleventyConfig.addNunjucksAsyncFilter("blame", blameAll);


  /******* SHORTCODES  *****/
  if (process.env.NODE_ENV !== "production")
    eleventyConfig.addNunjucksShortcode("getFileContributors", () => "###");
  else
    eleventyConfig.addNunjucksAsyncShortcode("getFileContributors", getFileContributors);


  /******* COLLECTIONS  *****/
  eleventyConfig.addCollection("words", collection => {
    return [...collection.getFilteredByGlob("./words/**/*.md")];
  });
  alphabet.forEach(l => eleventyConfig.addCollection(l, collection => {
    return [...collection.getFilteredByGlob(`./words/${l}/*.md`)];
  }));

  /******* DATA  *****/
  // v+1:
  // eleventyConfig.addGlobalData("alphabet", alphabet);

  /******* PASSTHROUGH  *****/
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });


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
