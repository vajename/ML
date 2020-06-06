words = require("./google_words.json");
const fs = require("fs");

Object.keys(words).forEach((k) => {
  words[k].slice(0,1).forEach((w) => {
    w = w.replace("/", "-");
    w = w.replace(" ", "_");
    fs.writeFileSync(
      `./${w[0]}/${w[0]}.njk`, // file
      `
      {%- for word in collections.${w[0].toUpperCase()} -%}
        <details>
          <summary><a href="{{word.url}}">{{ word.data.word }}</a></summary>
          {{word.templateContent}}
          <!-- <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p> -->
        </details>
      {%- endfor -%}
    `
    );
  });
});
