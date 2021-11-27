module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "words",
      output: "public",
    },
  };
};
