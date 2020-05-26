const alphabet = Array.from(
  new Set([..."a quick brown fox jumps over the lazy dog"])
)
  .sort()
  .slice(1);

module.exports = function ({ collections }) {
  const alphabetC = alphabet.map((l) => l.toUpperCase());
  
  return `
      <ul>
        ${Object.keys(collections)
          .filter(c => alphabetC.includes(c.toUpperCase()))
          .map(c => {
            return `<p>${c} ${collections[c].templateContent}</p>`
          }).join('\n')}
      </ul>`;

};
