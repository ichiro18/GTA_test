export default {
  setEnabled(state, message) {
    state.enabled = !!message;
  },
  closeDoors(state, message) {
    state.car.closedDoors = !!message;
  },
  setHP(state, message) {
    state.car.hp = message;
  },
  setSpeed(state, message) {
    state.car.speed = message;
  },
  setFuel(state, message) {
    state.car.fuel = message;
  },
  setMoney(state, message) {
    state.user.money = message;
  },
  toggleHeadlight(state, message) {
    state.car.headlights = !!message;
  }
};
