<template>
  <div class="state-control" v-if="enabled">
    <car-state-control
      :closed-doors="car.closedDoors"
      :hp="car.hp"
      :headlights="car.headlights"
      :fuel="car.fuel"
      :speed="car.speed"
    />
    <h4>Состояние игрока</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarStateControl from "@project_src/components/CarStateControl.vue";

export default {
  name: "StateControl",
  components: {
    carStateControl: CarStateControl
  },
  computed: {
    ...mapGetters({
      enabled: "state/isEnabled",
      car: "state/getCarState"
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
}
</style>
