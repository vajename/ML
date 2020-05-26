module.exports = function(eleventyConfig) {


  eleventyConfig.addCollection("keyMustExistInData", function(collectionApi) {
    return collectionApi.getAll();
  });





};