<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="column in tableColumns" :key="column">{{column}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="data in tableData">
        <td v-for="dataProp in extractData(data)">{{dataProp}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["tableColumns", "tableData"],
  methods: {
    extractData(data) {
      return Object.values(data);
    }
  }
};
</script>

<style scoped>
tbody tr:nth-of-type(odd) {
  background: rgba(71, 196, 175, 0.7);
  color: white;
}

tbody tr:nth-of-type(even) {
  background: rgba(71, 196, 175, 0.2);
  color: white;
}
</style>