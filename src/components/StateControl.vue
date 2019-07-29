<template>
  <div class="state-control">
    <h4>Состояние машины</h4>
    <h4>Состояние игрока</h4>
  </div>
</template>

<script>
export default {
  name: "StateControl"
};
</script>

<style lang="scss">
.state-control {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  position: absolute;
  bottom: 3vh;
  right: 2vh;
  background-color: red;
}
</style>
