<template>
  <div class="user-control">
    <div class="state-field icon money" v-if="money !== undefined">
      <i class="fas fa-wallet"></i>
      <span class="value">${{ money }}</span>
    </div>
    <div class="state-field icon time" v-if="time !== undefined">
      <i class="far fa-clock"></i>
      <span class="value">{{ serverTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserStateControl",
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
  background-color: rgba(0, 0, 0, 0.6);
  .state-field {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.264vh;
    color: $white-primary-text-color;
    margin-right: 0.602vw;
    &.icon {
      i {
        margin-right: 0.3vw;
      }
    }
    &:first-child {
      margin-left: 0.602vw;
    }
  }
}
</style>
