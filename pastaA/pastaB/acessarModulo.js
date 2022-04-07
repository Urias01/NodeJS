const moduleA = require('../../moduleA');
const saudacao = require('saudacao');

console.log(moduleA.ola);
console.log(saudacao.ola);

const c = require('./pastaC');
console.log(c.ola2)

/*
const http = require('http');
http.createServer(function (req, res){
    res.write('Bom dia');
    res.end();
}).listen(8080);
*/