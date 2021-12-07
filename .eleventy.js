const searchFilter = require("./words/_includes/filters/searchFilter");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });

  /// Search indexing
  eleventyConfig.addFilter("search", searchFilter);

  eleventyConfig.addCollection("words_to_index", collection => {
    return [...collection.getFilteredByGlob("./words/**/*.md")];
  });


  return {
    passthroughFileCopy: true,
    dir: {
      input: "words",
      output: "public",
    },
  };
};
