<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Applications">Applications</router-link> |
      <router-link to="/Experience">Experience</router-link> |
      <router-link to="/Clients">Clients</router-link> |
      <router-link to="/Skills">Skills</router-link> |
      <router-link to="/Blog">Blog</router-link> |
      <router-link to="/Contact">Contact</router-link> |
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
  background-color: #004069;
  color: #004069;
  width: 1800px;
}

#nav {
  padding: 30px;
  text-align: center;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  a {
    font-weight: bold;
    color: #f29f2c;

    &.router-link-exact-active {
      color: #f29f2c;
    }
  }
}
.md-list-item-text {
  width: 1000px;
  color: #f29f2c;
}
</style>
<script>
import Vue from "vue";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdToolbar,
  MdDrawer,
  MdCard,
  MdWithHover,
  MdRipple,
  MdWithHeader
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.Use(MdWithHover);
Vue.Use(MdWithHeader);
Vue.Use(MdRipple);

export default {
  name: "MaterialIcons"
};
const linkActiveClass = "my-link-active-class";

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;

// pass custom class to Vue Router
{
  ("RegularToolbar");
}
</script>
