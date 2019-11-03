<template>
  <div
    class="modal fade"
    id="medicalHistoryModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">View Patient's Medical History</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
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
              <tr>
                <td>{{patient.id}}</td>
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
                  class="row p-3 mb-2"
                  v-for="medication in medicalRecord.planMedications"
                  :key="medication.id"
                >
                  <div class="col-6">
                    <label for>Medication</label>
                    <input
                      type="text"
                      class="form-control"
                      name
                      id
                      disabled
                      :value="medication.name"
                    />
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
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      patient: {}
    };
  },
  methods: {
    openDialog(patient) {
      $("#medicalHistoryModal").modal("show");
      this.patient = Object.assign({}, patient);
      this.patient.medicalRecord.reverse();
    },
    closeDialog() {
      $("#medicalHistoryModal").modal("hide");
    }
  }
};
</script>