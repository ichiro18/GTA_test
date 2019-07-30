// * Global
import Vue from "vue";
import App from "@project_src/App.vue";
import store from "@project_src/store";
// * Styles
import "@project_src/common/styles/theme.scss";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
