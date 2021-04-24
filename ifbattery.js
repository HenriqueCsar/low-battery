//Dependencies
var beep = require('beepbeep');
var bateria = require('battery-level');


function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }   

async function init(resultado) {
    x = 10
    while (x) {
        if (await bateria() < 0.30){
          console.log(typeof(await bateria()))
            //you can enter any information here.
            beep(3)
            }
        await sleep(600000)
        console.log('Cheguei no tempo')
          }
        }

init()
