<template>
  <div class="sidebar">
    <h3 class="title">Состояние игрока</h3>
    <div class="input-field">
      <input
        id="stateControlEnabled"
        type="checkbox"
        v-model="stateControlEnabled"
      />
      <label for="stateControlEnabled">Активность GUI</label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataSidebarControl",
  computed: {
    ...mapGetters({
      controlEnabled: "state/isEnabled"
    }),
    stateControlEnabled: {
      get() {
        return this.controlEnabled;
      },
      set(value) {
        this.$store.commit("state/setEnabled", !!value);
      }
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
