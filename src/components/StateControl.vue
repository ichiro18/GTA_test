<template>
  <div class="state-control" v-if="enabled">
    <h4>Состояние машины</h4>
    <h4>Состояние игрока</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StateControl",
  computed: {
    ...mapGetters({
      enabled: "state/isEnabled"
    })
  }
};
</script>

<style lang="scss">
.state-control {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 3vh;
  right: 2vh;
  background-color: red;
}
</style>
