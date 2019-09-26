import * as _ from './components.js';

let app = new Vue({
  el: '#app',
  template: `<main-menu/>`
});

function strobe(speed) {
  const fonts = ["big-turret", "font2", "font3", "font4", "font5"];
  let counter = 0;
  let flag = true;
  function strobeCallback() {
    fonts.forEach((font)=> {
      document.getElementById("name").classList.remove(font);  
    })
    document.getElementById("name").classList.add(fonts[counter]);

    counter++;

    counter = counter % fonts.length;

    if(flag) {
      document.getElementById("name").style.color = "#FFFFFF";
      document.body.style.backgroundColor = "#000000"
    }
    else {
      document.getElementById("name").style.color = "#000000";
      document.body.style.backgroundColor = "#FFFFFF"
    }
    flag = !flag;
  }

  setInterval(strobeCallback, speed);
}

strobe(300);
