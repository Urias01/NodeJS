const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 5', function() {
    console.log('Executando tafefa 1!', new Date().getSeconds())
});

setTimeout(function(){
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!')
}, 20000);

// setImmediate 
// setInterval

const regra = new schedule.RecurrenceRule() ;
regra.hour = 14 ;
regra.second = 30 ;

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
});