<template>
  <div class="user-control">
    <div class="state-field icon money" v-if="money !== undefined">
      <svg-icon icon-class="wallet" />
      <span class="value">${{ money }}</span>
    </div>
    <div class="state-field icon time" v-if="time !== undefined">
      <svg-icon icon-class="time" />
      <span class="value">{{ serverTime }}</span>
    </div>
  </div>
</template>

<script>
import SVGIcon from "@project_src/utils/SVGIcon.vue";
// Import icons
import "@project_src/common/images/icons/SVG/time.svg";
import "@project_src/common/images/icons/SVG/wallet.svg";
import "@project_src/common/images/icons/SVG/ammo.svg";

export default {
  name: "UserStateControl",
  components: {
    svgIcon: SVGIcon
  },
  props: {
    money: {
      type: Number
    },
    time: {
      type: Date
    }
  },
  computed: {
    serverTime() {
      return this.time.getHours() + ":" + this.time.getMinutes();
    }
  }
};
</script>

<style lang="scss">
@import "../common/styles/config/variables";

.user-control {
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 0.53vh;
  .state-field {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.264vh;
    color: $white-primary-text-color;
    margin-right: 0.602vw;
    font-family: "TT Norms", Roboto, Arial, sans-serif;
    font-size: 1.2em;
    &.icon {
      .svg-icon {
        font-size: 1.5em;
        margin-right: 0.3vw;
      }
    }
    &:first-child {
      margin-left: 0.602vw;
    }
  }
  /*
   Патроны [TTNorms] Bold 18pt
   Всего [TTNorms] Medium 12pt
   Деньги [TTNorms] Medium 18pt
   Время [TTNorms] Medium 18pt
   */
}
</style>
