<template>
  <div class="user-control">
    <div class="state-field armed" v-if="armed">
      <div class="weapon-state">
        <svg-icon icon-class="ammo" />
        <div class="ammo">
          <span class="clip-size">{{ weapon.clipSize }}</span>
          <span class="count">{{ weapon.ammo }}</span>
        </div>
      </div>
      <div :class="['weapon', weapon.type]"></div>
    </div>
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
    },
    armed: {
      type: Boolean
    },
    weapon: {
      type: Object
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
  height: 4em;

  .state-field {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: $white-primary-text-color;
    margin-right: 0.602vw;
    font-family: "TT Norms", Roboto, Arial, sans-serif;
    font-size: 1.125em;

    &.icon {
      .svg-icon {
        font-size: 1.5em;
        margin-right: 0.3vw;
      }
    }

    &:first-child {
      margin-left: 0.602vw;
    }

    &.armed {
      .weapon-state {
        display: flex;
        align-items: center;
        position: absolute;
        left: -15%;
        padding: 0.53vh;
        background-color: $primary-color;
        color: $dark-primary-text-color;
        .ammo {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          .clip-size {
            font-weight: bold;
          }
          .count {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
        .svg-icon {
          font-size: 2em;
        }
      }
      .weapon {
        display: flex;
        position: relative;
        width: 7.8vw;
        height: 4em;
        background-image: url("../common/images/icons/weapon_sprite.png");
        background-size: 7.8vw auto;
        background-repeat: no-repeat;
        background-position-x: center;
        filter: brightness(0) invert(1);
        &.gun1 {
          background-position-y: 1.75%;
        }
        &.gun2 {
          background-position-y: 8.75%;
        }
        &.gun3 {
          background-position-y: 15.5%;
        }
        &.gun4 {
          background-position-y: 22.5%;
        }
        &.gun5 {
          background-position-y: 29%;
        }
        &.gun6 {
          background-position-y: 36%;
        }
        &.gun7 {
          background-position-y: 43%;
        }
        &.gun8 {
          background-position-y: 49%;
        }
        &.gun9 {
          background-position-y: 57%;
        }
        &.gun10 {
          background-position-y: 64%;
        }
        &.gun11 {
          background-position-y: 70.7%;
        }
        &.gun12 {
          background-position-y: 76%;
        }
        &.gun13 {
          background-position-y: 83%;
        }
        &.gun14 {
          background-position-y: 91%;
        }
        &.gun15 {
          background-position-y: 96%;
        }
      }
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
