require("../style/style.less");
const io = require('socket.io-client');
const feathers = require('feathers-client');
const main = require('./main');

main(io, feathers);



