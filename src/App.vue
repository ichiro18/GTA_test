<template>
  <div class="wrapper">
    <data-sidebar-control @toggle-state-control="toggleStateControl" />
    <stateControl v-if="stateControlEnabled" />
  </div>
</template>
<script>
import DataSidebarControl from "@project_src/components/DataSidebarControl.vue";
import StateControl from "@project_src/components/StateControl.vue";

export default {
  name: "App",
  components: {
    DataSidebarControl: DataSidebarControl,
    StateControl: StateControl
  },
  data() {
    return {
      stateControl: null,
      stateControlEnabled: true
    };
  },
  methods: {
    toggleStateControl(e) {
      this.stateControlEnabled = e;
    }
  }
};
</script>
<style lang="scss">
.wrapper {
  display: block;
  height: 100vh;
  width: 100vw;
  background-image: url("./common/images/background.jpg");
  background-size: cover;
  background-position: center bottom;
}
</style>
