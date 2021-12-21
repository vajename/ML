const fetch = require('node-fetch');
const moment = require('jalali-moment');

const repo = require('../_data/repo.json');

/** Converts numbers in a string to Farsi (persian) numebrs */
const toFaDigits = function (input) {
  input = input.toString();
  if (!input) return '';
  const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

/** Converts numbers in a string to English numebrs */
const toEnDigits = function (input) {
  input = input.toString();
  if (!input) return '';
  return input.replace(/[۰-۹]/g, function (chr) {
    const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return persian.indexOf(chr).toString();
  });
};

function uniqBy(a, key) {
  let seen = new Set();
  return a.filter(item => {
    let k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}



const ifNoValue = (value, instead = '-') => [undefined, null].includes(value) ? instead : value;
const formatTime = time => moment(time).locale('fa').format("D MMM YYYY");

const getAutherByEmail = (email, authors) => {
  const author = authors.find(i => i.email === email);
  if (author) return author;
  else return { email };
};


const getFileContributorsByAPI = async function fetchContributors(filePath) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + Buffer.from("mhsattarian" + ":" + process.env.GITHUB_TOKEN).toString('base64')
    },
  };

  return fetch(`https://api.github.com/repos/${repo.user}/${repo.name}/commits?path=${filePath}`, options).then(res => res.json())
    .then(contribs => {
      const contributors = contribs.map(i => ({
        user: i.author.login,
        url: i.author.html_url,
        /// reduce avatar image size by default
        avatar_url: i.author.avatar_url + '&s=80'
      }))

      return uniqBy(contributors, i => i.user);
    });
}

const getFileContributors = async function fetchContributors(filePath) {
  return fetch(`https://github.com/${repo.user}/${repo.name}/contributors-list/master/${filePath}`).then(res => res.text()).then(html => html.replace(/href="/g, `target="_blank" rel="noreferrer" href="//github.com`).replace(/s=40/g, "s=80"));
}


module.exports = {
  toFaDigits,
  toEnDigits,
  ifNoValue,
  formatTime,
  getAutherByEmail,
  getFileContributors,
  getFileContributorsByAPI
}