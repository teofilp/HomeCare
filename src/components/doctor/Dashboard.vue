<template>
  <div class="container">
    <div class="dashboard_wrapper">
      <doctors-menu></doctors-menu>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  background: rgba(71, 196, 175, 0.3);
  box-shadow: 1px 4px 3px #ccc;
  border-radius: 0.5rem;
  margin-top: 12.5vh;
  margin-left: -10%;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0.2rem;
}
::-webkit-scrollbar-track {
  background: rgba(71, 196, 175, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(71, 196, 175, 0.5);
}
</style>