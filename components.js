Vue.component('main-menu', {
  props: [],
  template: `
            <div class="nav">
              <image-link class="img-link" pic="work.png" size="40" url="work.html"/>
              <image-link class="img-link" pic="mail.png" size="40" url="mailto:schsvens@gmail.com"/>
              <image-link class="img-link" pic="linkedin.png" size="40" url="https://www.linkedin.com/in/sara-svensson-063aa7151/?originalSubdomain=se"/>
            </div>
            `
});

Vue.component('work-menu', {
  props: [],
  template: `
            <div class="nav">
              <image-link class="img-link" pic="home.png" size="40" url="index.html"/>
              <image-link class="img-link" pic="mail.png" size="40" url="mailto:schsvens@gmail.com"/>
              <image-link class="img-link" pic="linkedin.png" size="40" url="https://www.linkedin.com/in/sara-svensson-063aa7151/?originalSubdomain=se"/>
            </div>
            `
});


Vue.component('image-link', {
  props: ['pic', 'size', "url"],
  template: `
              <a :href="url">
                <img :height="size" :src="pic">
              </a>
              `
});
