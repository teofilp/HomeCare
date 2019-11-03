<template>
  <div
    class="modal fade"
    id="addPatientToCaregiverModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Medication Plan</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <table class="table table-borderless" v-if="patients.length > 0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patient in patients" :key="patient.id">
                <td>{{patient.id}}</td>
                <td>{{patient.name}}</td>

                <td>{{patient.birthDate}}</td>
                <td>{{patient.gender}}</td>
                <td>{{patient.address}}</td>
                <td>
                  <button class="btn btn-danger" @click="deletePatientFromCaregiver(patient)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group">
            <label for="medication" class="col-form-label">Search patient:</label>
            <input
              class="form-control"
              id="medication"
              v-model="searchPatientName"
              placeholder="e.g: Gheorghe Lobont"
            />
            <div v-if="getResults(searchPatientName).length > 0">
              <hr />
              <div id="searchResults">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Birth Date</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="patient in getResults(searchPatientName)" :key="patient.id">
                      <td>{{patient.id}}</td>
                      <td>{{patient.name}}</td>
                      <td>{{patient.birthDate}}</td>
                      <td>{{patient.gender}}</td>
                      <td>{{patient.address}}</td>
                      <td>
                        <button class="btn btn-success" @click="addPatientToCaregiver(patient)">Add</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h5
            v-if="getResults(searchPatientName).length == 0 && searchPatientName !== ''"
          >Patient either doesn't exist or was already assigned to caregiver</h5>
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
  props: ["assign", "unassign"],
  data() {
    return {
      searchPatientName: "",
      caregiver: "",
      patients: [],
      allPatients: [
        {
          id: 1,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "female",
          address: "ceva adresa",
          medicalRecord: []
        },
        {
          id: 2,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "male",
          address: "ceva adresa",
          medicalRecord: []
        },
        {
          id: 3,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "male",
          address: "ceva adresa",
          medicalRecord: []
        }
      ]
    };
  },
  methods: {
    openDialog(caregiver) {
      this.caregiver = caregiver;
      this.patients = caregiver.patients;
      $("#addPatientToCaregiverModal").modal("show");
      this.searchPatientName = "";
    },

    closeDialog() {
      $("#addPatientToCaregiverModal").modal("hide");
    },

    getResults(searchPatientName) {
      if (searchPatientName == "") return [];
      return this.allPatients.filter(
        patient =>
          this.patients.findIndex(pt => pt.id == patient.id) == -1 &&
          patient.name.toLowerCase().startsWith(searchPatientName.toLowerCase())
      );
    },

    addPatientToCaregiver(patient) {
      this.assign(this.caregiver, patient);
      this.searchPatientName = "";
    },

    deletePatientFromCaregiver(patient) {
      this.unassign(this.caregiver, patient);
    }
  }
};
</script>