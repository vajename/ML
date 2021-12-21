const svgSprite = require("eleventy-plugin-svg-sprite");
const dotenv = require('dotenv');
const fs = require('fs');

const markdownIt = require("markdown-it");
const implicitFigures = require('markdown-it-image-figures');


const localConfigFile = '.env.local'
if (fs.existsSync(localConfigFile)) {
  const envConfig = dotenv.parse(fs.readFileSync(localConfigFile))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

/// Data
const alphabet = require("./src/_data/alphabet");
/// Filters
const searchFilter = require("./src/_includes/filters/searchFilter");
// const { blameLast, blameAll } = require("./src/_includes/filters/blame");
const { toFaDigits, formatTime, getAutherByEmail, ifNoValue, getFileContributors, getFileContributorsByAPI } = require("./src/utils/index");

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
  if (process.env.NODE_ENV !== "production") {
    eleventyConfig.addNunjucksShortcode("getFileContributors", () => '###');
    eleventyConfig.addNunjucksShortcode("getFileContributorsAPI", () => '###');
  }
  else {
    eleventyConfig.addNunjucksAsyncShortcode("getFileContributors", getFileContributors);
    eleventyConfig.addNunjucksAsyncShortcode("getFileContributorsAPI", async path => {
      const contribs = await getFileContributorsByAPI(path);
      return `
      <ul id="contributors">
        ${contribs.map(i => `
          <li>
            <a href="${i.url}" target="_blank" rel="noreferrer">
              <img src="${i.avatar_url}" />
            </a>
          </li>
        `).join('')}
      </ul>`
    });
  }



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

  /******* Markdown Options  *****/
  const options = {
    html: true
  };
  const markdownLib = markdownIt(options).use(implicitFigures, { figcaption: true });
  eleventyConfig.setLibrary("md", markdownLib);


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
