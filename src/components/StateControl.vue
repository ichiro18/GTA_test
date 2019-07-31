<template>
  <div class="state-control" v-if="enabled">
    <car-state-control
      class="control-part"
      :closed-doors="car.closedDoors"
      :hp="car.hp"
      :headlights="car.headlights"
      :fuel="car.fuel"
      :speed="car.speed"
    />
    <user-state-control
      class="control-part"
      :money="user.money"
      :armed="user.armed"
      :weapon="user.weapon"
      :time="serverTime"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarStateControl from "@project_src/components/CarStateControl.vue";
import UserStateControl from "@project_src/components/UserStateControl.vue";

export default {
  name: "StateControl",
  components: {
    carStateControl: CarStateControl,
    userStateControl: UserStateControl
  },
  computed: {
    ...mapGetters({
      enabled: "state/isEnabled",
      car: "state/getCarState",
      user: "state/getUserState",
      serverTime: "state/getTime"
    })
  }
};
</script>

<style lang="scss">
.state-control {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 3vh;
  right: 2vw;
  .control-part {
    margin-bottom: 1.599vh;
    flex: 0 1 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
