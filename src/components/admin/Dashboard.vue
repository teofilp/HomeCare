<template>
  <div class="container">
    <div class="dashboard_wrapper">
      <admin-menu></admin-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    AdminMenu: Menu
  }
};
</script>

<style scoped>
.dashboard_wrapper {
  position: relative;
  width: 120%;
  height: 75vh;
  background: #e3e3e3;
  box-shadow: 1px 4px 3px #ccc;
  border-radius: 0.5rem;
  margin-top: 12.5vh;
  margin-left: -10%;
}
</style>