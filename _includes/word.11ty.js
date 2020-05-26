exports.render = function(data) {
  return `
    <h3>${data.word}</h3>
    <div style="border: 1px dashed black;">${data.content}</div>
  `;
  };