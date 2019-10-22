<template>
  <div class="container">
    <div class="dashboard_wrapper">
      <doctors-menu></doctors-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    DoctorsMenu: Menu
  }
};
</script>

<style scoped>
.dashboard_wrapper {
  position: relative;
  width: 120%;
  height: 75vh;
  background: rgba(71, 196, 175, .3);
  box-shadow: 1px 4px 3px #ccc;
  border-radius: 0.5rem;
  margin-top: 12.5vh;
  margin-left: -10%;
}
</style>