// * Global
import Vue from "vue";
import App from "@project_src/App.vue";
// * Styles
import "@project_src/common/styles/theme.scss";

new Vue({
  render: h => h(App)
}).$mount("#app");
