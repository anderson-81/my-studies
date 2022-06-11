let mod = require('./modulos/mensagem');
mod.greeting('Anderson');

let sqr = require('./modulos/square');
console.log(sqr.square(7));

let { greeting } = require('./modulos/mensagem'); 
greeting('Anderson');




