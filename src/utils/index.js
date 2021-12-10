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


module.exports = {
  toFaDigits,
  toEnDigits
}