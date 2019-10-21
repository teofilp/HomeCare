<template>
  <ul>
    <router-link tag="li" active-class="active" to="patients">Patients</router-link>
    <router-link tag="li" active-class="active" to="caregivers">Caregivers</router-link>
    <router-link tag="li" active-class="active" to="medications">Medications</router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  padding: 1.75rem;
  list-style: none;
}

ul li {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  margin: 0.25rem;
  border-radius: 0.2rem;
  border: 0px solid rgb(21, 146, 125);

  color: white;
  background: linear-gradient(
    to right,
    rgba(71, 196, 175),
    rgba(71, 196, 175, 0.6)
  );

  transition: all 0.3s;
}

ul li:hover {
  cursor: pointer;
}

ul li.active {
  border-width: 2px;
}
</style>