<template>
  <div
    class="modal fade"
    id="assignedPatients"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">View Caregiver's Assigned Patients</h5>
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
              <tr v-for="patient in patients" :key="patient.id">
                <td>{{patient.id}}</td>
                <td>{{patient.name}}</td>

                <td>{{patient.birthDate}}</td>
                <td>{{patient.gender}}</td>
                <td>{{patient.address}}</td>
              </tr>
            </tbody>
          </table>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
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
      patients: []
    };
  },
  methods: {
    openDialog(patients) {
      $("#assignedPatients").modal("show");
      this.patients = patients;
    },
    closeDialog() {
      $("#assignedPatients").modal("hide");
    }
  }
};
</script>