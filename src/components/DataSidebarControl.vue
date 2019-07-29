<template>
  <div class="sidebar">
    <h3 class="title">Состояние игрока</h3>
    <div class="input-field">
      <input
        id="stateControlEnabled"
        type="checkbox"
        v-model="stateControlEnabled"
        v-on:change="toggleStateControlEnabled"
      />
      <label for="stateControlEnabled">Активность GUI</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataSidebarControl",
  data() {
    return {
      stateControlEnabled: true
    };
  },
  methods: {
    toggleStateControlEnabled() {
      this.$emit("toggle-state-control", this.stateControlEnabled);
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: calc(100vh - 60px);
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: white;
  padding: 15px;
  .title {
    text-align: center;
  }
}
</style>
