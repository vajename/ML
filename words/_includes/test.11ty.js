exports.render = function (data) {
  return `
     <h2>${data.translation}</h2>
     <h3>${data.word}</h3>
     <div>${data.content}</div>
   `;
};
