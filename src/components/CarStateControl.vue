<template>
  <div class="car-control">
    <div class="car-state">
      <div class="state-field icon doors" v-if="closedDoors !== undefined">
        <i :class="closeDoorsClassName"></i>
      </div>
      <div class="state-field icon hp" v-if="hp !== undefined">
        <i :class="hpClassName"></i>
      </div>
      <div class="state-field icon headlights" v-if="headlights !== undefined">
        <i :class="headlightsClassName"></i>
      </div>
      <div class="state-field speed" v-if="speed !== undefined">
        <span class="speed-value">{{ this.speed }}</span>
        <span class="speed-unit">км/ч</span>
      </div>
      <div class="state-field fuel-icon">
        <i class="fas fa-gas-pump"></i>
      </div>
    </div>
    <div :class="fuelLevelClassName" v-if="fuel !== undefined">
      <div class="level" v-for="key in fuelLevel" :key="key"></div>
      <div class="level-spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarStateControl",
  props: {
    closedDoors: {
      type: Boolean
    },
    hp: {
      type: Number
    },
    headlights: {
      type: Boolean
    },
    fuel: {
      type: Number
    },
    speed: {
      type: Number
    }
  },
  computed: {
    closeDoorsClassName() {
      let name = "fas";
      if (this.closedDoors) {
        name += " fa-lock";
        name += " success";
      } else {
        name += " fa-lock-open";
        name += " error";
      }
      return name;
    },
    hpClassName() {
      let name = "fas fa-car-crash";
      switch (true) {
        case this.hp > 70:
          name += " success";
          break;
        case this.hp <= 30:
          name += " error";
          break;
        default:
          name += " default";
      }
      return name;
    },
    headlightsClassName() {
      let name = "far fa-lightbulb";
      if (this.headlights) {
        name += " error";
      } else {
        name += " success";
      }
      return name;
    },
    fuelLevel() {
      return Math.floor(this.fuel / 10);
    },
    fuelLevelClassName() {
      let name = "fuel-level";
      if (this.fuelLevel <= 3) {
        name += " error";
      }
      return name;
    }
  }
};
</script>

<style lang="scss">
@import "../common/styles/config/variables";

.car-control {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  .car-state {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: $white-primary-text-color;
    .state-field {
      margin: 0 5px;
      &.icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .speed {
      .speed-value {
        font-size: 2rem;
        letter-spacing: -0.1rem;
      }
      .speed-unit {
        font-size: 0.7rem;
      }
    }
    .fuel-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 45px;
      background-color: $primary-color;
      color: $dark-primary-text-color;
    }
  }
  .fuel-level {
    display: flex;
    justify-content: flex-end;
    height: 5px;
    .level {
      width: 15px;
      height: 100%;
      margin-right: 2px;
      background-color: $primary-color;
      &:last-child {
        margin-right: 0;
      }
    }
    .level-spacer {
      width: 30px;
      height: 5px;
      background-color: $primary-color;
    }
    &.error {
      .level {
        background-color: $error-color;
      }
    }
  }
}
</style>
