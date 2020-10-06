<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Applications">Applications</router-link> |
      <router-link to="/Experience">Experience</router-link> |
      <router-link to="/Skills">Skills</router-link> |
      <router-link to="/Blog">Blog</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Vue from "vue";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdToolbar,
  MdDrawer
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
export default {
  name: "MaterialIcons"
};
const linkActiveClass = "my-link-active-class";

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;

// pass custom class to Vue Router
</script>
