<template>
  <div class="wrapper">
    <data-sidebar-control />
    <stateControl />
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
