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
  return a.filter((item) => {
    let k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}

const ifNoValue = (value, instead = '-') =>
  [undefined, null].includes(value) ? instead : value;

const formatTime = (time) => moment(time).locale('fa').format('D MMM YYYY');

const getAutherByEmail = (email, authors) => {
  const author = authors.find((i) => i.email === email);
  if (author) return author;
  else return { email };
};

module.exports = {
  toFaDigits,
  toEnDigits,
  ifNoValue,
  formatTime,
  getAutherByEmail,
  uniqBy,
};
