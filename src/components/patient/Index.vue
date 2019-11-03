<template>
  <div
    class="dashboard_wrapper"
    style="
        position: relative;
        width: 50%;
        height: 75vh;
        background: rgba(71, 196, 175, 0.3);
        box-shadow: 1px 4px 3px #ccc;
        border-radius: 0.5rem;
        margin-top: 12.5vh;
        margin-left: 25%;
        overflow: auto;
        text-align: center;"
  >
    <table class="table table-borderless mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{patient.name}}</td>

          <td>{{patient.birthDate}}</td>
          <td>{{patient.gender}}</td>
          <td>{{patient.address}}</td>
        </tr>
      </tbody>
    </table>
    <hr />

    <div class="container">
      <div v-for="medicalRecord in patient.medicalRecord" :key="medicalRecord.id">
        <div class="row">
          <h5 class="col-12">Period of Treatment: {{medicalRecord.treatmentPeriod}}</h5>
          <div
            class="row p-3 mb-2 col-12"
            v-for="medication in medicalRecord.planMedications"
            :key="medication.id"
          >
            <div class="col-5 offset-sm-1">
              <label for>Medication</label>
              <input type="text" class="form-control" name id disabled :value="medication.name" />
            </div>
            <div class="col-5 ml-2">
              <label for>Intake Intervals</label>
              <input
                type="text"
                class="form-control"
                name
                id
                disabled
                :value="medication.intakeIntervals + ' times / day'"
              />
            </div>
            <div class="col-12 mt-3" v-if="getSideEffects(medication.sideEffects).length > 0">
              <label for>Medication Side Effects</label>
              <div class="row">
                <p
                  class="col-6"
                  v-for="sideEffect in getSideEffects(medication.sideEfects)"
                  :key="sideEffect"
                >{{sideEffect}}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patient: {
        id: 3,
        name: "Andrei",
        birthDate: "2000-02-15",
        gender: "male",
        address: "ceva adresa",
        medicalRecord: [
          {
            id: 1,
            treatmentPeriod: "3 months",
            planMedications: [
              {
                id: 2,
                name: "Nurofen",
                sideEffects: ["N/a"],
                dosage: "2 pills",
                intakeIntervals: 2
              },
              {
                id: 3,
                name: "Nurofen",
                sideEffects: ["N/a"],
                dosage: "5 pills",
                intakeIntervals: 2
              }
            ]
          },
          {
            id: 2,
            treatmentPeriod: "5 months",
            planMedications: [
              {
                id: 2,
                name: "Nurofen",
                sideEffects: ["N/a"],
                dosage: "2 pills",
                intakeIntervals: 2
              },
              {
                id: 3,
                name: "Nurofen",
                sideEffects: ["N/a"],
                dosage: "5 pills",
                intakeIntervals: 2
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getSideEffects(sideEffs) {
      if (sideEffs.length == 1 && sideEffs[0] == "N/a") return [];
      return sideEffs;
    }
  }
};
</script>
