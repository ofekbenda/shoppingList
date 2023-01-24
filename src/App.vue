<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <ShoppingPage /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Item from "./components/Item.vue";
import List from "./components/List.vue";
import ShoppingPage from "./components/ShoppingPage.vue";
import VueRouter from "vue-router";

@Component({
  components: {
    Item,
    List,
    ShoppingPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./src/scss/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Montserrat+Alternates:wght@700&display=swap");
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-grey;
  margin-top: 60px;
}
</style>
