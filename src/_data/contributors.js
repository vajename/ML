const fetch = require('node-fetch');

async function fetchContributors() {
  return fetch(`https://api.github.com/repos/mhsattarian/ml-Glossary/contributors`).then(res => res.json());
}

module.exports = fetchContributors;
module.exports = [];
