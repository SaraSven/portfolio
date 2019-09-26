import * as _ from './components.js';

const workApp = new Vue({
  el: '#menu',
  template: `<work-menu/>`
});


const portfolioApp = new Vue({
  el: '#portfolio',
  template: `
            <ul>
              <li>
                <image-link pic="work1.gif" size="250" url="https://tocico.github.io/group8/"/>
              </li>
              <li>
                <image-link pic="work2.png" size="250" url=""/>
              </li>              
              <li>
              <image-link pic="work3.png" size="250" url="https://sarasven.github.io/portfolio/"/>
            </li>   
            </ul>
            `
});
