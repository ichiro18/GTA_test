<template>
  <div class="car-control">
    <div class="car-state">
      <div class="state-field icon doors" v-if="closedDoors !== undefined">
        <svg-icon icon-class="lock" :class="closeDoorsClassName" />
      </div>
      <div class="state-field icon hp" v-if="hp !== undefined">
        <svg-icon icon-class="crash" :class="hpClassName" />
      </div>
      <div class="state-field icon headlights" v-if="headlights !== undefined">
        <svg-icon
          :icon-class="headlightsProps.name"
          :class="headlightsProps.class"
        />
      </div>
      <div class="state-field speed" v-if="speed !== undefined">
        <span class="speed-value">{{ this.speed }}</span>
        <span class="speed-unit">км/ч</span>
      </div>
      <div :class="['state-field fuel-icon', fuelLevel > 3 ? '' : 'error']">
        <svg-icon icon-class="gas" />
      </div>
    </div>
    <div :class="fuelLevelClassName" v-if="fuel !== undefined">
      <div class="level" v-for="key in fuelLevel" :key="key"></div>
      <div class="level-spacer"></div>
    </div>
  </div>
</template>

<script>
import SVGIcon from "@project_src/utils/SVGIcon.vue";
// Import icons
import "@project_src/common/images/icons/SVG/lock.svg";
import "@project_src/common/images/icons/SVG/crash.svg";
import "@project_src/common/images/icons/SVG/light-on.svg";
import "@project_src/common/images/icons/SVG/light-off.svg";
import "@project_src/common/images/icons/SVG/gas.svg";

export default {
  name: "CarStateControl",
  components: {
    svgIcon: SVGIcon
  },
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
      let name = "svg";
      if (this.closedDoors) {
        name += " success";
      } else {
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
    headlightsProps() {
      let prop = {
        name: "",
        class: "svg"
      };
      if (this.headlights) {
        prop.name = "light-off";
        prop.class += " error";
      } else {
        prop.name = "light-on";
        prop.class += " success";
      }
      return prop;
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
  background-color: rgba(0, 0, 0, 0.45);
  .car-state {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: $white-primary-text-color;
    .state-field {
      margin: 0 0.301vw;
      &.icon {
        color: $primary-color;
        font-size: 1.5em;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .speed {
      display: flex;
      align-items: flex-end;
      padding-bottom: 0.53vh;
      font-family: DIN_Alternate, Roboto, Arial, sans-serif;
      margin-left: 1.3vw;
      font-size: 1em;
      .speed-value {
        display: inline-flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 3em;
        letter-spacing: -0.05em;
        line-height: 6vh;
        height: 6.396vh;
        width: 2.86vw;
        padding-right: 0.1em;
      }
      .speed-unit {
        font-size: 0.836em; // 10pt
        line-height: 3vh;
      }
    }
    .fuel-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.208vw;
      height: 100%;
      font-size: 1em;
      background-color: $primary-color;
      color: $dark-primary-text-color;
      &.error {
        background-color: $error-color;
      }
    }
  }
  .fuel-level {
    display: flex;
    justify-content: flex-end;
    height: 0.53vh;
    .level {
      width: 0.904vw;
      height: 100%;
      margin-right: 0.12vw;
      background-color: $primary-color;
      &:last-child {
        margin-right: 0;
      }
    }
    .level-spacer {
      width: 1.208vw;
      height: 0.53vh;
      background-color: $primary-color;
    }
    &.error {
      .level,
      .level-spacer {
        background-color: $error-color;
      }
    }
  }
}
</style>
