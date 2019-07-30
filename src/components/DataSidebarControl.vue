<template>
  <div class="sidebar">
    <h3 class="title">Состояние окружения</h3>
    <div class="input-field">
      <input
        id="stateControlEnabled"
        type="checkbox"
        v-model="stateControlEnabled"
      />
      <label for="stateControlEnabled">Активность GUI</label>
    </div>
    <h4>Состояние авто</h4>
    <div class="input-field">
      <input id="carLockedDoors" type="checkbox" v-model="carLockedDoors" />
      <label for="carLockedDoors">Двери</label>
    </div>
    <div class="input-field">
      <input id="carHeadlight" type="checkbox" v-model="carHeadlight" />
      <label for="carHeadlight">Свет</label>
    </div>
    <div class="input-field range">
      <label for="carDamage">Повреждения</label>
      <input
        id="carDamage"
        type="range"
        min="0"
        max="100"
        v-model.number="carDamage"
      />
    </div>
    <div class="input-field range">
      <label for="carDamage">Топливо</label>
      <input
        id="carFuel"
        type="range"
        min="0"
        max="100"
        v-model.number="carFuel"
      />
    </div>
    <div class="input-field">
      <label for="carSpeed">Скорость</label>
      <input id="carSpeed" type="number" v-model.number="carSpeed" />
    </div>
    <h4>Состояние пользователя</h4>
    <div class="input-field">
      <label for="userMoney">Деньги</label>
      <input id="userMoney" type="number" min="0" v-model.number="userMoney" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataSidebarControl",
  computed: {
    ...mapGetters({
      controlEnabled: "state/isEnabled",
      car: "state/getCarState",
      user: "state/getUserState"
    }),
    stateControlEnabled: {
      get() {
        return this.controlEnabled;
      },
      set(value) {
        this.$store.commit("state/setEnabled", !!value);
      }
    },
    carLockedDoors: {
      get() {
        return this.car.closedDoors;
      },
      set(value) {
        this.$store.commit("state/closeDoors", !!value);
      }
    },
    carHeadlight: {
      get() {
        return this.car.headlights;
      },
      set(value) {
        this.$store.commit("state/toggleHeadlight", !!value);
      }
    },
    carDamage: {
      get() {
        return 100 - this.car.hp;
      },
      set(value) {
        const hp = 100 - value;
        this.$store.commit("state/setHP", hp);
      }
    },
    carFuel: {
      get() {
        return this.car.fuel;
      },
      set(value) {
        this.$store.commit("state/setFuel", value);
      }
    },
    carSpeed: {
      get() {
        return this.car.speed;
      },
      set(value) {
        this.$store.commit("state/setSpeed", value);
      }
    },
    userMoney: {
      get() {
        return this.user.money;
      },
      set(value) {
        this.$store.commit("state/setMoney", value);
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
  .input-field {
    margin-bottom: 15px;
    &.range {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
