<template>
  <div class="dashboard_wrapper">
    <table class="table table-borderless">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in caregiver.patients" :key="patient.id">
          <td>{{patient.id}}</td>
          <td>{{patient.name}}</td>

          <td>{{patient.birthDate}}</td>
          <td>{{patient.gender}}</td>
          <td>{{patient.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caregiver: {
        id: 1,
        name: "Andrei",
        birthDate: "2000-02-15",
        gender: "female",
        address: "ceva adresa",
        patients: [
          {
            id: 2,
            name: "Andrei",
            birthDate: "2000-02-15",
            gender: "male",
            address: "ceva adresa"
          },
          {
            id: 3,
            name: "Andrei",
            birthDate: "2000-02-15",
            gender: "male",
            address: "ceva adresa"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.dashboard_wrapper {
  position: relative;
  width: 50%;
  max-height: 75vh;
  background: rgba(71, 196, 175, 0.3);
  box-shadow: 1px 4px 3px #ccc;
  border-radius: 0.5rem;
  margin-top: 12.5vh;
  margin-left: 25%;
  overflow: auto;
  text-align: center;
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