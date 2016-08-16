require("../style/style.less");
var io = require('socket.io-client');
var feathers = require('feathers-client');
var plastiq = require('plastiq');
var h = plastiq.html;

const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

const searchService = app.service('searches');

searchService.find({
  query: {
    from: 'Belgrade',
    to: 'Rome'
  }
}).then(function (data) {
  console.log(data);
});

function render(model) {
  return h('div',
    h('label', "what's your name?"), ' ',
           h('input', {type: 'text', binding: { get: function() {
           	return model.name;
           }, set: function(value) {
           	model.name = value;
           } }}),
    h('div', 'hi ', model.name)
  );
}

plastiq.append(document.body, render, {name: ''});

