const fetch = require('node-fetch');
const moment = require('jalali-moment');

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

const ifNoValue = (value, instead = '-') => [undefined, null].includes(value) ? instead : value;
const formatTime = time => moment(time).locale('fa').format("Do MMM YYYY");

const getAutherByEmail = (email, authors) => {
  const author = authors.find(i => i.email === email);
  if (author) return author;
  else return { email };
};


const getFileContributors = async function fetchContributors(filePath) {
  return fetch(`https://github.com/mhsattarian/ML-Glossary/contributors-list/master/${filePath}`).then(res => res.text());
}


module.exports = {
  toFaDigits,
  toEnDigits,
  ifNoValue,
  formatTime,
  getAutherByEmail,
  getFileContributors
}