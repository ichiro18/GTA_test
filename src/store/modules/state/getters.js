export default {
  isEnabled: state => !!state.enabled,
  getCarState: state => state.car,
  getUserState: state => state.user,
  getTime: state => state.time
};
