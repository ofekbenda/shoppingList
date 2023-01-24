import Vue from "vue";
import App from "./App.vue";
import VueRouter, { RouteConfig } from "vue-router";
import ShoppingPage from "@/components/ShoppingPage.vue";
import ItemDetails from "@/components/ItemDetails.vue";

Vue.config.productionTip = false;

const routes: Array<RouteConfig> = [
  { path: "/", name: "Home", component: ShoppingPage },
  { path: "/item/:id", name: "Details", component: ItemDetails, props: true },
  // { path: "/item", component: App },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

export default router;
