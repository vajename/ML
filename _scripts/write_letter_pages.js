const fs = require('fs');

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
letters = letters.substring(1);

for (letter of letters) {
  const content = `
  <link rel="stylesheet" href="/assets/index.css" />

{%- for word in collections.${letter} -%}
  <details>
    <summary><a href="{{word.url}}">{{ word.data.word }}</a></summary>
    {{word.templateContent | safe}}
    <!-- <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p> -->
  </details>
{%- endfor -%}
    
`;
  fs.writeFileSync(`${letter}/${letter}.njk`, content);
}