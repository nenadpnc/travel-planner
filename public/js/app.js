require("../style/style.less");
var plastiq = require('plastiq');
var h = plastiq.html;

function render(model) {
  return h('div',
    h('label', "what's your name?"), ' ',
    h('input', {type: 'text', binding: [model, 'name']}),
    h('div', 'hi ', model.name)
  );
}

plastiq.append(document.body, render, {name: ''});

