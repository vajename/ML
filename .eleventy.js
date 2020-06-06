module.exports = function(eleventyConfig) {


  eleventyConfig.addCollection("keyMustExistInData", function(collectionApi) {
    return collectionApi.getAll();
  });

  eleventyConfig.addPassthroughCopy({'_css': 'css'});


  return {
    passthroughFileCopy: true
  }
};