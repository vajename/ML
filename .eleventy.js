module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("keyMustExistInData", function (collectionApi) {
    return collectionApi.getAll();
  });

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
