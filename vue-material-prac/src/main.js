import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MdButton from "vue-material/dist/components";
import MdContent from "vue-material/dist/components";
import MdTabs from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueMaterial from "vue-material";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdButton);

Vue.config.productionTip = false;

const linkActiveClass = "my-link-active-class";

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
